export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  const localStorageData = localStorage.getItem(key);
  return JSON.parse(localStorageData);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
