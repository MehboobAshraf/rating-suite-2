class LocalStorageService {
  set(key, item) {
    return localStorage.setItem(key, item);
  }

  get(key) {
    return localStorage.getItem(key);
  }

  remove(key) {
    return localStorage.removeItem(key);
  }
}

export default new LocalStorageService();
