//Global Variables

var num1 = ""; //Store 1st number
var num2 = ""; //Store 2nd number
var operator; //Stores the values for the operator
var flag = false; //boolean false if we haven't used an operator
var equalTo = false; //boolean false if we haven't pressed the equal to sign
var display = document.getElementById("display");

//calculator

//function to set numbers into the num1 or num2 variables
function setValue(number){

    if(equalTo === true){
        clearButton();
    }

    if(flag === false){
        num1 += number;
        display.innerHTML = num1;
    }

    if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }

    if(num1.length > 8 || num2.length > 8){
        display.innerHTML = "Max limit of digits reached";
        alert("BRUH Really Max is 8 THATS THAT!!!");
    }
}

//function to clear calculator
function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag = false;
}

//funtion for storing and selecting operator value
function setOperator(number){
    operator = number;
    var opString = "";
    flag = true;
    if(operator === 4){
        display.innerHTML += " / ";
        opString = " / ";
    }else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";
    }else if(operator === 2){
        display.innerHTML += " - ";
        opString = " - ";
    }else{
        display.innerHTML += " + ";
        opString = " + ";
    }
    //for getting rid of multiple operators
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
    //Does not let use do an operation before num1
    if(flag === true && num1 === ""){
        clearButton();
    }

    if(equalTo === true){
        clearButton();
    }
}

//function to solve the math equation
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";
    
    if(operator === 1){
        result = num1 + num2;
    }else if(operator === 2){
        result = num1 - num2;
    }else if(operator === 3){
        result = num1 * num2;
    }else{
        result = num1 / num2;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "Infinity"){
        display.innerHTML = "You cannot divide by zero";
    }else if(roundedResult === "NaN"){
        display.innerHTML = "Invalid Calculation";
    }
}

//function Delete the last digit in the display
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display,innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        opSetString(operator);
    }
}

function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1 = "0."
            display.innerHTML = num1;
        }
        if(num1.indexOf(" . ") === -1){
            num1 += " . ";
            display.innerHTML = num1;
        }
    }

    if(flag === true){
        if(num2 === ""){
            num2 = "0."
            display.innerHTML += num2;
        }
        if(num2.indexOf(" . ") === -1){
            num2 += " . ";
            
            opSetString(operator);
        }
    }
    //tell calculator what operator you need when messing with num2
    function opSetString(op){
        if(op === 1){
            display.innerHTML = num1 + " + " + num2;
        }else if(op === 2){
            display.innerHTML = num1 + " - " + num2;
        }else if(op === 3){
            display.innerHTML = num1 + " * " + num2;
        }else{
            display.innerHTML = num1 + " / " + num2;
        }
    }
}