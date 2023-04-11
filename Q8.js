
function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage using its name as the key
    Object.keys(obj).forEach(key => {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
  
    // Retrieve the object from localStorage
