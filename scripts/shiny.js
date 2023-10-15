function openMethod(methodName) {
  var x = document.getElementsByClassName("arrange");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(methodName).style.display = "inline";
}