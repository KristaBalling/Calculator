
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let displayText = document.querySelector("h2");
let equalSign = document.getElementById("equals");
let buttons = document.querySelectorAll(".button");
let clearDisplay = document.getElementById("clear");


for (let i=0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(display){
    displayText.textContent+= this.value;
});
}

equalSign.addEventListener('click', function(equate){
  var emptyString=("");
  arrayOfNumbers = [];
  arrayOfOperators =[];

  for (let i=0; i < displayText.textContent.length; i++){
    if (displayText.textContent[i] === '-' || displayText.textContent[i] === '*' || displayText.textContent[i]=== '+' || displayText.textContent[i] === '/') {
      arrayOfOperators.push(displayText.textContent[i]);
      arrayOfNumbers.push(parseFloat(emptyString));
      emptyString = "";
     } else {
  emptyString += displayText.textContent[i];
    }
 }

 arrayOfNumbers.push(parseFloat(emptyString));
 console.log(arrayOfNumbers);
 console.log(arrayOfOperators);

 if (arrayOfOperators[0] === "+"){
  let numSum = arrayOfNumbers[0] + arrayOfNumbers[1];
     displayText.textContent = numSum;
 } else if (arrayOfOperators[0] === "-") {
   let numSum = arrayOfNumbers[0] - arrayOfNumbers[1];
     displayText.textContent = numSum;
 } else if (arrayOfOperators[0] === "*") {
   let numSum = arrayOfNumbers[0] * arrayOfNumbers[1];
     displayText.textContent = numSum;

 } else if (arrayOfOperators[0] === "/") {
   let numSum = arrayOfNumbers[0] / arrayOfNumbers[1];
    displayText.textContent = numSum;
}
});

clearDisplay.addEventListener('click', function(){
  displayText.textContent = "";
});
