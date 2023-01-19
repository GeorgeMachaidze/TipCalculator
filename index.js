//get all buttons
var xuti = document.getElementById("xuti");
var ati = document.getElementById("ati");
var txutmeti = document.getElementById("txutmeti");
var ocdaxuti = document.getElementById("oxdaxuti");
var ormosdaati = document.getElementById("ormosdaati");
var reset = document.getElementById("reset");
// get all buttons in one array
var numberOfButtons = document.querySelectorAll(".five").length;
//give all buttons value
var xuti = 5;
var ati = 10;
var txutmeti = 15;
var ocdaxuti = 25;
var ormocdaati = 50;
// key press event listener "enter" for custom button
document.getElementById("custom").addEventListener("keypress", function(e){
  if (e.key === 'Enter'){
    calculateTip();
  }
})
// click event listener for procent buttons
for (var i = 0; i < numberOfButtons; i++) {
document.querySelectorAll(".five")[i].addEventListener("click",function() {
calculateTip();
 });
};
// switch case for all buttons
function calculateTip(id){
  switch(id){
    case "xuti":
    calculator(xuti)
    break;

    case "ati":
      calculator(ati)
    break;

    case "txutmeti":
      calculator(txutmeti)
    break;

    case "ocdaxuti":
      calculator(ocdaxuti)
    break;

    case "ormocdaati":
      calculator(ormocdaati)
    break;

    case "custom":
      customCalculator()
    break;
    //refresh page
    case "reset":
      window.location.reload();
    break;
  }
}
//tip calculator for buttons
function calculator(n){
  var a = document.getElementById('firstInput').value;
  var b = document.getElementById('secondInput').value;
  var tipAmount = a/b * n / 100;
  var y = Math.round(tipAmount*100)/100;
  document.getElementById("tipAmount").innerHTML = y + "$";
  var total = a/b;
  var x = Math.round(total*100)/100;
  document.getElementById("total").innerHTML = x + "$";
}
//tip calculator for custom button
function customCalculator(){
  var a = document.getElementById('firstInput').value;
  var b = document.getElementById('secondInput').value;
  var custom = document.getElementById("custom").value;
  var customTip = a/b * custom / 100;
  var y = Math.round(customTip*100)/100;
  document.getElementById("tipAmount").innerHTML = y + "$";
  var customTotal = a/b;
  var x = Math.round(customTotal*100)/100;
  document.getElementById("total").innerHTML = x + "$";
}
