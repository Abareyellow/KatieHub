let $button = $('input[type="button"]');
let total = 0;
let questions = []

$button.on("click", results);

function results() {
  total = 0;
  let $teamup = $("input[name='team-up']:checked").val();
  let points = findPersonality();
  console.log(points)

 if (points < 0) {
   alert(`You have to anwser these questions: ${questions.join(" ")}`)
 } else {
  updateStructure(points, $teamup);
 }
} 

function findPersonality() {
  let color = $("input[name='color']:checked").val();
  let creature = $("input[name='creature']:checked").val();
  let jobs = $("input[name='jobs']:checked").val();
  let weakness = $("input[name='weakness']:checked").val();
  let activity = $("input[name='activity']:checked").val();
  let describe = $("input[name='describe']:checked").val();
  let powers = $("input[name='powers']:checked").val();
  let friend = $("input[name='friend']:checked").val();
  let using = $("input[name='using']:checked").val();
  let worst = $("input[name='worst']:checked").val();

  switch (color) {
    case "red":
      total += 0;
      break;
    case "blue":
      total += 1;
      break;
    case "yellow":
      total += 2;
      break;
    case "black": 
      total += 3;
      break;
    case "pink":
      total += 5;
      break;
    case "gold": 
      total += 4;
      break;
    case "silver":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(1)
  }

  switch (creature) {
    case "monkey":
      total += 1;
      break;
    case "oni":
      total += 2;
      break;
    case "dog":
      total += 3;
      break;
    case "pheasant":
      total += 5
      break;
    case "dragon":
      total += 4;
      break;
    case "tiger":
      total += 4;
      break;
    case "human":
      total += 0;
      break;
    default:
      total -= 100;
      questions.push(2)
  }

  switch (jobs) {
    case "delivery":
      total += 0;
      break;
    case "manga":
      total += 2;
      break;
    case "consultant":
      total += 5;
      break;
    case "volunteer":
      total += 1;
      break;
    case "criminal":
      total += 3;
      break;
    case "hero":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(3)
  }

  switch (weakness) {
    case "good":
      total += 0;
      break;
    case "analytical":
      total += 1;
      break;
    case "childish":
      total += 2;
      break;
    case "trust":
      total += 3;
      break;
    case "doubt":
      total += 5;
      break;
    case "naive":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(4)
  }

  switch (activity) {
    case "everything":
      total += 0;
      break;
    case "poetry":
      total += 1;
      break;
    case "drawing":
      total += 2;
      break;
    case "running":
      total += 3;
      break;
    case "love-time":
      total += 5;
      break;
    case "cosplay":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(5)
  }

  switch (describe) {
    case "blood":
      total += 4;
      break;
    case "humble":
      total += 5;
      break;
    case "cool":
      total += 3;
      break;
    case "helpful":
      total += 2;
      break;
    case "erudite":
      total += 1;
      break;
    case "honest":
      total += 0;
      break;
    default:
      total -= 100;
      questions.push(6)
  }

  switch (powers) {
    case "unknown":
      total += 0;
      break;
    case "discovery":
      total += 1;
      break;
    case "high-point":
      total += 2;
      break;
    case "low-point":
      total += 3;
      break;
    case "random":
      total += 5;
      break;
    case "achievement":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(7)
  }

  switch (friend) {
    case "be-honest":
      total += 0;
      break;
    case "enlighten":
      total += 1;
      break;
    case "kind":
      total += 2;
      break;
    case "roleplay":
      total += 3;
      break;
    case "plan":
      total += 5;
      break;
    case "motivate":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(8)
  }

  switch (using) {
    case "dont":
      total += 0;
      break;
    case "good":
      total += 1;
      break;
    case "situation":
      total += 2;
      break;
    case "escape":
      total += 3;
      break;
    case "support":
      total += 5;
      break;
    case "train":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(9)
  }

  switch (worst) {
    case "accept":
      total += 0;
      break;
    case "odd":
      total += 1;
      break;
    case "plagiarism":
      total += 2;
      break;
    case "lose":
      total += 3;
      break;
    case "love":
      total += 5;
      break;
    case "fake":
      total += 4;
      break;
    default:
      total -= 100;
      questions.push(10)
  }

  return total;
}

