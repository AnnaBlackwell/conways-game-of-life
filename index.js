var makeHTMLBoard = require('./javascript/components/htmlBoard')
var $ = require('jquery')
var createBoard = require('./javascript/createBoard')
var nextBoard = require('./javascript/nextBoard') 
var spawnRandomArray = require('./javascript/components/spawnRandomArray')
var board = createBoard(30)
var boardElements = $(".cell")
// var draw = require('./javascript/components/canvas')


function updateboard(board, boardElements) {
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			var cellSelector = "#row" + i + " .cell" + j
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
		spawnRandomArray(board)
	})
})

var step = function(){
	updateboard(board, boardElements);
	board = nextBoard(board);
	console.log('working')
}

var intervalStep = setInterval(step, 100);