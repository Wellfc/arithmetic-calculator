# arithmetic-calculator
This code creates an arithmetic calculator that can perform addition, subtraction, 
multiplication, and division of two numbers. Below is a Demo and how to understand and use the code.

### Demo

Click [here](https://wellfc.github.io/client-detection/) to test the application.

## HTML
This is the web page structure. It contains the calculator interface, including 
two input fields for numbers, four buttons for arithmetic operations, and an input field 
to display the result. It also includes a <script> tag to include the JavaScript file, "index.js."

```HTML
<main>
    <div class="calculator-container">
        <h2>Arithmetic Calculator</h2>
        <hr>
        <input type="number" placeholder="Number 1" id="num1">
        <br>
        <input type="number" placeholder="Number 2" id="num2">
        <br>
        <button id="add">+</button>
        <button id="sub">-</button>
        <button id="mul">x</button>
        <button id="div">/</button>
        <br>
        <input type="number" readonly id="result">
    </div>
</main>
```
The HTML code defines the structure of the page. It includes the following elements:

* A `main` element. This element will contain the calculator itself.
* A `div` element with the class `calculator-container`. This element will contain the input fields and buttons for the calculator.
* A `h2` element with the text "Arithmetic Calculator". This element will be the title of the calculator.
* A `hr` element. This element will create a horizontal rule below the title.
* Two `input` elements with the type `number`. These elements will be used to enter the first and second numbers.
* Four `button` elements. These elements will be used to perform the arithmetic operations.
* A `div` element with the class `result`. This element will display the result of the calculation.

## CSS
The CSS file provides styling for your calculator. It sets the background color, text color, 
fonts, and styles for various HTML elements to make the calculator visually appealing.

It includes the following rules:

* All elements should have a margin and padding of 0.
* The body should have a background color of #000080 and a color of #fff.
```CSS
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Nunito Sans', Arial, sans-serif;
}
 
body {
 background-color: #000080;
 color: #fff;
}
```

* The main element should have a height of 100% and a display of grid used to center the carculator.
```CSS
main {
  height: 100dvh;
  display: grid;
  place-items: center;
}
```

* The input elements with the type `number` should have a margin of 8px 0, a padding of 8px, a width of 100%, and a font size of 16px.
* The input element with the type `number`:read-only should have a border of 1px solid #000, a background color of #666, a color of #fff,
  a text-align of center, a font size of 22px, and a font weight of 600.
```CSS
div input[type=number] {
  margin: 8px 0;
  padding: 8px;
  width: 100%;
  font-size: 16px;
}

div input[type=number]:read-only {
  border: 1px solid #000;
  background-color: #666;
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}
```
The following rules are used to set the style of the arithmetic buttons:
* The button elements should have a margin of 0 4px, a padding of 6px 0, a width of 62px, a border of 1px solid #999, a background color of #f7f7f7, a font size of 16px, a font weight of 600, and a cursor of pointer.
* The button elements:hover should have a background color of #ccc.
* The button elements:focus should have an outline of 2px solid #333.
```CSS
div button {
  margin: 0 4px;
  padding: 6px 0;
  width: 62px;
  border: 1px solid #999;
  background-color: #f7f7f7;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

div button:hover {
  background-color: #ccc;
}

div button:focus {
  outline: 2px solid #333;
}
```
The following rules are used to removed the up and down arrows on the number inputs:
* The input::-webkit-outer-spin-button and input::-webkit-inner-spin-button should have a -webkit-appearance of none and a margin of 0.
* The input[type="number"] should have a -moz-appearance of textfield and an appearance of textfield.

```CSS
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}
```
## JavaScript

The JavaScript code defines the behavior of the page. It includes the following functions:

* `onEvent()`: This function attaches an event listener to an element.
* `select()`: This function returns the first element that matches a given selector.
* `addition()`: This function performs the addition operation.
* `substraction()`: This function performs the subtraction operation.
* `multiplication()`: This function performs the multiplication operation.
* `division()`: This function performs the division operation.

It does the following:
* It defines two utility functions, onEvent and select, which simplify event handling and DOM element selection.
  The `onEvent()` function is used to attach event listeners to the buttons.
```javascript
// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
```

* It selects the necessary HTML elements using their IDs.
  The `select()` function is used to select elements by their selector.
```javascript
/* Variables */
const addition = select('#add');
const substraction = select('#sub');
const multiplication = select('#mul');
const division = select('#div');

let number1 = select('#num1');
let number2 = select('#num2');
let result = select('#result')
```

* It adds click event listeners to the addition, subtraction, multiplication, and division buttons. When clicked,
  these buttons trigger corresponding functions that perform the arithmetic operations and update the result displayed
  in the readonly input field.
```javascript
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
```
  

## How to use the calculator

To use the calculator, enter the first number in the first input field and the second number in the second input field. 
Then, click on the desired button to perform the corresponding operation. The result will be displayed in the result field.
