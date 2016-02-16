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
