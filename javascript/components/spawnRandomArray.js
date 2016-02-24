var $ = require('jquery')
var createBoard = require('../createBoard')
var board = createBoard(20)

function spawnRandomArray(board) {
	for (var i = 0; i < board.length; i++) {
	  for (var j = 0; j < board.length; j++) {
	    	if (Math.random() < 0.6) {
	    		board[i][j] = true
	    	}
	    	else {
	    		board[i][j] = false
	    	}
    	}
    }
}
//this is working and the next board state keeps some cells with class=alive. 
//It makes an entire column either alive or dead. 

module.exports = spawnRandomArray
