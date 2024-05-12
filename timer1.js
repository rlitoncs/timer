
const input = process.argv

//Edge Case 1: No numbers provided:
if (input.length === 2){
  console.log( "No Alarm Added");
} 

const setAlarm = (input) => {

for (let i = 2; i < input.length; i++){
  //Edge Case 2 & 3: Input Has to be a Number and greater or equal to 0
  if (Number(input[i]) && Number(input[i]) >= 0){
    setTimeout(() => {
      process.stdout.write("."); //switched to "." because beep is not working
    }, Number(input[i]) * 1000)
  }
}

}

setAlarm(input);