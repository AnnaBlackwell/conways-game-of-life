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
