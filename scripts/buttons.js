let button = document.getElementById("btn");

button.addEventListener("click", addToButton);

function addToButton() {
  let value = parseInt(button.textContent);
  value++;
  button.innerText = `${value}`;
}

let button5 = document.getElementById("btn5");

button5.addEventListener("click", rotate)

function rotate() {
  let button1 = document.getElementById("btn1a")
  let button2 = document.getElementById("btn2")
  let button3 = document.getElementById("btn3")
  let button4 = document.getElementById("btn4")
  let button6 = document.getElementById("btn6")
  let button7 = document.getElementById("btn7")
  let button8 = document.getElementById("btn8")
  let button9 = document.getElementById("btn9")
  let temp = button1.textContent
  let temp2 = button2.textContent

  button1.innerText = button4.textContent
  button2.innerText = temp;
  temp = button3.textContent
  button3.innerText = temp2;
  temp2 = button6.textContent;
  button6.innerText = temp;
  temp = button9.textContent
  button9.innerText = temp2;
  temp2 = button8.textContent;
  button8.innerText = temp
  temp = button7.textContent;
  button7.innerText = temp2;
  button4.innerText = temp
}

let zero = document.getElementById("btn0");
let one = document.getElementById("btn1");
let plus = document.getElementById("btnSum")
let dash = document.getElementById("btnSub")
let star = document.getElementById("btnMul")
let divi = document.getElementById("btnDiv")
let results = document.getElementById("res")
let equal = document.getElementById("btnEql");
let clear = document.getElementById("btnClr")

zero.addEventListener("click", addZero);
one.addEventListener("click", addOne);
plus.addEventListener("click", function() {
  results.textContent += "+";
})
dash.addEventListener("click", function() {
  results.textContent += "-";
})
star.addEventListener("click", function() {
  results.textContent += "*";
})
divi.addEventListener("click", function() {
  results.textContent += "/";
})
equal.addEventListener("click", calculate);

clear.addEventListener("click", function() {
  results.textContent = '';
})

function calculate() {
  let divs = results.textContent;
  let first = 0;
  let second = 0;
  let final = 0;
  let split = []

  if (divs.includes('+')) {
    split = divs.split("+");
    first = parseInt(split[0], 2)
    second = parseInt(split[1], 2)
    final = first + second;
  } else if (divs.includes("-")) {
    split = divs.split("-");
    first = parseInt(split[0], 2)
    second = parseInt(split[1], 2)
    final = first - second;
  } else if (divs.includes("*")) {
    split = divs.split("*");
    first = parseInt(split[0], 2)
    second = parseInt(split[1], 2)
    final = first * second;
  } else if (divs.includes("/")) {
    split = divs.split("/");
    first = parseInt(split[0], 2)
    second = parseInt(split[1], 2)
    final = first / second;
  }

  results.textContent = `${(final >>> 0).toString(2)}`
}

function addZero() {
  results.textContent += "0";
}

function addOne() {
  results.textContent += "1";
}