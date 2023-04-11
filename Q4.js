function addListItem(text) {
    const li = document.createElement('li');
    
    // set the text content of the new list item
    li.textContent = text;
    
    // get the unordered list
    const ul = document.querySelector('ul');
    
    // add the new list item to the unordered list
    ul.appendChild(li);
  }
  Here's how I can use this function to add a new list item to an unordered list with id "myList":
  
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul> 
  
  <button onclick="addListItem('New item')">Add Item</button> 
  