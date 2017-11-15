var a = -1;
var b = 100;
var calculate = (a * a) - (2 * a * b) + (b * b);
var value = calculate;
console.log(value);
if ( value > 0 ) {
	console.log('wynik dodatni');
	console.log("Wynik nie jest równy zeru");
}
else if ( value == 0) {
	console.log('Wynik jest równy zero');
}
else  {
	console.log("wynik ujemny");
}

