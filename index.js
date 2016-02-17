// var doSomethingToDivCSS = require('./javascript/components/getDiv.js')
var makeHTMLBoard = require('./javascript/components/htmlBoard')
var $ = require('jquery')
var createBoard = require('./javascript/createBoard')
var nextBoard = require('./javascript/nextBoard') 
var displayBoard = require('./javascript/displayBoard')


var board = createBoard(20)
var boardElements = $(".cell")

$(boardElements).addClass("dead")

function updateboard(board, boardElements) {
	for (var i = 0; i < size; i++) {
		for (var j = 0; i < size; j++) {
			$("#row" + i + " .cell" + j).removeClass("alive" || "dead")
			if (board[i][j] === false) {
				$("#row" + i + " .cell" + j).addClass("dead")
			}
			else if (board[i][j] === true) {
				$("#row" + i + " .cell" + j).addClass("alive")
			}
		}
	}
}

var step = function(){
	displayBoard(board);
	board = nextBoard(board);
}

var intervalStep = setInterval(step, 200);
