// Get all buttons and message elements
const buttons = document.querySelectorAll('.button');
const messages = document.querySelectorAll('.message');

// Function to change button color on click
function changeColor(event) {
  event.target.style.backgroundColor = getRandomColor();
}

// Function to display message on mouseover
function showMessage(event) {
  const messageId = `message${event.target.id.slice(-1)}`;
  document.getElementById(messageId).style.display = 'block';
}

// Function to hide message on mouseout
function hideMessage(event) {
  const messageId = `message${event.target.id.slice(-1)}`;
  document.getElementById(messageId).style.display = 'none';
}

// Function to hide button on dblclick
function hideButton(event) {
  event.target.style.display = 'none';
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', changeColor);
  button.addEventListener('mouseover', showMessage);
  button.addEventListener('mouseout', hideMessage);
  button.addEventListener('dblclick', hideButton);
});