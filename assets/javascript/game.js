$(document).ready(function() {
	
	// create random number between 50 & 93
	function getRandNum(){
		return Math.random() * (93 - 50) + 50;
	}
	console.log(getRandNum);
	//when user clicks gets the number 10 on score
	$('#img1').click(function() {
		$('#img1').html(10);
	});

	//when user clicks gets the number 20 on score
	$('#img2').click(function() {
		$('#img2').html(20);
	});

	//when user clicks gets the number 5 on score
	$('#img3').click(function() {
		$('#img3').html(5);
	});

	//when user clicks gets the number 3 on score
	$('#img4').click(function() {
		$('#img4').html(3);
	});

});