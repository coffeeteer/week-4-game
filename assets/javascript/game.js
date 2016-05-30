$(document).ready(function() {
	// create random number between 50 & 93
	function getRandNum(){
		return Math.floor(Math.random() * (120 - 13) + 13);
	}
	function genRandNumCrystals(){
		var randCrystals = [];
		var imgLength = $('.crys_img').length; 
		for(var i = 0; i < imgLength; i++){
			var mathRand = Math.floor(Math.random() * (50 - 1) + 1);
			randCrystals.push(mathRand);

		}
		console.log(randCrystals);
		return randCrystals;
	}
	var captureNums = genRandNumCrystals(); 
	console.log(captureNums);
	console.log(getRandNum);
	var cpuRandNumber = getRandNum();
	var randNumberCrystals =  
	// random number displayed
	$('#numBeat').html(cpuRandNumber);
	var crytals = $('.crys_img');
	console.log(crytals);
	
	for(var i = 0; i < crytals.length; i++){
		var element = crytals[i];
		$(element).attr("value", captureNums[i]);
		console.log(crytals[i]);
	}

	var total = 0;

	console.log('total', total);
	$('.crys_img').on('click', function(){ 
//		console.log('str')
		
		var playerNumber = parseInt($(this).attr("value"));
		console.log('playerNumber', playerNumber);
		total += playerNumber;
		console.log('total', total);
		console.log($(this).attr("value"));
		$('#pNumber').html(total);

	});


	//when user clicks gets the number 10 on score
	// $('#img1').click(function() {
	// 	$('#img1').html(10);
	// 	console.log("#img1");
	// });

	// //when user clicks gets the number 20 on score
	// $('#img2').click(function() {
	// 	$('#img2').html(20);
	// 	console.log('#img2');
	// });

	// //when user clicks gets the number 5 on score
	// $('#img3').click(function() {
	// 	$('#img3').html(5);
	// 	console.log('#img3');
	// });

	// //when user clicks gets the number 3 on score
	// $('#img4').click(function() {
	// 	$('#img4').html(3);
	// 	console.log('#img4');
	// });



});