const colors = ["#FDFBEA", "#DBE0E8", "#193E75"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
	console.log(document.body);
	// get random number between 0 - 3
	// green is 0, red is 1, rgba(133,122,200) is 2, and #F15025 is 3
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
})

function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
}