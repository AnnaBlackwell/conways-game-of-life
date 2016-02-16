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
