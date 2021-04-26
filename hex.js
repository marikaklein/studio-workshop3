const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
	let hexColor = '#';
	for(let i = 0;i<6;i++){
		hexColor += hex[getRandomNumber()];
	// need "+=" to generate a string of values, just "=" would overide each value before it
	}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
	return Math.floor(Math.random() * hex.length);
}