
//Button from the form
let $total_button = $('#total');
let $clear_button = $('#clear');
//Listening in for a click
$total_button.on('click', totalCost);
$clear_button.on('click', clearForm);

let total = 0;

//Calculacating Total Cost
function totalCost() {
  let $toppings = $("input[name = 'topping']:checked").val();
  let $size = $("input[name = 'size']:checked").val();
  let $crust = $("input[name = 'type']:checked").val();
  let $extra = $("input[name = 'cheese']:checked").val();
  let $tip = $('#tips').val();

  //function for calculating the final price
  costTopping($toppings);
  costSize($size);
  costCrust($crust);
  costExtra($extra);
  tipsAdd($tip);

  tax = total * 0.088
  total += tax;

  console.log(total)

  let $text = $('#text')
  $text.val(total.toFixed(2).toString());

  total = 0;
}

function costTopping(value) {
  if(value != 0) {
    total += (value * 1)
  }
}
//Setting everything back to the default.
function clearForm() {
  $('input[name="topping"][value="0"]').prop('checked', true);
  $('input[name="size"][value="small"]').prop('checked', true);
  $('input[name="type"][value="thin"]').prop('checked', true);
  $('input[name="cheese"][value="no"]').prop('checked', true);
  $('#tips').val("0");
  $('#text').val("0.00")
}

//Helper functions for total cost
function tipsAdd(value) {
  if(!isNaN(value)) {
    let new_number = parseFloat(value);
    total += new_number;
  } else {
    total += 0;
  }
}

function costSize(value) {
  if(value == "small") {
    total += 10;
  } else if(value == "medium") {
    total += 12;
  } else if(value == "large") {
    total += 14;
  } else if(value == "giant") {
    total += 18;
  }
}

function costCrust(value) {
  if (value == "stuffed") {
    total += 1;
  } else if(value == "square") {
    total += 0.50;
  }
}

function costExtra(value) {
  if(value == "yes") {
    total += 1.40;
  }
}