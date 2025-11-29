// Function to handle the interaction
function handleButtonClick() {
    // 1. Find the elements we want to interact with
    const messageArea = document.getElementById('message-area');
    const button = document.getElementById('action-button');

    // 2. Change the text content
    messageArea.textContent = "You clicked the button! Interactivity achieved.";

    // 3. Change the styling using JavaScript
    messageArea.style.color = "#28a745"; // Changes text color to green
    messageArea.style.backgroundColor = "#d4edda"; // Changes background color

    // 4. Change the button text
    button.textContent = "Clicked!";
}

// Add an event listener to the button
// When the 'click' event happens on the element with id 'action-button',
// it runs the function 'handleButtonClick'.
document.getElementById('action-button').addEventListener('click', handleButtonClick);
