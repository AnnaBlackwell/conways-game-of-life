
var makeNewBoard = function(size) {

	var divBoard = document.createElement("div")
	divBoard.id = "board"

	console.log(document.getElementById('page'))

	document.getElementById("page").appendChild(divBoard);
	// console.log(document.getElementById("row"))
	for (var i = 0; i < size; i++) {
		var divRow = document.createElement("div")
		divRow.id = "row" + i

		document.getElementById("board").appendChild(divRow);

		for (var j = 0; j < size; j++) {
			var divCell = document.createElement("div")
			divCell.className = "cell" + j

			document.getElementById("row" + i).appendChild(divCell);
		}
	}
}

document.addEventListener('DOMContentLoaded', function(){
	makeNewBoard(10)
})

// module.exports = makeNewBoard 