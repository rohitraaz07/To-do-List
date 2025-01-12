// Function to format the date and time
function updateDateTime() {
    const now = new Date();

    // Format week day
    const weekDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Format date
    const date = now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    // Format time
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    document.getElementById('week').textContent = `${weekDay}`;
    document.getElementById('date').textContent = `${date}`;
    document.getElementById('time').textContent = `${time}`;
}
setInterval(updateDateTime, 1000);

//Active the Enter button 

const inputField = document.getElementById('input-box');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Function to add an item
function addItem() {
  const inputValue = inputField.value.trim(); // Get and trim input value
  if (inputValue) {
    const listItem = document.createElement('li'); // Create a list item
    listItem.textContent = inputValue;
    itemList.appendChild(listItem); // Append to the list
    inputField.value = ''; // Clear input field
  }
}

// Trigger button click on Enter key press
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') { // Check if Enter key is pressed
    addButton.click(); // Simulate button click
  }
});

// Add item when button is clicked
addButton.addEventListener('click', addItem);



// To do List Js for Adding List of Work
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
else{
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value = ""; 
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();