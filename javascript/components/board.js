


var makeNewBoard = function(size) {

	// for (var k = 0; k < size; k++) {

	var divBoard = document.createElement("div")
	divBoard.id = "board"

	var divRow = document.createElement("div")
	divRow.id = "row" + [i]

	var divCell = document.createElement("div")
	divCell.id = "cell" + [i]
	// }

	console.log(document.getElementById('page'))

	document.getElementById("page").appendChild(divBoard);
	// console.log(document.getElementById("row"))
	for (var i = 0; i < size; i++) {
		document.getElementById("board").appendChild(divRow);

		for (var j = 0; j < size; j++) {
			document.getElementById("row")[i].appendChild(divCell);
		}
	}
}

document.addEventListener('DOMContentLoaded', function(){
	makeNewBoard(10)
})

// module.exports = makeNewBoard 