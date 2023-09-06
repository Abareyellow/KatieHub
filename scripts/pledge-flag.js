let $button = $(".submit");
//console.log($back)
let result = $('.results');
let input = $('.inputs');
let $download = $('.download')

$button.on("click", submitResults);
$download.on("click", downloadFlag)

function submitResults() {
  let $firstname = $("input[name='firstname']").val();
  let $pledge = $("input[name='pledge']").val();
  let $background = $("input[name='background']").val();
  let $background2 = $("input[name='background2']").val();
  let $font = $("input[name='font']").val();

  maketheCard($firstname, $pledge, $background, $background2, $font);
}

function maketheCard(name, pledge, background, foreground, font) {
  let pledge_card = $('.pledge-card')
  let firstname = $('.pledge-card h1')
  let pledge_para = $('.pledge-card p')

  result.removeClass('hidden')
  input.addClass('hidden')
  pledge_card.css('background-color', background)
  firstname.text(name);
  firstname.css({'color': `${font}`, 'background-color': `${foreground}`})
  pledge_para.text(`Today I make the pledge to: ${pledge}`);
  pledge_para.css({'color': `${font}`, 'background-color': `${foreground}`})
}

let $back = $(".buttons .back");

$back.on("click", backToInputs);

function backToInputs() {
  console.log("here")
  result.addClass('hidden');
  input.removeClass('hidden')
}