const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};


const operate = function(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === add) return add(a, b);
    if (operator === subtract) return subtract(a, b);
    if (operator === multiply) return multiply(a, b);
    if (operator === divide) return divide(a, b);
}

var inputBar = document.getElementById("input-display");
var buttons = document.getElementById("buttons");
var clearButton = document.getElementById("clear");
var equalsButton = document.getElementById("equals");

for (var i = 0; i <= 9; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.value = i;
    buttons.appendChild(button);

    button.addEventListener("click", function() {
      inputBar.value += this.value;
    });
  }

clearButton.addEventListener("click", function(){
    inputBar.value = "";
});

equalsButton.addEventListener("click", function(){
    var input = inputBar.value;
    var inputArray = input.split(" ");

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === "+"){
            inputArray[i] = operate(add, inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 1);
            inputArray.splice(i, 1);
            i = i - 1;
        }
        if(inputArray[i] === "-"){
            inputArray[i] = operate(subtract, inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 1);
            inputArray.splice(i, 1);
            i = i - 1;
        }
        if(inputArray[i] === "*"){
            inputArray[i] = operate(multiply, inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 1);
            inputArray.splice(i, 1);
            i = i - 1;
        }
        if(inputArray[i] === "/"){
            inputArray[i] = operate(divide, inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 1);
            inputArray.splice(i, 1);
            i = i - 1;
        }
    }
    inputBar.value = inputArray[0];
  });


