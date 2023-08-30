let $button = $(".submit");

$button.on("click", submitResults);

function submitResults() {
  let $firstname = $("input[name='firstname']").val();
  let $pledge = $("input[name='pledge']").val();
  let $background = $("input[name='background']").val();
  let $background2 = $("input[name='background2']").val();
  let $font = $("input[name='font']").val();

  maketheCard($firstname, $pledge, $background, $background2, $font);
}

function maketheCard(name, pledge, background, foreground, font) {
  let result = $('.results');
  let pledge_card = $('.pledge-card')
  let firstname = $('.pledge-card h1')
  let pledge_para = $('.pledge-card p')

  result.removeClass('hidden')
  pledge_card.css('background-color', background)
  firstname.text(name);
  firstname.css('color', font, 'background-color', foreground)
  pledge_para.text(pledge)
  pledge_para.css('color', font, 'background-color', foreground)
}