const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

// function to clean the string value from input and ensure it's a number
function cleanInputString(str) {
    const strArray = str.split(''); 
    const cleanStrArray = [];
  
    for (let i = 0; i < strArray.length; i++) { 
   // check if character at index i is not a +, -, space and push it to the cleanStrArray 
   if(!["+", "-", " "].includes(strArray[i])){
    cleanStrArray.push(strArray[i]);
  }
    }
  }
