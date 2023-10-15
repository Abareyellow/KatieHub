let enter = $('.enter');
//console.log(enter);

var fileContent = $.ajax({ type: "GET", url: "https://gist.githubusercontent.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/6bfa15d263d6d5b63840a8e5b64e04b382fdb079/valid-wordle-words.txt", async: false },).responseText;

let masterList = fileContent.split('\n');
let message = "";
//console.log(masterList)

enter.on('click', findSuggestWords);

function findSuggestWords() {
  let suggestWords = masterList;
  //console.log(suggestWords)
  let firstPlace = $('#firstCorrect').val().toLowerCase()
  let secondPlace = $('#secondCorrect').val().toLowerCase()
  let thirdPlace = $('#thirdCorrect').val().toLowerCase()
  let fourthPlace = $('#fourthCorrect').val().toLowerCase()
  let fifthPlace = $('#fifthCorrect').val().toLowerCase()

  //console.log("Here")
  //console.log(wave1)
  //console.log("Done")

  let yellow1 = $('#firstValid').val().toLowerCase()
  let yellow2 = $('#secondValid').val().toLowerCase()
  let yellow3 = $('#thirdValid').val().toLowerCase()
  let yellow4 = $('#fourthValid').val().toLowerCase()
  let yellow5 = $('#fifthValid').val().toLowerCase()
  let letters = [yellow1, yellow2, yellow3, yellow4, yellow5]
  letters = letters.filter(function(str) {
    return /\S/.test(str);
  });

  let badLetters = $('.bad').val().toLowerCase();

  let okToGo = checkInputs(firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace, letters, badLetters);
  console.log(okToGo)


  if (okToGo) {
    let wave1 = placedLetterFind(firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace, suggestWords);

    let wave2 = valWordsFinds(wave1, letters)
    console.log(wave2)

    let final = eraseGreyLetters(badLetters, wave2)

    displayData(final);
  } else {
    alert(message)
  }

}

function placedLetterFind(first, second, third, fourth, fifth, list) {
  //let foundWords = []
  //console.log(first);
  //console.log(list);
  if (first != "") {
    //console.log("here")
    list = list.filter(word => word.charAt(0) == first)
  }
  if (second != "") {
    //console.log("here")
    list = list.filter(word => word.charAt(1) == second)
  }

  if (third != "") {
    //console.log("here")
    list = list.filter(word => word.charAt(2) == third)
  }

  if (fourth != "") {
    //console.log("here")
    list = list.filter(word => word.charAt(3) == fourth)
  }

  if (fifth != "") {
    //console.log("here")
    list = list.filter(word => word.charAt(4) == fifth)
  }

  //console.log(list);

  return list
}

function valWordsFinds(words, list) {
  //let foundWords = []

  for (let i = 0; i < list.length; i++) {
    words = words.filter(word => word.includes(list[i]))
    //console.log(words);
  }

  return words;
}

function eraseGreyLetters(string, list) {
  let bad = string.split("")
  //console.log(letters)

  for (let i = 0; i < bad.length; i++) {
    list = list.filter(word => word.includes(bad[i]) == false);
    //console.log(list);
  }

  //console.log(list);

  return list;
}


function displayData(finalList) {
  let displayBox = $('.box');
  //console.log(displayBox)
  displayBox.removeClass('hidden');
  //console.log(displayBox)
  displayBox.empty();

  for (let i = 0; i < finalList.length; i++) {
    displayBox.append(`<p class="words">${finalList[i]}</p>`);
  }
}

function checkInputs(p1, p2, p3, p4, p5, letters, bad) {
  let checklist = [p1, p2, p3, p4, p5];
  checklist = checklist.filter(function(str) {
    return /\S/.test(str);
  });

  checklist.concat(letters)
  for (let i = 0; i < checklist.length; i++) {
    if (bad.includes(checklist[i])) {
      message = `The letter ${checklist[i]} is use in the word.`
      return false;
    } else if (/^[^A-Za-z]*$/.test(checklist[i])) {
      message = "Invalid character!!"
      return false;
    }
  }

  return true;

}