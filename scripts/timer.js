let timeM = $('#minutes');
let sectionTime = $('#session-length');
let beep = document.getElementById("beep")
//const audio = new Audio(beep);
//console.log(beep)
let value = 0;
let timex = 0;

let breakTime = $('#break-length')
let sessionTime = $('#session-length')

let bIncrease = $('#break-increment');
let bDecrease = $('#break-decrement');
let sIncrease = $('#session-increment');
let sDecrease = $('#session-decrement');

bIncrease.on("click", function(){
  increase("break")
})

bDecrease.on("click", function() {
  decrease("break")
})

sIncrease.on("click", function(){
  increase("session")
})

sDecrease.on("click", function() {
  decrease("session")
})

function decrease(section) {
  if (section == "break") {
    let bNum = breakTime.text();
    value = parseInt(bNum) - 1;
    if (value >= 1) {
      breakTime.text(value);
    }
  } else {
    let sNum = sessionTime.text()
    value = parseInt(sNum) - 1;
    if (value >= 1) {
      sessionTime.text(value);
      if (value < 10) {
        timeM.text("0" + value);
      }
      else {
        timeM.text(value);
      }
      $('#seconds').text("00")
    }
  }
}

function increase(section) {
  if (section == "break") {
    let bNum = breakTime.text();
    value = parseInt(bNum) + 1;
    if (value <= 60) {
      breakTime.text(value);
    }
  } else {
    let sNum = sessionTime.text()
    value = parseInt(sNum) + 1;
    if (value <= 60) {
      sessionTime.text(value);
      if (value < 10) {
        timeM.text("0" + value);
      }
      else {
        timeM.text(value);
      }
      $('#seconds').text("00")
    }
  }
}

//Timer logic

let reset = $('#reset');

reset.on("click", resetTime) 

function resetTime() {
  clearTimeout(timex);
  breakTime.text("5")
  sessionTime.text("25")
  timeM.text(`${sectionTime.text()}`);
  $('#seconds').text("00")
  $('#session').text("Session")
  $('#start_stop').text("Start")
  beep.load()
}

$('#start_stop').on("click", startOrStop)

function startOrStop() {
  let where = $('#start_stop')

  if (where.text() == "Start") {
    startTimer();
    where.text("Stop")
  } else {
    clearTimeout(timex);
    where.text("Start");
  }
}


function startTimer() {
  let seconds = parseInt($('#seconds').text());
  let minutes = parseInt($('#minutes').text());
  timex = setTimeout(function() {
    seconds--;

    if (seconds < 0 && minutes != 0) {
      seconds = 59;
      minutes--;
      if (minutes < 10) {
        $('#minutes').text(`0${minutes}`);
      } else {
        $('#minutes').text(minutes)
      }
    }

    if (seconds < 10 && seconds != -1) {
      $('#seconds').text(`0${seconds}`)
    } else {
      $('#seconds').text(seconds);
    }

    if (seconds <= -1 && minutes <= 0) {
      beep.play();
      $('#session').text("Break")
      if ($('#break-length').text() < 10) {
        $('#minutes').text("0" + $('#break-length').text())
      } else {
        $('#minutes').text($('#break-length').text())
      }
      $('#seconds').text("00")
      breakTimer();
    } else {
      startTimer()
    }
  }, 1000);
}

function breakTimer() {
  let seconds = parseInt($('#seconds').text());
  let minutes = parseInt($('#minutes').text())
  timex = setTimeout(function() {
    seconds--;

    if (seconds < 0 && minutes != 0) {
      seconds = 59;
      minutes--;
      if (minutes < 10) {
        $('#minutes').text("0" + minutes);
      } else {
        $('#minutes').text(minutes)
      }
    }

    if (seconds < 10 && seconds != -1) {
      $('#seconds').text("0" + seconds)
    } else {
      $('#seconds').text(seconds);
    }

    if (seconds <= -1 && minutes <= 0) {
      beep.play()
       $('#session').text("Session")
      if ($('#session-length').text() < 10) {
        $('#minutes').text("0" + $('#session-length').text())
      } else {
        $('#minutes').text($('#session-length').text())
      }
      $('#seconds').text("00")
      startTimer();
    } else {
      breakTimer()
    }
  }, 1000);
}