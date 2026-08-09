import type { CookieConsentRecord } from '../../lib/cookieConsent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const loadedScripts = {
  ga: false,
  clarity: false,
};

function ensureDataLayer(): void {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function applyConsentMode(record: CookieConsentRecord): void {
  ensureDataLayer();

  window.gtag?.('consent', 'update', {
    analytics_storage: record.statistics ? 'granted' : 'denied',
    ad_storage: record.marketing ? 'granted' : 'denied',
    ad_user_data: record.marketing ? 'granted' : 'denied',
    ad_personalization: record.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
}

export function initDefaultConsentMode(): void {
  ensureDataLayer();

  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  });
}

function loadGoogleAnalytics(measurementId: string): void {
  if (!measurementId || loadedScripts.ga) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.cookieAnalytics = 'ga';
  document.head.appendChild(script);

  ensureDataLayer();
  window.gtag?.('js', new Date());
  window.gtag?.('config', measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  loadedScripts.ga = true;
}

function loadMicrosoftClarity(projectId: string): void {
  if (!projectId || loadedScripts.clarity) return;

  const inlineScript = document.createElement('script');
  inlineScript.type = 'text/javascript';
  inlineScript.dataset.cookieAnalytics = 'clarity';
  inlineScript.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${projectId}");`;
  document.head.appendChild(inlineScript);

  loadedScripts.clarity = true;
}

export function applyAnalyticsConsent(
  record: CookieConsentRecord,
  measurementId: string,
  clarityProjectId: string,
): void {
  initDefaultConsentMode();
  applyConsentMode(record);

  if (record.statistics) {
    loadGoogleAnalytics(measurementId);
    loadMicrosoftClarity(clarityProjectId);
  }
}

export function removeAnalyticsScripts(): void {
  document
    .querySelectorAll<HTMLScriptElement>('script[data-cookie-analytics]')
    .forEach((script) => script.remove());

  loadedScripts.ga = false;
  loadedScripts.clarity = false;
}
