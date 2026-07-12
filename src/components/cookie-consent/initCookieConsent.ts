import { analyticsConfig } from '../../data/analytics';
import {
  createConsentRecord,
  formatConsentTimestamp,
  readConsentRecord,
  writeConsentRecord,
  type CookieConsentRecord,
} from '../../lib/cookieConsent';
import {
  applyAnalyticsConsent,
  initDefaultConsentMode,
  removeAnalyticsScripts,
} from './loadAnalytics';

type ConsentElements = {
  root: HTMLElement;
  banner: HTMLElement;
  modal: HTMLElement;
  backdrop: HTMLElement;
  fab: HTMLButtonElement;
  statisticsToggle: HTMLInputElement;
  marketingToggle: HTMLInputElement;
  statusPanel: HTMLElement;
  statusId: HTMLElement;
  statusDate: HTMLElement;
  statisticsStatus: HTMLElement;
  marketingStatus: HTMLElement;
};

function getElements(root: HTMLElement): ConsentElements | null {
  const banner = root.querySelector<HTMLElement>('[data-cookie-banner]');
  const modal = root.querySelector<HTMLElement>('[data-cookie-modal]');
  const backdrop = root.querySelector<HTMLElement>('[data-cookie-backdrop]');
  const fab = root.querySelector<HTMLButtonElement>('[data-cookie-fab]');
  const statisticsToggle = root.querySelector<HTMLInputElement>(
    '[data-cookie-toggle="statistics"]',
  );
  const marketingToggle = root.querySelector<HTMLInputElement>(
    '[data-cookie-toggle="marketing"]',
  );
  const statusPanel = root.querySelector<HTMLElement>('[data-cookie-status]');
  const statusId = root.querySelector<HTMLElement>('[data-cookie-status-id]');
  const statusDate = root.querySelector<HTMLElement>(
    '[data-cookie-status-date]',
  );
  const statisticsStatus = root.querySelector<HTMLElement>(
    '[data-cookie-status-statistics]',
  );
  const marketingStatus = root.querySelector<HTMLElement>(
    '[data-cookie-status-marketing]',
  );

  if (
    !banner ||
    !modal ||
    !backdrop ||
    !fab ||
    !statisticsToggle ||
    !marketingToggle ||
    !statusPanel ||
    !statusId ||
    !statusDate ||
    !statisticsStatus ||
    !marketingStatus
  ) {
    return null;
  }

  return {
    root,
    banner,
    modal,
    backdrop,
    fab,
    statisticsToggle,
    marketingToggle,
    statusPanel,
    statusId,
    statusDate,
    statisticsStatus,
    marketingStatus,
  };
}

function setBannerVisible(elements: ConsentElements, visible: boolean): void {
  elements.banner.hidden = !visible;
  elements.root.dataset.bannerVisible = visible ? 'true' : 'false';
}

function setModalVisible(elements: ConsentElements, visible: boolean): void {
  elements.modal.hidden = !visible;
  elements.backdrop.hidden = !visible;
  elements.root.dataset.modalVisible = visible ? 'true' : 'false';
  document.documentElement.classList.toggle('cookie-consent-modal-open', visible);
}

function setFabVisible(elements: ConsentElements, visible: boolean): void {
  elements.fab.hidden = !visible;
}

function syncToggles(
  elements: ConsentElements,
  record: CookieConsentRecord | null,
): void {
  elements.statisticsToggle.checked = record?.statistics ?? false;
  elements.marketingToggle.checked = record?.marketing ?? false;
}

function syncStatus(elements: ConsentElements, record: CookieConsentRecord): void {
  elements.statusPanel.hidden = false;
  elements.statusId.textContent = record.consentId;
  elements.statusDate.textContent = formatConsentTimestamp(record.timestamp);
  elements.statisticsStatus.textContent = record.statistics
    ? 'Activat'
    : 'Dezactivat';
  elements.marketingStatus.textContent = record.marketing
    ? 'Activat'
    : 'Dezactivat';
}

function persistConsent(
  elements: ConsentElements,
  categories: { statistics: boolean; marketing: boolean },
  options: { reloadOnRevoke?: boolean } = {},
): void {
  const previous = readConsentRecord();
  const record = createConsentRecord(categories);
  const revokedStatistics = previous?.statistics && !record.statistics;
  const revokedMarketing = previous?.marketing && !record.marketing;

  writeConsentRecord(record);
  syncToggles(elements, record);
  syncStatus(elements, record);
  setBannerVisible(elements, false);
  setFabVisible(elements, true);

  if (options.reloadOnRevoke && (revokedStatistics || revokedMarketing)) {
    window.location.reload();
    return;
  }

  applyAnalyticsConsent(
    record,
    analyticsConfig.gaMeasurementId,
    analyticsConfig.clarityProjectId,
  );
}

export function initCookieConsent(root: HTMLElement): () => void {
  const elements = getElements(root);
  if (!elements) return () => {};

  initDefaultConsentMode();

  const cleanups: Array<() => void> = [];
  const on = (
    target: EventTarget,
    type: string,
    listener: EventListener,
    options?: AddEventListenerOptions,
  ) => {
    target.addEventListener(type, listener, options);
    cleanups.push(() => target.removeEventListener(type, listener, options));
  };

  const openModal = () => {
    const record = readConsentRecord();
    syncToggles(elements, record);
    if (record) syncStatus(elements, record);
    setModalVisible(elements, true);
  };

  const closeModal = () => setModalVisible(elements, false);

  const existing = readConsentRecord();

  if (existing) {
    setBannerVisible(elements, false);
    setFabVisible(elements, true);
    syncToggles(elements, existing);
    syncStatus(elements, existing);
    applyAnalyticsConsent(
      existing,
      analyticsConfig.gaMeasurementId,
      analyticsConfig.clarityProjectId,
    );
  } else {
    setBannerVisible(elements, true);
    setFabVisible(elements, false);
    elements.statusPanel.hidden = true;
  }

  on(elements.root, 'click', (event) => {
    const target = event.target as HTMLElement | null;
    const action = target?.closest<HTMLElement>('[data-cookie-action]')
      ?.dataset.cookieAction;

    if (!action) return;

    switch (action) {
      case 'accept-all':
        persistConsent(elements, { statistics: true, marketing: true });
        closeModal();
        break;
      case 'reject-all':
        persistConsent(elements, { statistics: false, marketing: false });
        closeModal();
        break;
      case 'open-preferences':
        openModal();
        break;
      case 'close-preferences':
        closeModal();
        break;
      case 'save-preferences':
        persistConsent(
          elements,
          {
            statistics: elements.statisticsToggle.checked,
            marketing: elements.marketingToggle.checked,
          },
          { reloadOnRevoke: true },
        );
        closeModal();
        break;
      case 'open-fab':
        openModal();
        break;
      default:
        break;
    }
  });

  on(elements.backdrop, 'click', closeModal);

  on(document, 'keydown', (event) => {
    if (
      event instanceof KeyboardEvent &&
      event.key === 'Escape' &&
      elements.root.dataset.modalVisible === 'true'
    ) {
      closeModal();
    }
  });

  return () => {
    document.documentElement.classList.remove('cookie-consent-modal-open');
    removeAnalyticsScripts();
    cleanups.forEach((cleanup) => cleanup());
  };
}
