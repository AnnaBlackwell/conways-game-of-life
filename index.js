// var doSomethingToDivCSS = require('./javascript/components/getDiv.js')
var makeHTMLBoard = require('./javascript/components/htmlBoard')
var $ = require('jquery')
var createBoard = require('./javascript/createBoard')
var nextBoard = require('./javascript/nextBoard') 
var spawnRandom = require('./javascript/components/spawnRandom')


var board = createBoard(20)
var boardElements = $(".cell")

// $(boardElements).addClass("dead")

//spaceship
// board[12][10] = true;
// board[12][11] = true;
// board[12][12] = true;
// board[12][13] = true;
// board[13][9] = true;
// board[13][13] = true;
// board[14][13] = true;
// board[15][12] = true;
// board[15][9] = true;


function updateboard(board, boardElements) {
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			var cellSelector = "#row" + i + ", .cell" + j
			$(cellSelector).removeClass("alive").removeClass("dead")
			if (board[i][j] === false) {
				$(cellSelector).addClass("dead")
			}
			else if (board[i][j] === true) {
				$(cellSelector).addClass("alive")
			}
		}
	}
}

$(function () {
	$('#spawn-button').click(function() {
		console.log('click')
		spawnRandom(board)
	})
})

$(function () {
	$('#start-button').click(function() {
		console.log('start')
		// spawnRandom(board)
	})
})

var step = function(){
	updateboard(board, boardElements);
	board = nextBoard(board);
	console.log('working')
}

var intervalStep = setInterval(step, 1000);