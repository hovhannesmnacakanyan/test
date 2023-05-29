export const getLocaleItem = (key) => JSON.parse(localStorage.getItem(key));
export const setLocaleItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
