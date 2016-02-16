(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./createBoard":3,"./displayBoard":4,"./nextBoard":7}],2:[function(require,module,exports){
var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  var count = 0;
  var neighbours = getNeighbours(cellRow, cellColumn, board);
  for (var i = 0; i < neighbours.length; i++){
     if (neighbours[i] ){
     	count++;
     }
  }


  return count;

}
module.exports = countAliveNeighbours

},{"./getNeighbours":5}],3:[function(require,module,exports){
function createBoard(size) {
  var board = [];

  for (var i = 0; i < size; i++) {
  	board.push([]);

	for (var j = 0; j < size; j++) {
	  	board[i].push(false);
	  }
  }
  return board;

}
module.exports = createBoard
},{}],4:[function(require,module,exports){
(function (process){
var clear = require('clear')
function displayBoard(board) {
  clear();
  for(var row of board){
    for(var cell of row){
      process.stdout.write(cell ? '|X|': '| |')
    }
    process.stdout.write('\n')
  }
}



module.exports = displayBoard 

}).call(this,require('_process'))
},{"_process":14,"clear":13}],5:[function(require,module,exports){
var indicesOutOfBounds = require('./indicesOutOfBounds')
function getNeighbours(cellRow, cellColumn, board) {
	var neighbours = [];
		for (var x = -1; x < 2; x++) {
		for (var y = -1; y < 2; y++) {
			if (indicesOutOfBounds(cellRow + x, cellColumn + y, board) || (y === 0 && x === 0)){}
			else {neighbours.push(board[cellRow + x][cellColumn + y])}
		}
	}
	return neighbours;
}


//exclude 0,0
module.exports = getNeighbours

},{"./indicesOutOfBounds":6}],6:[function(require,module,exports){
var outOfBounds = require('./outOfBounds')

function indicesOutOfBounds(rowIndex, columnIndex, array) {

	return (outOfBounds(rowIndex, array) || outOfBounds(columnIndex, array))
}

module.exports = indicesOutOfBounds

},{"./outOfBounds":9}],7:[function(require,module,exports){
var nextCellState = require('./nextCellState')
var countAliveNeighbours = require('./countAliveNeighbours')
var createBoard = require('./createBoard')


function nextBoard(currentBoard) {
	var newBoard = createBoard(currentBoard.length);

	for (var i = 0; i < currentBoard.length; i++) {

	  for (var j = 0; j < currentBoard.length; j++) {
	    	newBoard[i][j] = nextCellState(currentBoard[i][j], countAliveNeighbours(i,j,currentBoard));
		  }
	  }
	// console.log(newBoard);
	return newBoard
}

module.exports = nextBoard

},{"./countAliveNeighbours":2,"./createBoard":3,"./nextCellState":8}],8:[function(require,module,exports){
var overPopulated = require('./overPopulated')
var underPopulated = require('./underPopulated')
var ressurectable = require('./ressurectable')

function nextCellState(cellState, neighbourCount) {
	
	if (cellState === true) {

		if (overPopulated(neighbourCount)){
			return false;
		}
		else if (underPopulated(neighbourCount)){ 
		    return false;
		}
		else {
			return true;
		}
	   }
	 else {
	 	if(ressurectable(neighbourCount) ){
		   return true;
		 }
		 else {
		 	return false;
		 }

	}
}

module.exports = nextCellState

},{"./overPopulated":10,"./ressurectable":11,"./underPopulated":12}],9:[function(require,module,exports){
function outOfBounds(index, array) {
return (index < 0 || index >= array.length);
}
module.exports = outOfBounds

},{}],10:[function(require,module,exports){
function overPopulated(neighbourCount) {
  return neighbourCount > 3;
}
module.exports = overPopulated

},{}],11:[function(require,module,exports){
function ressurectable(neighbourCount) {
  return neighbourCount === 3;
}
module.exports = ressurectable

},{}],12:[function(require,module,exports){
function underPopulated(neighbourCount) {
  return neighbourCount < 2;
}
module.exports = underPopulated

},{}],13:[function(require,module,exports){
(function (process){
module.exports = function(clear) {
  if (clear !== false) {
    process.stdout.write('\033[2J');
  }
  process.stdout.write('\033[0f');
};

}).call(this,require('_process'))
},{"_process":14}],14:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
