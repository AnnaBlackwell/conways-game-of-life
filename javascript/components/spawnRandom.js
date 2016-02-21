var $ = require('jquery')
var createBoard = require('../createBoard')
var board = createBoard(20)

function spawnRandom(board) {
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var cellSelector = "#row" + i + ", .cell" + j
			$(cellSelector).removeClass("alive").removeClass("dead")
			if (Math.random() < 0.6) {
				$(cellSelector).addClass("alive")
			}
			else {
				$(cellSelector).addClass("dead")
			}
		}
	}
}

module.exports = spawnRandom