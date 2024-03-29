let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice () {
	const choices = ['r','p','s'];
	const randomNumber=(Math.floor(Math.random()*3)); //[0-2] index number choose
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === 'r') return "Rock";
	if(letter === 'p') return "Paper";
	if(letter === 's') return "Scissor";
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML= userScore;
	computerScore_span.innerHTML= computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}... You win!🔥` ;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'),400);	
}


function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML= userScore;
	computerScore_span.innerHTML= computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} losses to ${convertToWord(computerChoice)} ${smallCompWord}... You lose!💩`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'),400);
}

function draw(userChoice, computerChoice){
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML= computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallCompWord}... You draw!😀`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(() => userChoice_div.classList.remove('grey-glow'),400);
}

function game (userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;

		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
}

function main(){
rock_div.addEventListener('click',() => game("r"))

paper_div.addEventListener('click',() => game("p"))

scissors_div.addEventListener('click',() => game("s"))
}

main();