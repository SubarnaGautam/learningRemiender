
        /* function addTopicToDropDown() {
            const topic = document.getElementById("firstlabel").value;
            const dropdown = document.getElementById("firstdropwown");

            // Create a new option element
            const option = document.createElement("option");

            // Set the value and text of the option
            option.value = topic;
            option.text = topic;

            // Append the new option to the dropdown
            dropdown.add(option);

            // Clear the input field
            document.getElementById("firstlabel").value = "";
        }
    
        function addTopicToSecondDropDown(topic) {
            const secondTopic = topic;
            const secondDropdown = document.getElementById("seconddropdown");

            const option = document.createElement("option");
            option.value = secondTopic;
            option.text = secondTopic

            secondDropdown.add(option);

            document.getElementById("firstlabel").value="";
        }
        function showtopic(){
            var result =  document.querySelector(".result");
            result.style.display = result.style.display === "none" ? "block" : "none";
        }*/

        // scripts.js
 const  firstDropDown = document.getElementById("firstdropwown"); 
  const secondDropDown = document.getElementById("seconddropdown");
  const showresult = document.getElementById("showresult");
  const result =  document.querySelector(".result");


function addTopicToDropDown() {
      const topic = document.getElementById("firstlabel").value;
    
   

    const option = document.createElement("option");
    option.value = topic;
    option.text = topic;

    firstDropDown.add(option);

    document.getElementById("firstlabel").value = "";
    showresult.textContent = secondDropDown.selectedIndex;

    console.log(addTopicToSecondDropDown);
}


function addTopicToSecondDropDown() {
    
  
    const selectedItemList = firstDropDown.options[firstDropDown.selectedIndex];

    const newOption = document.createElement("option");
    newOption.value = selectedItemList.value;
    newOption.text = selectedItemList.text;

    secondDropDown.add(newOption);

    document.getElementById("firstlabel").value = "";
   


    
}

function showTopic() {
    var result = document.querySelector(".result");
    result.style.display = result.style.display === "none" ? "block" : "none";
    showresult.innerHTML = document.getElementById("firstlabel").value;

}

function revised() {
    // Your revised function logic goes here
    console.log("Revised function called");
}

function addTopicToThirdDropDown() {
    
    const thirdDropDown = document.getElementById("thirddropdown");
    const selectedItemList = secondDropDown.options[secondDropDown.selectedIndex];

    const newThirdOption = document.createElement("option");
    newThirdOption.value = selectedItemList.value;
    newThirdOption.text = selectedItemList.text;

    thirdDropDown.add(newThirdOption);

    document.getElementById("firstlabel").value = "";
    document.getElementById("seconddropdown").value="";
}
function goback(){
    const backbtn = document.getElementById("backbtn");
    const result =  document.querySelector(".result");
    result.style.display = "none";
    
}