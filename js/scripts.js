var a = 2;
var b = 4;
var calculate = [a * a] - [2 * a * b] + [b * b];
var value = calculate;
console.log(value);
if ( a >= 0 || b >= 0) {
	console.log('wynik dodatni')
}
else  {
	console.log('wynik ujemny')
}
if ( a == 0 || b == 0) {
	console.log("Wynik jest równy zero")
}
else {
	console.log("Wynik nie jest równy zeru")
}