// var doSomethingToDivCSS = require('./javascript/components/getDiv.js')
var makeHTMLBoard = require('./javascript/components/htmlBoard')
var $ = require('jquery')
var createBoard = require('./javascript/createBoard')
var nextBoard = require('./javascript/nextBoard') 
var spawnRandom = require('./javascript/components/spawnRandom')
var spawnRandomArray = require('./javascript/components/spawnRandomArray')

var board = createBoard(20)
var boardElements = $(".cell")


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
		console.log('click')
		// spawnRandom(board)
		spawnRandomArray(board)
	})
})

$(function () {
	$('#start-button').click(function() {
		console.log('start')
		// how to trigger start?
	})
})

var step = function(){
	updateboard(board, boardElements);
	board = nextBoard(board);
	console.log('working')
}

var intervalStep = setInterval(step, 100);