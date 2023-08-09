let $button = $("input[type='submit']");
let total = 0;

$button.on("click", results);

function results() {
  let points = findPersonality()
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
  let team-up = $("input[name='team-up']:checked").val();

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
  }
}