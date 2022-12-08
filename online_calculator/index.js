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
}


const operate = function(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === add) return add(a, b);
    if (operator === subtract) return subtract(a, b);
    if (operator === multiply) return multiply(a, b);
    if (operator === divide) return divide(a, b);
}

        
    
