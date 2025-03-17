document.addEventListener('DOMContentLoaded', () => {
    const day1Input = document.getElementById('day1-input');
    const day1Button = document.getElementById('addOne');
    const day2Dropdown = document.getElementById('day2-dropdown');
    const day2Button = document.getElementById('addTwo');
    const day3Dropdown = document.getElementById('day3-dropdown');
    const day3Button = document.getElementById('addThree');
    const day6Dropdown = document.getElementById('day6-dropdown');
    const day6Button = document.getElementById('addFinal');
    const showResult = document.getElementById('showresult');
    const resultContainer = document.querySelector('.result-container');
    const backButton = document.getElementById('back-btn');
    const deleteButton = document.getElementById('delete-btn');

    let day1Topics = [];
    let day2Topics = [];
    let day3Topics = [];
    let day6Topics = [];

    day1Button.addEventListener('click', () => {
        const topic = day1Input.value.trim();
        if (topic) {
            day1Topics.push(topic);
            day1Input.value = '';
            updateDropdown(day2Dropdown, day1Topics);
        }
    });

    day2Button.addEventListener('click', () => {
        const selectedTopic = day2Dropdown.value;
        if (selectedTopic && !day2Topics.includes(selectedTopic)) {
            day2Topics.push(selectedTopic);
            updateDropdown(day3Dropdown, day2Topics);
        }
    });

    day3Button.addEventListener('click', () => {
        const selectedTopic = day3Dropdown.value;
        if (selectedTopic && !day3Topics.includes(selectedTopic)) {
            day3Topics.push(selectedTopic);
            updateDropdown(day6Dropdown, day3Topics);
        }
    });

    day6Button.addEventListener('click', () => {
        const selectedTopic = day6Dropdown.value;
        if (selectedTopic && !day6Topics.includes(selectedTopic)) {
            day6Topics.push(selectedTopic);
            displayResults();
        }
    });

    backButton.addEventListener('click', () => {
        resultContainer.style.display = 'none';
    });

    deleteButton.addEventListener('click', () => {
        day1Topics = [];
        day2Topics = [];
        day3Topics = [];
        day6Topics = [];
        showResult.innerHTML = '';
        resultContainer.style.display = 'none';
        updateDropdown(day2Dropdown, day1Topics);
        updateDropdown(day3Dropdown, day2Topics);
        updateDropdown(day6Dropdown, day3Topics);
    });

    function updateDropdown(dropdown, topics) {
        dropdown.innerHTML = '';
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            dropdown.appendChild(option);
        });
    }

    function displayResults() {
        showResult.innerHTML = '';
        day6Topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            showResult.appendChild(li);
        });
        resultContainer.style.display = 'block';
    }
});