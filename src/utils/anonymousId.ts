import Cookies from 'js-cookie';

const ANONYMOUS_ID_COOKIE = 'anonymous_id';
const COOKIE_EXPIRY_DAYS = 365;

/**
 * Generates a UUID v4
 * @returns A valid UUID v4 string
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Gets or creates an anonymous ID for the current visitor
 * The ID is stored in a cookie to persist across sessions
 * @returns A valid UUID v4 string
 */
export function getOrCreateAnonymousId(): string {
  let anonymousId = Cookies.get(ANONYMOUS_ID_COOKIE);
  
  if (!anonymousId) {
    anonymousId = generateUUID();
    Cookies.set(ANONYMOUS_ID_COOKIE, anonymousId, {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: 'Lax',
      secure: true,
    });
  }
  
  return anonymousId;
}

/**
 * Gets the current anonymous ID if it exists
 * @returns The anonymous ID or null if not set
 */
export function getAnonymousId(): string | null {
  return Cookies.get(ANONYMOUS_ID_COOKIE) || null;
}

