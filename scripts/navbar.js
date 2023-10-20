$(document).ready(function() {
  let nav = $('#master-nav')
  nav.append("<a href='index.html' class='icon'>Katie Hub</a>")

  nav.append("<div class='right'><div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>My Projects <span class='caret'></span></button><ul class='dropdown-menu'><li><a tabindex='-1' href='shinypokemon.html'>Shiny Pokemon Gallery</a></li><li><a tabindex='-1' href='wordle.html'>Wordle Helper</a></li><li><a tabindex='-1' href='donbrothers-quiz.html'>Donbrothers Quiz</a></li><li><a tabindex='-1' href='pledge-flag.html'>Pledge Flag</a></li></ul></div><div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>Certification Projects <span class='caret'></span></button><ul class='dropdown-menu'><li class='dropdown-submenu'><a class='test' tabindex='-1' href='#'>Front End Development Libraries <span class='caret'></span></a><ul class='dropdown-menu'><li><a tabindex='-1' href='random-quote-generator.html'>Random Quote Generator</a></li><li><a tabindex='-1' href='drum.html'>Drum Machine</a></li><li><a tabindex='-1' href='calculator.html'>Calculator</a></li><li><a tabindex='-1' href='timer.html'>Pomodoro Timer</a></li></ul></li></ul></div><div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>School Projects <span class='caret'></span></button><ul class='dropdown-menu'><li><a tabindex='-1' href='bananaade.html'>Bananaade</a></li><li><a tabindex='-1' href='qep.html'>Appstate QEP</a></li><li><a tabindex='-1' href='pizzashanty.html'>Pizza Shanty</a></li></ul></div><div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>Online Practice <span class='caret'></span></button><ul class='dropdown-menu'><li><a tabindex='-1' href='button.html'>JavaScript Buttons</a></li></ul></div><a href='#'>About Me</a></div></div></div>")
  
  $('.dropdown-submenu a.test').on("click", function(e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
