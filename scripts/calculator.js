let formula = $('#display');
let buttons = $('.clickable');
let operator = $('.operator');
let clear = $('#clear');
let decimal = $('#decimal');
let count = 0;
let equalButton = $('#equals')
let ready = true;
let zero = $('#zero');
let isThereOperator = false;
let negative = false;

decimal.on("click", addDecimal);
clear.on("click", clearInput)
equalButton.on("click", parseEquation)
zero.on("click", addZero);

function addZero() {
  let string = formula.text();
  let length = string.length;

  if (string.charAt(0) !== "0") {
    formula.append("0");
  }
}

function parseEquation() {
  let equation = formula.text().split('');
  let array = []
  let count = 0;
  let string = "";

  for (let i = 0; i < equation.length; i++) {
   if (equation[i] == "." && count == 0) {
     string += ".";
     count += 1;
   } else if (equation[i] == '+' || equation[i] == "-" || equation[i] == "X" || equation[i] == "/") {
     array.push(string);
     string = "";
     array.push(equation[i])
     count = 0;
   } else {
     string += equation[i]
   }
  }

  array.push(string)

  let value = solve(array)
  formula.empty();

  formula.text(value);
  ready = true;
}

function solve(array) {
  let numbers = [];
  array = array.filter(item => item);
  let num = 0;
  let pop = 0;
  let sum = 0;
  let length = numbers.length;

  for(let i = 0; i < array.length; i++) {
    if (array[i] == '-') {
      num =  parseFloat(array[i+1])
      num *= -1;
      numbers.push(num)
      i++;
    } else if (array[i] == 'X' && array[i + 1] == '-') {
      num = parseFloat(array[i+2]);
      pop = numbers.pop();
      num *= -1;
      numbers.push(pop * num);
      i += 3
    } else if (array[i] == '/' && array[i+1] == "-") {
      num = parseFloat(array[i+2]);
      pop = numbers.pop()
      num *= -1;
      numbers.push(pop / num)
      i += 2
    } else if (array[i] == 'X') {
      num = parseFloat(array[i+1]);
      pop = numbers.pop()
      numbers.push(pop * num)
      i++;
    } else if (array[i] == '/') {
      num = parseFloat(array[i+1]);
      pop = numbers.pop();
      numbers.push(pop / num)
      i++;
    } else if(array[i] == '+') {

    } else {
      num = parseFloat(array[i])
      numbers.push(num)
    }
  }

  numbers.forEach(function(number) {
    sum += number;
  })

  return sum;
}

function addDecimal() {
  let value = formula.text()
  let length = value.length - 1;
  console.log(value)

  if (count == 0) {
    formula.append('.');
    count += 1;
  }
}

function clearInput() {
  formula.text("0");
  ready = true;
  negative = false;
  isThereOperator = false;
  count = 0;
}

function addNumbers(value) {
  if (value == "+" || value == "-" || value == "/" || value == "X") {
    formula.append(value);
    count = 0;
  } else {
    formula.append(value);
  }
  negative = false;
  isThereOperator = false;
}

buttons.click(function() {
  let message = $(this).val();
  let text = formula.text()

  if (ready && text.length == 1) {
    formula.empty();
    ready = false;
  }

  addNumbers(message);
})

operator.click(function() {
  let message = $(this).val();
  let string = formula.text();
  let length = string.length;

  if (!isThereOperator) {
    formula.append(message);
    isThereOperator = true;
  } else {
    if (!negative && message == "-") {
      formula.append("-")
      negative = true
    } else if (!negative && message != "-") {
      string = string.slice(0, -1)
      string += message
      formula.text(string);
    } else {
      string = string.slice(0, -1)
      string = string.slice(0, -1)
      string += message;
      formula.text(string);
      negative = false;
    }
  }

  count = 0;

})