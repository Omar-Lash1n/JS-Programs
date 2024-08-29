var celisiusTemp = prompt("Enter Temprature in celisius (cel to fah convert):");
var celtofah = (9/5 * celisiusTemp)+32;
document.write(celisiusTemp+"°C is "+celtofah+"°F .<br><br>")

var fahTemp = prompt("Enter Temprature in faherenheit (fah to cel convert):")
var fahtocel = (fahTemp - 32) * 5/9;
document.write(fahTemp+"°F is "+fahtocel+"°C .<br>")