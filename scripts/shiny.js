let go = $('#go')
let arceus = $('#arceus')
let violet = $('#violet')

$('.go').on("click", displayGo)
$('.arceus').on("click", displayArceus)
$('.violet').on("click", displayViolet)

function displayGo() {
  console.log("Here")
  go.removeClass('hidden')
  arceus.addClass('hidden')
  violet.addClass('hidden')
}

function displayArceus() {
  console.log("Here")
  go.addClass('hidden')
  arceus.removeClass('hidden')
  violet.addClass('hidden')
}

function displayViolet() {
  console.log("Here")
  go.addClass('hidden')
  arceus.addClass('hidden')
  violet.removeClass('hidden')
}