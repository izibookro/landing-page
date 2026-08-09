const COOKIE_CONSENT_STORAGE_KEY = 'cookie-consent-v2';
const COOKIE_CONSENT_VERSION = 2;

export type CookieConsentCategories = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = CookieConsentCategories & {
  version: typeof COOKIE_CONSENT_VERSION;
  consentId: string;
  timestamp: string;
};

export function createConsentRecord(
  categories: Omit<CookieConsentCategories, 'necessary'>,
): CookieConsentRecord {
  return {
    version: COOKIE_CONSENT_VERSION,
    consentId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    necessary: true,
    statistics: categories.statistics,
    marketing: categories.marketing,
  };
}

export function readConsentRecord(): CookieConsentRecord | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentRecord;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeConsentRecord(record: CookieConsentRecord): void {
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify(record),
  );
}

export function formatConsentTimestamp(isoDate: string): string {
  return new Intl.DateTimeFormat('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(isoDate));
}
