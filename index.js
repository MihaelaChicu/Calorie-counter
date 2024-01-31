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

  //Allow users to add entries into the calorie counter.
   // The dropdown allows the user to select a category for where the entry goes into - entryDropdown
   //get the value of the selected option with the value property
  function addEntry(){

     //target input-container element within the element that has the targetId
     const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); 

     // number the entries
     const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

     //add string variable with labels and input element
     const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
      <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"></input>
      <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
      <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"></input>
     `;

      // targetInputContainer and preserve input content with insertAdjacentHTML()
      targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
  }
  // Add event listener for addEntryButton
  addEntryButton.addEventListener("click", addEntry);


  // function to get the calories counts from the user's entries
  function getCaloriesFromInputs(list){ //list parameter is going to be a NodeList

    //loop through the NodeList Elements
    for(let i=0; i < list.length; i++){

    }
     let calories = 0;

  }