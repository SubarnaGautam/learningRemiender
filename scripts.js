// Get references to elements
const day1Input = document.getElementById("day1-input"); // Day 1 input field
const day2Dropdown = document.getElementById("day2-dropdown"); // Day 2 dropdown
const day3Dropdown = document.getElementById("day3-dropdown"); // Day 3 dropdown
const day6Dropdown = document.getElementById("day6-dropdown"); // Day 6 dropdown
const showresult = document.getElementById("showresult"); // Result list where topics will be shown
const resultContainer = document.querySelector(".result-container"); // Result container (hidden by default)

// Arrays to hold topics for each day
let dayOneTopics = []; 
let dayTwoTopics = [];
let dayThreeTopics = [];
let daySixTopics = [];

// Add topic to Day 1
function addTopicToDayOne() {
    const topic = day1Input.value; // Get the topic entered in Day 1 input
    if (topic !== "") { // Only add if the input is not empty
        dayOneTopics.push(topic); // Add the topic to the Day 1 array
        updateDropdown(day2Dropdown, dayOneTopics); // Update Day 2 dropdown with topics from Day 1
        day1Input.value = ""; // Clear Day 1 input
    }
}

// Add topic to Day 2 from the dropdown
function addTopicToDayTwo() {
    const selectedTopic = day2Dropdown.value; // Get the selected topic from Day 2 dropdown
    if (selectedTopic) {
        dayTwoTopics.push(selectedTopic); // Add to Day 2 array
        updateDropdown(day3Dropdown, dayTwoTopics); // Update Day 3 dropdown with topics from Day 2
    }
}

// Add topic to Day 3 from the dropdown
function addTopicToDayThree() {
    const selectedTopic = day3Dropdown.value; // Get the selected topic from Day 3 dropdown
    if (selectedTopic) {
        dayThreeTopics.push(selectedTopic); // Add to Day 3 array
        updateDropdown(day6Dropdown, dayThreeTopics); // Update Day 6 dropdown with topics from Day 3
    }
}

// Add topic to Day 6 from the dropdown
function addTopicToFinalDay() {
    const selectedTopic = day6Dropdown.value; // Get the selected topic from Day 6 dropdown
    if (selectedTopic) {
        daySixTopics.push(selectedTopic); // Add to Day 6 array
    }
}

// Update dropdown with new topics
function updateDropdown(dropdown, topics) {
    dropdown.innerHTML = ""; // Clear the current dropdown options
    topics.forEach(topic => { // Loop through the topics array
        const option = document.createElement("option"); // Create a new option element
        option.value = topic; // Set the option's value to the topic
        option.textContent = topic; // Set the option's display text to the topic
        dropdown.appendChild(option); // Add the new option to the dropdown
    });
}

// Show all the topics covered so far
function showTopics() {
    showresult.innerHTML = ""; // Clear any previous results

    // Display topics for each day
    displayTopics("Day 1", dayOneTopics);
    displayTopics("Day 2", dayTwoTopics);
    displayTopics("Day 3", dayThreeTopics);
    displayTopics("Day 6", daySixTopics);

    // Show the result section
    resultContainer.style.display = "block";
}

// Helper function to display topics for a specific day
function displayTopics(day, topics) {
    if (topics.length > 0) { // Only display if there are topics
        const listItem = document.createElement("li"); // Create a list item
        listItem.textContent = `${day}: ${topics.join(", ")}`; // Format the list item with the day and topics
        showresult.appendChild(listItem); // Add the list item to the result list
    }
}

// Go back and hide the result section
function goback() {
    resultContainer.style.display = "none"; // Hide the result section
}
