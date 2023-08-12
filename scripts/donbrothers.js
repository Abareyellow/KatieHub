let $button = $('input[type="button"]');
let total = 0;

$button.on("click", results);

function results() {
  total = 0;
  let $teamup = $("input[name='team-up']:checked").val();
  let points = findPersonality();
  console.log(points)

  updateStructure(points, $teamup);
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
  //$result.append(`<div>`);

  if (name == "taro") {
    
  } else if (name == "shinich") {
    
  } else if (name == "haruka") {
    
  } else if (name == "tsubasa") {
    
  } else if (name == "tsuyoshi") {
    
  } else if (name == "jiro") {
    
  }
  
}