// Select the heading by its id and change its text content
const mainHeading = document.getElementById('main-heading');
setTimeout(() => {
  mainHeading.textContent = 'DOM Element Selector Practice Page';
}, 2000); // wait 1 second

// Select all paragraphs with the class text-content and change their text color to blue
const textContentParagraphs = document.getElementsByClassName('text-content');
setTimeout(() => {
  for (const paragraph of textContentParagraphs) {
    paragraph.style.color = 'blue';
  }
}, 4000); // wait 2 seconds

// Select the container div by its class name and change its background color
const containerDiv = document.querySelector('.container');
setTimeout(() => {
  containerDiv.style.backgroundColor = 'lightgray';
}, 6000); // wait 3 seconds

// Select the image with the id main-image and change its source
const mainImage = document.getElementById('main-image');
setTimeout(() => {
  mainImage.src = "https://tse1.mm.bing.net/th?id=OIP.Q1xjNu2aiblEeOSQ20HuQgHaEy&pid=Api&P=0&h=180";
}, 8000); // wait 4 seconds

// Select all paragraphs inside the container div and update their text content
const containerParagraphs = document.querySelectorAll('.container p');
setTimeout(() => {
  for (const paragraph of containerParagraphs) {
    paragraph.textContent = 'This is a paragraph inside the container.';
  }
}, 10000); // wait 5 seconds