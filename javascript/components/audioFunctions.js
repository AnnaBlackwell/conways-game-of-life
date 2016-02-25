var $ = require('jquery')

var audio0 = new Audio('audio/39187__jobro__piano-ff-040.mp3')
var audio1 = new Audio('audio/39189__jobro__piano-ff-042.mp3')
var audio2 = new Audio('audio/39191__jobro__piano-ff-044.mp3')
var audio3 = new Audio('audio/39195__jobro__piano-ff-047.mp3')
var audio4 = new Audio('audio/39197__jobro__piano-ff-049.mp3')
var audio5 = new Audio('audio/39200__jobro__piano-ff-052.mp3')
var audio6 = new Audio('audio/39202__jobro__piano-ff-054.mp3')
var audio7 = new Audio('audio/39204__jobro__piano-ff-056.mp3')
var audio8 = new Audio('audio/39207__jobro__piano-ff-059.mp3')
var audio9 = new Audio('audio/39209__jobro__piano-ff-061.mp3')


module.exports = $(function (){
	// $('#sound-button').click(function() {
		// console.log('click')
		// audio2.play()
		// console.log('sound is working')

	$('#row0').delegate('.cell')
		console.log('still working')
		if ($('div').hasClass('alive')) {
		console.log('audio0 triggered')
		audio0.play()
		}
	})
// })

//this is working only on click event