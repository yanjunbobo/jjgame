export function getStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function setStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be disabled in private contexts; the UI still works without persistence.
  }
}

export function addRecent(item) {
  const recent = getStored("mq:recent", []).filter((entry) => entry.url !== item.url);
  setStored("mq:recent", [item, ...recent].slice(0, 8));
}
