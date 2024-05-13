/**
 * printInvalidAlarms will display a message if No alarms have been Added, or if an Alarm cannot be set
 *
 * @param {Array} input - an array of containing all the values from standard input
 * @param {Array} alarmsToBeSet - all the alarms that need to be set through setTimeout()
 *
 */



const input = process.argv;
const userInput = input.slice(2);

const printInvalidAlarms = (input) => {

  //Edge Case 1: No numbers provided:
  if (input.length === 2) {
    console.log("No Alarms Added");
    process.exit(0);
  }

  for (let i of userInput) {
    //converting a string that is not a number will return NaN -> Number('hello') @returns NaN
    if (Number.isNaN(Number(i))) console.log(`Cannot set alarm for '${i}' since it is not a number!`);
    
    if (Number(i) < 0) console.log(`Cannot set alarm for '${i}' since it is a negative number! `);
  }
};

const printValidAlarms = (alarmsToBeSet) => {
  console.log(`Setting an Alarm for: ${alarmsToBeSet.join(', ')}`);
};

//Edge Case 3: Input has to be a Number
//Slice will take the input arguments, and convert each element to a number, then filter the elements that are only Integer numbers
const alarmsToBeSet = userInput.map(elem => Number(elem)).filter(elem => Number.isInteger(elem) && elem > 0);
const findMaxTime = Math.max(...alarmsToBeSet); //Math.max will return NaN if NaN is found in the array, hence the filter

const setAlarm = (alarmsToBeSet) => {

  for (let i = 0; i < alarmsToBeSet.length; i++) {
  //Edge Case 2: Number has to be greater or equal to 0
    if (alarmsToBeSet[i] >= 0) {
      setTimeout(() => {
        process.stdout.write("."); //switched to "." because beep is not working
      }, alarmsToBeSet[i] * 1000);
    }
  }

  //Output a newline character after setTimeout finishes and before exiting so that the next prompt starts on its own line
  setTimeout(() => {
    console.log('\n');
  }, findMaxTime * 1000);

};

//Driver Code
printInvalidAlarms(input);
printValidAlarms(alarmsToBeSet);
setAlarm(alarmsToBeSet);