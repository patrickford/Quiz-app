$(document).ready(function(){

// Global declaration of Variables
var indexCheck = 0;
var score = 0;

// Array for all elements and Objects	

var questions = [
	{
		number: 1,
	 	question:  "What continent is Germany on?",
	 	answers:["North America","Europe","Asia","Africa"],
	 	correctAnswer: 1,
	 	replyRight: "CORRECT!",
	 	replyWrong: "INCORRECT!",
	},
	{
		number: 2,
		question:  "What continent is Egypt on?",
	 	answers:["North America","Europe","Asia","Africa"],
	 	correctAnswer: 3,
	 	replyRight: "CORRECT!",
	 	replyWrong: "INCORRECT!",
	}
];
	
	//Start Quiz

	$('.startbutton').on('click', function(){
		$('.intro').hide();
		$('.question').show();		 
	});

	//Submit Answers

	$('.question button').on('click', function(){
		console.log(this);
	});

	$('.submitbutton').on('click', function(){
		checkAnswer();		 
	});

	//Generate New Question

	$('.genbutton').on('click', function(){
		$('.genbutton').hide();
		$('.submitbutton').show();
		questionGenerate();
	});

	//Start New Game
	$('.gamebutton').on('click', function(){
		newGame();
		questionGenerate();

	}); 

	//Show Final Score
	$('.scorebutton').on('click', function(){
		checkAnswer();	
	}); 


// Check Answers

	function checkAnswer(){

		if(indexCheck == 10) {
		
			$('.feedback').text( + score + " OF 10 QUESTIONS CORRECT!");
			$('.scorebutton').hide();
			$('.genbutton').hide();
			$('.gamebutton').show();
			playOvation();
			return;
		}

	}
});		
		