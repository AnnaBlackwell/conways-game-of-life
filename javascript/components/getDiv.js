var $ = require('jquery')

//from the function createboard array, 
	//translate the 'true' cells to the corresponding divs
	//add a class of 'alive'



	


var getCell = function(row, col) {
	var selectedCell = "#row" + row + " " + ".cell" + col;
	return selectedCell;

// var giveClassOfAlive = function(selectedCell) {
// 	$(selectedCell)
// 	//take selectedCell to 
// 	}
// }

console.log(getCell(7, 2))

giveClassOfAlive(selectedCell)


module.exports = getCell