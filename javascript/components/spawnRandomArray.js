var $ = require('jquery')
var createBoard = require('../createBoard')
var board = createBoard(30)

function spawnRandomArray(board) {
	for (var i = 0; i < board.length; i++) {
	  for (var j = 0; j < board.length; j++) {
	    	if (Math.random() < 0.5) {
	    		board[i][j] = true
	    	}
	    	else {
	    		board[i][j] = false
	    	}
    	}
    }
}

module.exports = spawnRandomArray
