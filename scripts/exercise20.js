"use strict";
class BananaadeStand {
  constructor(bananas, water, sugar, emptyGlasses, price) {
    this.bananas = bananas;
    this.water = water;
    this.sugar = sugar;
    this.emptyGlasses = emptyGlasses;
    this.price = price;
    this.fullGlasses = 0;
    this.income = 0.0;
    this.minBananas = 6;
    this.minWater = 1;
    this.minSugar = 1;
    this.minEmptyGlasses = 8;
  }

  makeBananaade() {
    let madeGlasses = 0;
    if (this.bananas >= this.minBananas
      && this.water >= this.minWater
      && this.sugar >= this.minSugar
      && this.emptyGlasses >= this.minEmptyGlasses) {
      this.bananas -= this.minBananas;
      this.water -= this.minWater;
      this.sugar -= this.minSugar;
      this.emptyGlasses -= this.minEmptyGlasses;
      this.fullGlasses += this.minEmptyGlasses;
      madeGlasses = this.minEmptyGlasses;
    }
    this.updateAllInventory();
    this.updateAdmin();
    return madeGlasses;
  }

  updateAdmin() {
    let ul = document.querySelector("ul");
    let lis = ul.querySelectorAll("li");
    lis[0].textContent = `Price per Glass: $${Number(this.price).toFixed(2)}`;
    lis[1].textContent = `Glasses of Bananaade: ${this.fullGlasses}`;
    lis[2].textContent = `Income : $${Number(this.income).toFixed(2)}`;
  }

  updateAllInventory() {
    this.updateInventory("Bananas", this.bananas, this.minBananas);
    this.updateInventory("Water", this.water, this.minWater);
    this.updateInventory("Sugar", this.sugar, this.minSugar);
    this.updateInventory("Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }

  sellBananaade() {
    let soldGlasses = 0;
    if (this.fullGlasses >= 1) {
      this.fullGlasses--;
      this.income += Number(this.price);
      soldGlasses = 1;
    } else {
      this.makeBananaade();
      if (this.fullGlasses >= 1) {
        this.fullGlasses--;
        this.income += Number(this.price);
        soldGlasses = 1;
      }
    }
    this.updateAdmin();
    return soldGlasses;
  }

  sellMoreBananaade(glassesRequested) {
    let soldGlasses = 0;
    //Can only sell 8 at a time.
    if (glassesRequested > 8) glassesRequested = 8;

    //If we don't have enough, make some more.
    if (this.fullGlasses < glassesRequested)
      this.makeBananaade();

    if (this.fullGlasses < glassesRequested) {
      //We dont have enough and we have tried to make more so
      //there must not be enough ingredients. 
      //Sell the glasses we have
      this.income += Number(this.price) * this.fullGlasses;
      soldGlasses = this.fullGlasses;
      this.fullGlasses = 0;

    } else {
      //We do have enough.  Sell the requested amount.
      this.fullGlasses -= glassesRequested;
      this.income += Number(this.price) * glassesRequested;
      soldGlasses = glassesRequested;
    }
    this.updateAdmin();
    this.updateAllInventory();
  }

  showIngredients() {
    let newArticle = document.createElement('article');

    let newTable = document.createElement('table');
    let newRow = document.createElement('tr');
    let newData = document.createElement('td');

    let newCaption = document.createElement('h2');
    let newText = document.createTextNode('Inventory');
    newCaption.appendChild(newText);
    newArticle.appendChild(newCaption);

    newText = document.createTextNode("Bananas");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.bananas);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Water");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.water);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Sugar");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.sugar);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Empty Glasses");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.emptyGlasses);
    newData.appendChild(newText);

    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newArticle.appendChild(newTable);
    let body = document.getElementsByClassName("design")[0];
    body.appendChild(newArticle);
  }

  showAdmin() {
    let newArticle = document.createElement('article');
    let newH1 = document.createElement('h2');
    let newText = document.createTextNode('Admin');
    newH1.appendChild(newText);
    newArticle.appendChild(newH1);

    let newUl = document.createElement("ul");

    let li = document.createElement("li");
    newText = document.createTextNode(
      `Price per Glass: $${this.price.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);

    li = document.createElement("li");
    newText = document.createTextNode(
      `Glasses of Bananaade: ${this.fullGlasses}`);
    li.appendChild(newText);
    newUl.appendChild(li);

    li = document.createElement("li");
    newText = document.createTextNode(
      `Income: $${this.income.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);

    newArticle.appendChild(newUl);

    let body = document.getElementsByClassName("design")[0];
    body.appendChild(newArticle);
  }

  updateInventory(label, number, limit) {
    let table = document.querySelector("table");
    let tds = table.querySelectorAll("td");
    for (let td of tds) {
      if (td.textContent.includes(label)) {
        td.nextSibling.textContent = number;
        if (number < limit) {
          td.nextSibling.style.backgroundColor = "pink";
          td.style.backgroundColor = "pink"
        } else {
          td.nextSibling.style.backgroundColor = "lightyellow";
          td.style.backgroundColor = "lightyellow"
        }
      }
    }
    $('.hide_me').hide();
  }

}

