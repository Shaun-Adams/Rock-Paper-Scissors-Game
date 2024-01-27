//variables 
var userScore=0;
var computerScore=0;
var userScore_span= document.getElementById('user-score');
var computerScore_span= document.getElementById('computer-score');
var scoreBoard_div = document.querySelector(".score-board");
var result_p= document.querySelector(".result > p");

//constant variables
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

//getComputerChoice function that gets the computers choice
function getComputerChoice(){
	//constant variables 
	const choices = ['Rock', 'Paper', 'Scissors']; //storing options in an array
	const randomNumber = Math.floor(Math.random()*3); //using the maths class to round up to nearest whole number and output random numbers (0-2)
	return choices[randomNumber]; //returns the choice stored in the array
}

//win function that takes in 2 parameters userChoice and computerChoice
function win(userChoice, computerChoice){
	//constant variables
	//setting font size to  and placing word as a subscript 
	const userWord = "user".fontsize(3).sub();
	const compWord = "comp".fontsize(3).sub();

	userScore++; //increment user score by 1
	userScore_span.innerHTML = userScore; //sets the score board to user score number

	result_p.innerHTML = `${userChoice}${userWord}  beats  ${computerChoice}${compWord}. You WIN!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300)
}


//lose function that takes in 2 parameters userChoice and computerChoice
function lose(userChoice, computerChoice){
	//constant variables
	//setting font size to  and placing word as a subscript  
	const userWord = "user".fontsize(3).sub();
	const compWord = "comp".fontsize(3).sub();

	computerScore++; //increment computer score by 1
	computerScore_span.innerHTML = computerScore; 	//sets the score board to computer score number

	result_p.innerHTML = `${userChoice}${userWord}  lose  ${computerChoice}${compWord}. You LOSE!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300)

}

//draw function that takes in 2 parameters userChoice and computerChoice
function draw(userChoice, computerChoice){
	//constant variables
	//setting font size to  and placing word as a subscript  
	const userWord = "user".fontsize(3).sub();
	const compWord = "comp".fontsize(3).sub();

	result_p.innerHTML = `${userChoice}${userWord}  draw  ${computerChoice}${compWord}. You DRAW!`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300)

}

//gmae function with perameter of user choice (rock/paper/scissors)
function game(userChoice){
	//constant variable 
	const computerChoice = getComputerChoice();
	
	/*
	switch method instead of if-else-statements that compares userChoice to computerChoice
	and outputs win, lose or draw
	*/ 
	switch(userChoice + computerChoice){
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice); //Calling win function
			break;

		case "ScissorsRock":
		case "RockPaper":
		case "PaperScissors":
			lose(userChoice, computerChoice); //Calling draw function
			break;


		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice); //Calling draw function
			break;		
	}
}

//main function to execute the game
function main(){
	//addEventListener that waits until rock, paper or scissors is clicked to execute the game function
	rock_div.addEventListener('click', function(){
		game("Rock") //Calling game function
	})
	paper_div.addEventListener('click', function(){
		game("Paper")	//Calling game function
	})
	scissors_div.addEventListener('click', function(){
		game("Scissors")	//Calling game function
	})
}

//Calling the main function
main();

