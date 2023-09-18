// src/utils/localStorageEvent.ts

const localStorageEvent = new Event('localStorageChange');

export function triggerLocalStorageChange() {
  window.dispatchEvent(localStorageEvent);
}

export function addLocalStorageChangeListener(callback: () => void) {
  window.addEventListener('localStorageChange', callback);
}

export function removeLocalStorageChangeListener(callback: () => void) {
  window.removeEventListener('localStorageChange', callback);
}
