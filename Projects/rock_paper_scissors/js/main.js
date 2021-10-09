let computerScore=0,
	humanScore=0;

document.getElementById("rock").onclick = playerThrowsRock;
document.getElementById("paper").onclick = playerThrowsPaper;
document.getElementById("scissors").onclick = playerThrowsScissors;

function playerThrowsRock(){
	let computerChoice = randomComputerChoice();
	getResults(computerChoice,"rock");
	console.log("rock")
}
function playerThrowsScissors(){
	let computerChoice = randomComputerChoice();
	getResults(computerChoice,"scissors");
	console.log("scissors")
}
function playerThrowsPaper(){
	let computerChoice = randomComputerChoice();
	getResults(computerChoice,"paper");
	console.log("paper")
}
function randomComputerChoice(){
	let randomNumber = (Math.random() * 3);
	let computerChoice="rock";
	if(randomNumber<.33){
		computerChoice="scissors";
	}
	else if(randomNumber<.6666){
		computerChoice="paper";
	}
	return computerChoice;
}
function getResults(computerChoice,humanChoice){
	if(computerChoice == humanChoice){
		displayCompleteMessage("Tie!");
	}
	else if(
		(computerChoice=="scissors" && humanChoice=="paper") ||
		(computerChoice=="paper" && humanChoice=="rock") ||
		(computerChoice=="rock" && humanChoice=="scissors")
		){
		increasecomputerScore();
	}
	else{
		increasehumanScore();
	}
}
function increasecomputerScore(){
	computerScore+=1;
	document.getElementById("computerScore").innerHTML=computerScore;
	displayCompleteMessage("Sorry, you lose");
}
function increasehumanScore(){
	humanScore+=1;
	document.getElementById("humanScore").innerHTML=humanScore;
	displayCompleteMessage("Winner!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}