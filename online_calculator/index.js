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


var digitButtons = document.querySelectorAll('#digits');

var inputBar = document.querySelector('#input-display');

let calculator = {
    numOne: '',
    numTwo: '',
    operator: '',
};


//Function that adds button value to display

digitButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var buttonValue = button.getAttribute('value');
        // Check if an operator has already been set
        if (calculator.operator !== '') {
            // If an operator has been set, overwrite numTwo with the button value and update the input bar
            calculator.numTwo = buttonValue;
            inputBar.value = buttonValue;
        } else {
            // If an operator has not been set, append the button value to the input bar and store it in numOne
            inputBar.value += buttonValue;
            calculator.numOne += buttonValue;
        }
    });
});
        
        


//Function that clears display to empty

var clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    var buttonValue = clearButton.getAttribute('value');
    inputBar.value = buttonValue;
    calculator.numOne = '';
    calculator.numTwo = '';
    calculator.operator = '';
});



operatorButtons = document.querySelectorAll("#op-but");


operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let buttonValue = this.value;
        if (calculator.operator === '') {
          calculator.operator = buttonValue;
        } else {
          // handle error or overwrite operator with new value
          calculator.operator = buttonValue;
        }
    });
});









let inputArray = [];

// Function that handles the input of digits and operators
const handleInput = function(value) {
  // If the value is not an operator, push it to the input array
  if (value !== '+' && value !== '-' && value !== '*' && value !== '/') {
    inputArray.push(value);
  } else {
    // If the value is an operator, check if the previous element in the input array is also an operator
    // If it is, replace it with the current operator
    // If it is not, push the current operator to the input array
    if (inputArray.length > 0 && (inputArray[inputArray.length - 1] === '+' || inputArray[inputArray.length - 1] === '-' || inputArray[inputArray.length - 1] === '*' || inputArray[inputArray.length - 1] === '/')) {
      inputArray[inputArray.length - 1] = value;
    } else {
      inputArray.push(value);
    }
  }
};

const calculateResult = function() {
    // Start with the first element in the array as the result
    let result = Number(inputArray[0]);
    // Iterate through the rest of the array
    for (let i = 1; i < inputArray.length; i++) {
      // If the current element is an operator, perform the operation on the result and the next element in the array
      if (inputArray[i] === '+') {
        result = add(result, Number(inputArray[i + 1]));
      } else if (inputArray[i] === '-') {
        result = subtract(result, Number(inputArray[i + 1]));
      } else if (inputArray[i] === '*') {
        result = multiply(result, Number(inputArray[i + 1]));
      } else if (inputArray[i] === '/') {
        result = divide(result, Number(inputArray[i + 1]));
      }
    }
    // Return the final result
    return result;
  };