function updateStructure(score, diff) {
  if (score >= 0 && score <= 4) {
    //Taro
    windowResult("taro");
  } else if (score == 5) {
    if (diff == "yes") {
      //Taro
      windowResult("taro")
    } else {
      //Shinichi
      windowResult("shinichi")
    }
  } else if (score >= 6 && score <= 14) {
    //Shinichi
    windowResult("shinichi")
  } else if (score == 15) {
    if (diff == "yes") {
      //Haruka
      windowResult("haruka")
    } else {
      //Shinichi
      windowResult("shinichi")
    }
  } else if (score >= 16 && score <= 24) {
    //Haruka
     windowResult("haruka")
  } else if (score == 25) {
    if (diff == "yes") {
      //Haruka
       windowResult("haruka")
    } else {
      //Tsubasa
       windowResult("tsubasa")
    }
  } else if (score >= 26 && score <= 34) {
    //Tsubasa
    windowResult("tsubasa")
  } else if (score == 35) {
    if (diff == "yes") {
      //Jiro
      windowResult("jiro")
    } else {
      //Tsubasa
      windowResult("tsubasa")
    }
  } else if (score >= 36 && score <= 44) {
    //Jiro
    windowResult("jiro")
  } else if (score == 45) {
    if (diff == "yes") {
      //Jiro
      windowResult("jiro")
    } else {
      //Tsuyoshi
      windowResult("tsuyoshi")
    }
  } else {
    //Tsuyoshi
    windowResult("tsuyoshi")
  }
}

function windowResult(name) {
  let $result = $(".result")
  $result.removeClass("hidden");
  let $body = $('body');
  $body.addClass('fadeOut');
  $('.quiz').addClass('hidden');

  if (name == "taro") {
    $('.taro').removeClass("hidden");
  } else if (name == "shinichi") {
    $('.shinichi').removeClass("hidden");
  } else if (name == "haruka") {
    $('.haruka').removeClass("hidden");
  } else if (name == "tsubasa") {
    $('.tsubasa').removeClass("hidden");
  } else if (name == "tsuyoshi") {
    $('.ew').removeClass("hidden");
  } else if (name == "jiro") {
    $('.jiro').removeClass("hidden");
  }
  
}

const flipButton = $('#flip-button-taro');
const card = $('#taro'); // Change the selector to .card
card.flip(); // Initialize the flip plugin on the card element

flipButton.on('click', function() {
  card.flip('toggle'); // Toggle the flip animation on the card
});

const flipButtonShinichi = $('#flip-button-shinichi');
const shinichiCard = $('#shinichi');
shinichiCard.flip();

flipButtonShinichi.on('click', function() {
  console.log("Here")
  shinichiCard.flip('toggle'); // Toggle the flip animation on the card
});

const flipButtonHaruka = $('#flip-button-haruka');
const harukaCard = $('#haruka');
harukaCard.flip();

flipButtonHaruka.on('click', function() {
  console.log("Here")
  harukaCard.flip('toggle'); // Toggle the flip animation on the card
});

const flipButtonTsubasa = $('#flip-button-tsubasa');
const tsubasaCard = $('#tsubasa');
tsubasaCard.flip();

flipButtonTsubasa.on('click', function() {
  console.log("Here")
  tsubasaCard.flip('toggle'); // Toggle the flip animation on the card
});

const flipButtonSorry = $('#flip-button-ew');
const sorryCard = $('#ew');
sorryCard.flip();

flipButtonSorry.on('click', function() {
  console.log("Here")
  sorryCard.flip('toggle'); // Toggle the flip animation on the card
});

const flipButtonJiro = $('#flip-button-jiro');
const jiroCard = $('#jiro');
jiroCard.flip();

flipButtonJiro.on('click', function() {
  console.log("Here")
  jiroCard.flip('toggle'); // Toggle the flip animation on the card
});

let $x = $('.x');

$x.on('click', reverse);

function reverse() {
  $('body').removeClass('fadeOut')
  $('.quiz').removeClass('hidden')
  $('.result').addClass('hidden')
}