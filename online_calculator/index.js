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
let currentOperator;
let previousNumber;

for (var i = 0; i <= 9; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.className = "digit-but";
    button.value = i;
    buttons.appendChild(button);

    button.addEventListener("click", function() {
      inputBar.value += this.value;
    });
  }


document.getElementById("add").addEventListener("click", function() {
    currentOperator = add;
    previousNumber = inputBar.value;
    inputBar.value = "";
});

document.getElementById("subtract").addEventListener("click", function() {
    currentOperator = subtract;
    previousNumber = inputBar.value;
    inputBar.value = "";
});

document.getElementById("multiply").addEventListener("click", function() {
    currentOperator = multiply;
    previousNumber = inputBar.value;
    inputBar.value = "";
});

document.getElementById("divide").addEventListener("click", function() {
    currentOperator = divide;
    previousNumber = inputBar.value;
    inputBar.value = "";
});

equalsButton.addEventListener("click", function() {
    inputBar.value = operate(currentOperator, previousNumber, inputBar.value);
});


clearButton.addEventListener("click", function(){
    inputBar.value = "";
});



