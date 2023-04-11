function getObjectFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
  }
  
  Here's an example of how you could use this function to retrieve an object from local storage:
  
  const myObject = getObjectFromLocalStorage('myKey');
  console.log(myObject);
  Assuming that an object has been previously stored in local storage with the key 'myKey', the getObjectFromLocalStorage function will retrieve and return that object.
  