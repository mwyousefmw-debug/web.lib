export function register() {
  // Node.js 22+ exposes localStorage as a global Web Storage API.
  // When the dev server starts without a valid --localstorage-file path,
  // localStorage is a broken stub where getItem/setItem are not functions.
  // This crashes next-themes during SSR: it checks typeof localStorage !== 'undefined'
  // (finds it defined in Node.js 22+), then calls localStorage.getItem() → TypeError.
  //
  // Fix: Replace the broken stub with a no-op implementation so next-themes
  // gracefully falls back to the default theme on the server.
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof (globalThis.localStorage as Storage).getItem !== "function"
  ) {
    (globalThis as Record<string, unknown>).localStorage = {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
      clear: () => undefined,
      key: () => null,
      length: 0,
    };
  }
}
