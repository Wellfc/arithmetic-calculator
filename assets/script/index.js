'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

/* Variables */
const addition = select('#add');
const substraction = select('#sub');
const multiplication = select('#mul');
const division = select('#div');

let number1 = select('#num1');
let number2 = select('#num2');
let result = select('#result');

/* Arithmetic Operations*/
onEvent('click', addition, function () {
    result.value = parseInt(number1.value) + parseInt(number2.value); 
});

onEvent('click', substraction, function () {
    result.value = parseInt(number1.value) - parseInt(number2.value); 
});

onEvent('click', multiplication, function () {
    result.value = parseInt(number1.value) * parseInt(number2.value); 
});

onEvent('click', division, function () {
    result.value = (parseInt(number1.value) / parseInt(number2.value)).toFixed(2); 
});

