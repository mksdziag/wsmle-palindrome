export function saveToLs(key, item) {
  return window.localStorage.setItem(key, JSON.stringify(item));
}

export function readFromLs(key) {
  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }
}

export default {
  saveToLs,
  readFromLs,
};