let ls = new BananaadeStand(20, 10, 10, 10, 2.0);

function init() {
  ls.showAdmin();
  ls.showIngredients();
  $('.hide_me').hide();
  initAddIngredients();
  initButtons();
  initImageMouseOver();
  initChangePrice();
}

function initButtons() {
  let buttons = $('.banana');
  console.log(buttons)
  buttons[0].addEventListener('click', function() { ls.makeBananaade(); }, false);
  buttons[1].addEventListener('click', function() { ls.sellBananaade(); }, false);
  buttons[2].addEventListener('click', sell, false);
}

function sell() {
  let input = document.querySelector('#sellMore').value;
  //console.log(input);
  if (input > 0 && input <= 8) {
    ls.sellMoreBananaade(input);
  }
  let inp = document.querySelector('#sellMore');
  inp.value = ""

}

function initAddIngredients() {
  /*let elements = document.querySelectorAll(".hide_me");
  for (let ele of elements) {
    ele.addEventListener("click", showInput, false);
    ele.addEventListener("keyup", addIngredient, false);
  }*/

  $('.hide_me').on('click', showInput).on('keyup', addIngredient);

  $('.price').on('click', showInput).on("keyup", changePrice)

}

function initChangePrice() {
  let elements = document.querySelectorAll(".hide_me");
  let ele = elements[4];
  ele.addEventListener("click", showInput, false);
  ele.addEventListener("keyup", changePrice, false);
}

function changePrice(e) {
  if (e.key == "Enter") {
    if (e.target.value > 0) {
      ls.price = e.target.value;
      ls.updateAdmin();
      $('.hide_me').hide();
    } else {
      alert("Not a valid input");
    }
  }
}

function addIngredient(e) {
  if (e.key == "Enter") {
    if (e.target.id == "numBananas") {
      ls.bananas += +e.target.value;
      ls.updateInventory("Bananas", +ls.bananas, ls.minBananas);
    } else if (e.target.id == "numWater") {
      ls.water += +e.target.value;
      ls.updateInventory("Water", +ls.water, ls.minWater);
    } else if (e.target.id == "numSugar") {
      ls.sugar += +e.target.value;
      ls.updateInventory("Sugar", +ls.sugar, ls.minSugar);
    } else if (e.target.id == "numGlasses") {
      ls.emptyGlasses += +e.target.value;
      ls.updateInventory("Glasses", +ls.emptyGlasses, ls.minEmptyGlasses);
    }
  }

}

function initImageMouseOver() {
  /*let nodes = document.querySelectorAll('span');
  for (let ele of nodes) {
    ele.addEventListener('mouseover', (e) => {
      e.target.style.color = "purple";
      e.target.previousElementSibling.src="../images/plus_dark.png";
    }, false);
    ele.addEventListener('mouseout', (e) => {
      e.target.style.color = "blue"
      e.target.previousElementSibling.src = "../images/plus_light.png";
    }, false);
  }*/
  $('span').on('mouseover', (e) => {
    e.target.style.color = "purple";
    e.target.previousElementSibling.src = "images/plus_dark.png";
  }).on('mouseout', (e) => {
    e.target.style.color = "blue"
    e.target.previousElementSibling.src = "images/plus_light.png";
  })

  /*let nodes = document.querySelectorAll('img');
  for (let ele of nodes) {
    ele.addEventListener('mouseover', (e) => {
      e.target.nextElementSibling.style.color = "purple";
      e.target.src="../images/plus_dark.png";
    }, false);
    ele.addEventListener('mouseout', (e) => {
      e.target.nextElementSibling.style.color = "blue"
      e.target.src = "../images/plus_light.png";
    }, false);
  }*/

  $('img').on('mouseover', (e) => {
    e.target.nextElementSibling.style.color = "purple";
    e.target.src = "images/plus_dark.png";
  }).on('mouseout', (e) => {
    e.target.nextElementSibling.style.color = "blue"
    e.target.src = "images/plus_light.png";
  })
}

function showInput() {
  $('.hide_me').hide();
  this.style.display = "inline";

  $('.hide_me').slideUp(500); //Hide all the boxes
  $(this).slideDown(500,
    function() {
      this.focus();
    }
  );
  this.value = '';
}

//init();

$(function() {
  init();
});