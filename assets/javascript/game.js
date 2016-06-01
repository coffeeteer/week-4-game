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
	
	// initializing the custom data attributes
	// we will use them again and again
	// we could also make 2 variable to maintain this info
	// Actually that is far easier
	var win = 0;
	var loss = 0;
	var cpuRandNumber;
	function initializeRandomNumbers(){
    	var captureNums = genRandNumCrystals(); 
    	console.log(captureNums);
    	console.log(getRandNum);
    	cpuRandNumber = getRandNum();
    	var randNumberCrystals =  
    	// random number displayed
    	$('#numBeat').html(cpuRandNumber);
    	var crytals = $('.crys_img');
    	console.log(crytals);
    
        //var total = 0;	
    	for(var i = 0; i < crytals.length; i++){
    		var element = crytals[i];
    		$(element).attr("data-myRandomNumber", captureNums[i]);
    		// <img src="assets/images/crystal-img.png" id="img1" class="crys_img">
    		// changes to 
    		// <img src="assets/images/crystal-img.png" data-myRandomNumber="23" id="img1" class="crys_img">
    		//saw that !!
    		console.log(crytals[i]);
    	}
	}
	
	initializeRandomNumbers();

	var total = 0;

	console.log('total', total);
	$('.crys_img').on('click', function(){ 
//		console.log('str')
		// we have to be consistant with our code, right !
		var playerNumber = parseInt($(this).attr("data-myRandomNumber"));
		console.log('playerNumber', playerNumber);
		total += playerNumber;
		console.log('total', total);
		console.log($(this).attr("value"));
		$('#pNumber').html(total);
		if(total == cpuRandNumber){
		    // the total is equal to cpuRandNumber
		    // yeyee we have a winner
		    alert("winner");
		    win++;
		    $("#win").html("Wins : " + win);
		    total = 0;
		    $('#pNumber').html(0);
		    initializeRandomNumbers();
		    alert("You win");
		}else if(total > cpuRandNumber){
		    // total got beyond cpuRandNumber
		    // we lose
		    // whoops , dodged a bullet
		    loss++;
		    $("#loss").html("Loss : " + loss);
		    total = 0;
		    $('#pNumber').html(0);
		    initializeRandomNumbers();
		    alert("You lose");
		}

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