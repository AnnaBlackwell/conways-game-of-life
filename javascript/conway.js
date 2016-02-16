createBoard = require('./createBoard')
nextBoard = require('./nextBoard') 
displayBoard = require('./displayBoard')

var board = createBoard(20);


//Pulsar
board[10][5] = true;
board[10][6] = true;
board[10][7] = true;
board[11][8] = true;
board[12][8] = true;
board[13][8] = true;
board[15][7] = true;
board[15][6] = true;
board[15][5] = true;
board[11][3] = true;
board[12][3] = true;
board[13][3] = true;

//Toad
board[4][3] = true;
board[4][4] = true;
board[4][5] = true;
board[3][2] = true;
board[3][3] = true;
board[3][4] = true;


//glider
board[5][15] = true;
board[5][16] = true;
board[5][17] = true;
board[4][17] = true;
board[3][16] = true;

//spaceship
board[12][10] = true;
board[12][11] = true;
board[12][12] = true;
board[12][13] = true;
board[13][19] = true;
board[13][13] = true;
board[14][13] = true;
board[15][12] = true;
board[15][9] = true;

var step = function(){
	displayBoard(board);
	board = nextBoard(board);
}

var intervalStep = setInterval(step, 200);

