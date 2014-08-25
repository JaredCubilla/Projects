/* 
Coin Flip Simulation - Javascript
*/

function coinFlip(count) {
	var obj = {record: [], headCount: 0, tailsCount: 0};
	for (var i = 0; i < count; i++) {
		if ((Math.floor((Math.random() * 2) + 1)) === 1) {
			obj.record.push('Heads');
			obj.headCount++;
		} else {
			obj.record.push('Tails');
			obj.tailsCount++;
		}
	}
	return obj;
}