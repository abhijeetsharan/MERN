// Get the button element
var button = document.getElementById("myButton");


// Function to handle button click
function handleButtonClick() {
    button.style.backgroundColor = "orange";
    console.log("Button CLicked");
}

// Add event listener to the button
button.addEventListener("click", handleButtonClick);

// Remove event listener after 5 seconds
setTimeout(function() {
    button.removeEventListener("click", handleButtonClick);
    alert("Event listener removed!");
}, 5000);