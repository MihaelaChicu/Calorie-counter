const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

/* function to clean the string value from input and ensure it's a number
function cleanInputString(str) {
    const strArray = str.split(''); 
    const cleanStrArray = [];
  
    for (let i = 0; i < strArray.length; i++) { 
   // check if character at index i is not a +, -, space and push it to the cleanStrArray 
     if(!["+", "-", " "].includes(strArray[i])){
      cleanStrArray.push(strArray[i]);
     }
    }
  } */

    // Replace cleanInputString code with a regex
function cleanInputString(str){
   const regex = /[+-\s]/g; 
    return str.replace(regex, " "); //if there are those char in the str, they will be replaced with an empty string
}
 

// Function to exclude exponential notation - HTML number inputs allow exponential notations '1e10'
//Number digits only allow the 'e' to occur between 2 digits [0-9]
  function isInvalidInput(str){
      const regex = /[0-9]+e[0-9]+/i; 
      //i for case insensitive search
      // e surrondered by [0-9] classes so it is between 2 diigits
      // \d character class to match any digit 
      return str.match(regex); //functions will return the exponential notation if it finds it
  }