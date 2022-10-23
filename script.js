var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
const color = "#";

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
	let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
	let hexColor = [];
	let hexColor1 = [];
	for (var i=0; i<6; i++)
	{
		hexColor.push(hex[Math.floor(Math.random() * hex.length)]);
		hexColor1.push(hex[Math.floor(Math.random() * hex.length)]);

	}
	color1.value = color + hexColor.join("");
	color2.value = color + hexColor1.join("");
	setGradient();
}


function fireFunctions(){
	randomColor();
}

	console.log(color1.value);
	console.log(color2.value);


color1.addEventListener("input", setGradient) ;

color2.addEventListener("input", setGradient);

button.addEventListener("click", fireFunctions);
	