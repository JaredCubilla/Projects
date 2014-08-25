/* 
Reverse A String - Javascript
*/

function reverso(str) {
	return str.split('').reverse().join('');
}

console.log(reverso('reverso')); // "osrever"
console.log(reverso('racecar')); // "racecar"