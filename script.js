var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}

function randomColor() {
	const color = "#";
	let red = 0;
	let blue = 0;
	let green = 0;
	red = Math.floor(Math.random() * 99);
	blue = Math.floor(Math.random() * 99);
	green = Math.floor(Math.random() * 99);
	color1.value = color + red + blue + green;
	setGradient();
}

function randomColor1() {
	const color = "#";
	let red = 0;
	let blue = 0;
	let green = 0;
	red = Math.floor(Math.random() * 99);
	blue = Math.floor(Math.random() * 99);
	green = Math.floor(Math.random() * 99);
	color2.value = color + red + blue + green;
	setGradient();
}

function fireFunctions(){
	randomColor();
	randomColor1();
}

	console.log(color1.value);
	console.log(color2.value);


color1.addEventListener("input", setGradient) ;

color2.addEventListener("input", setGradient);

button.addEventListener("click", fireFunctions);
	