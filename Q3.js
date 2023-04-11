function addParagraph(text) {
    // create a new paragraph element
    const paragraph = document.createElement("p");
  
    // set the text content of the paragraph
    paragraph.textContent = text;
  
  
    const body = document.querySelector("body");
  
    // add the paragraph to the bottom of the body element
    body.appendChild(paragraph);
  }
  I can call this function with a string argument to add a new paragraph element to the bottom of the HTML document with the given text content. For example:
  
  addParagraph("This is a new paragraph element!");
  