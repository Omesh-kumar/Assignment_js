function saveToLocalStorage(key, object) {
    try {
      localStorage.setItem(key, JSON.stringify(object));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  } 
  