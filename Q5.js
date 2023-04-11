function changeBgColor(element, color) {
    element.style.backgroundColor = color;
  }
  This function takes two arguments: the first argument is a reference to an HTML element, and the second argument is a string representing the new background color.
  
  Here's an example of how you could use this function to change the background color of a <div> element with id myDiv to red:
  
  const myDiv = document.getElementById("myDiv");
  changeBgColor(myDiv, "red");
  