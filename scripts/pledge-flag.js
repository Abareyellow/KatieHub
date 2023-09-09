let $button = $(".submit");
let result = $('.results');
let input = $('.inputs');

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

document.getElementById("download").onclick = function() {
  const screenshotTarget = document.getElementById("flag");

  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    let anchor = document.createElement('a');
    anchor.setAttribute("href", base64image);
    anchor.setAttribute("download", "my-flag.png");
    anchor.click();
    anchor.remove();
  });
}