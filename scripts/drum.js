let $drum_Buttons = $(".drum-pad");
let $display = $("#display");

$drum_Buttons.click(function() {
  let message = $(this).text().trim();
  let text = $(this).val()
  let $button = document.getElementById(message).children[0]
  $button.play()
  $display.empty();
  $display.append(text);
})

$(document).keypress(function(event) {
  let key = (event.keyCode ? event.keyCode : event.which);
  let char = String.fromCharCode(key);
  let upperCase = char.toUpperCase();
  let $sound = document.getElementById(upperCase).children[0]
  $sound.play();
  $display.empty();

  if (upperCase == "Q") {
    $display.append("Heater 1");
  } else if (upperCase == "W") {
    $display.append("Heater 2");
  } else if (upperCase == "E") {
    $display.append("Heater 3");
  } else if (upperCase == "A") {
    $display.append("Heater 2");
  } else if (upperCase == "S") {
    $display.append("Clap");
  } else if (upperCase == "D") {
    $display.append("Open HH");
  } else if (upperCase == "Z") {
    $display.append("Kick n' Hat");
  } else if (upperCase == "X") {
    $display.append("Kick");
  } else if (upperCase == "C") {
    $display.append("Closed HH");
  }
})