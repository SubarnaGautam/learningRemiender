// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCbRnDSbqf2fe5CUQEOvszOh-Fmu3iHTg8", // Firebase API key
    authDomain: "learning-reminder-app.firebaseapp.com", // Firebase auth domain
    projectId: "learning-reminder-app", // Firebase project ID
    storageBucket: "learning-reminder-app.appspot.com", // Firebase storage bucket
    messagingSenderId: "490061517217", // Firebase messaging sender ID
    appId: "1:490061517217:web:ffb46f2888f5736ab2fbe0", // Firebase app ID
    databaseURL: "https://learning-reminder-app-default-rtdb.asia-southeast1.firebasedatabase.app/", // Firebase database URL
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig); // Create and initialize the Firebase app
const database = getDatabase(app); // Get a reference to the Firebase database

// Get DOM elements by their IDs
const day1Input = document.getElementById("day1-input"); // Input field for Day 1 topics
const day2Dropdown = document.getElementById("day2-dropdown"); // Dropdown for Day 2 topics
const day3Dropdown = document.getElementById("day3-dropdown"); // Dropdown for Day 3 topics
const day6Dropdown = document.getElementById("day6-dropdown"); // Dropdown for Day 6 topics
const showresult = document.getElementById("showresult"); // Result container for showing topics
const resultContainer = document.querySelector(".result-container"); // Section to display results

// Get button elements by their IDs
const dayOneAddBtn = document.getElementById("addOne"); // Button to add Day 1 topics
const dayTwoAddBtn = document.getElementById("addTwo"); // Button to add Day 2 topics
const dayThreeAddBtn = document.getElementById("addThree"); // Button to add Day 3 topics
const FinalAddBtn = document.getElementById("addFinal"); // Button to add Day 6 topics
const firstTopicShow = document.getElementById("firstShowTopic"); // Button to show all topics
const secondTopicShow = document.getElementById("secondShowTopic"); // Button to show all topics
const thirdTopicShow = document.getElementById("thirdShowTopic"); // Button to show all topics
const deleteBtn = document.getElementById("delete-btn")
const finalTopicShow = document.getElementById("finalShowTopic"); // Button to show all topics

const backBtn = document.getElementById("back-btn")

// Initialize arrays to store topics for each day
let dayOneTopics = []; // Array to hold Day 1 topics
let dayTwoTopics = []; // Array to hold Day 2 topics
let dayThreeTopics = []; // Array to hold Day 3 topics
let daySixTopics = []; // Array to hold Day 6 topics

// Firebase reference for Day 1 topics
const referencesInDB = ref(database, "dayOneTopics"); // Reference to the "dayOneTopics" node in Firebase

// Add topic to Day 1 and push to Firebase
dayOneAddBtn.addEventListener("click", function () {
    const topic = day1Input.value.trim(); // Get and trim the value entered in Day 1 input field
    if (topic) { // Check if the input is not empty
        dayOneTopics.push(topic); // Add the topic to the Day 1 topics array
        push(referencesInDB, topic) // Push the topic to Firebase
            .then(() => { // Handle successful write to Firebase
                updateDropdown(day2Dropdown, dayOneTopics); // Update Day 2 dropdown with Day 1 topics
                day1Input.value = ""; // Clear the Day 1 input field
                console.log(`Topic added: ${topic}`); // Log the added topic
            });
    }
});

// Fetch topics from Firebase and populate Day 1 array
onValue(referencesInDB, (snapshot) => {
    if (snapshot.exists()) { // Check if the snapshot from Firebase contains data
        dayOneTopics = Object.values(snapshot.val()); // Convert Firebase data to an array
        updateDropdown(day2Dropdown, dayOneTopics); // Update Day 2 dropdown with fetched topics
        console.log("Fetched topics:", dayOneTopics); // Log the fetched topics
    } else {
        console.log("No topics available."); // Log if no data is available
    }
});

// Add topic to Day 2 from the dropdown
dayTwoAddBtn.addEventListener("click", function () {
    const selectedTopic = day2Dropdown.value; // Get the selected topic from Day 2 dropdown
    if (selectedTopic) { // Check if a topic was selected
        dayTwoTopics.push(selectedTopic); // Add the selected topic to the Day 2 array
        updateDropdown(day3Dropdown, dayTwoTopics); // Update Day 3 dropdown with Day 2 topics
        console.log(`Day 2 topic added: ${selectedTopic}`); // Log the added topic
    }
});

// Add topic to Day 3 from the dropdown
dayThreeAddBtn.addEventListener("click", function () {
    const selectedTopic = day3Dropdown.value; // Get the selected topic from Day 3 dropdown
    if (selectedTopic) { // Check if a topic was selected
        dayThreeTopics.push(selectedTopic); // Add the selected topic to the Day 3 array
        updateDropdown(day6Dropdown, dayThreeTopics); // Update Day 6 dropdown with Day 3 topics
        console.log(`Day 3 topic added: ${selectedTopic}`); // Log the added topic
    }
});

// Add topic to Day 6 from the dropdown
FinalAddBtn.addEventListener("click", function () {
    const selectedTopic = day6Dropdown.value; // Get the selected topic from Day 6 dropdown
    if (selectedTopic) { // Check if a topic was selected
        daySixTopics.push(selectedTopic); // Add the selected topic to the Day 6 array
        console.log(`Day 6 topic added: ${selectedTopic}`); // Log the added topic
    }
});
/*first show topic btn 
document.addEventListener("DOMContentLoaded", function (){
firstTopicShow.addEventListener("click", function(){
    showresult.innerHTML = "";
    console.log("clicked")
})})

secondTopicShowTopicShow.addEventListener("click", function(){
    showresult.innerHTML = "";
    console.log("clicked")
})
*/
// Display all topics for each day in the result section
finalTopicShow.addEventListener("click", function () {
    showresult.innerHTML = ""; // Clear the result container
    displayTopics("Day 1", dayOneTopics); // Display Day 1 topics
    displayTopics("Day 2", dayTwoTopics); // Display Day 2 topics
    displayTopics("Day 3", dayThreeTopics); // Display Day 3 topics
    displayTopics("Day 6", daySixTopics); // Display Day 6 topics
    resultContainer.style.display = "block"; // Show the result container
});

// Update the dropdown with topics
function updateDropdown(dropdown, topics) {
    dropdown.innerHTML = ""; // Clear the current dropdown options
    topics.forEach((topic) => { // Loop through each topic in the array
        const option = document.createElement("option"); // Create a new dropdown option
        option.value = topic; // Set the option value to the topic
        option.textContent = topic; // Set the option display text to the topic
        dropdown.appendChild(option); // Append the option to the dropdown
    });
}

// Display topics for a specific day in the result section
function displayTopics(day, topics) {
    if (topics.length > 0) { // Check if there are any topics for the day
        const listItem = document.createElement("li"); // Create a new list item
        listItem.textContent = `${day}: ${topics.join(", ")}`; // Set the list item text
        showresult.appendChild(listItem); // Append the list item to the result container
    }
}

// Hide the result section and go back

/* backBtn.addEventListener("click", function(){
    resultContainer.style.display = "none" // Hide the result container
    console.log("clicked")}



);*/

function renderDisplay(){
    resultContainer.style.display = "none" // Hide the result container
    console.log("clicked")}

 
backBtn.addEventListener("click",renderDisplay)

deleteBtn.addEventListener("dblclick", function(){
 showresult.innerHTML = ""

remove(referencesInDB)
.then(() => {
    console.log("array deleted")
    dayOneTopics = []

})


   // console.log("clicked")
})
