// images being used, first array is right facing open mouth and closed mouth, second array is left facing open mouth and closed mouth
const pacmanArray = [
	["images/PacMan1.png", "images/PacMan2.png"],
	["images/PacMan3.png", "images/Pacman4.png"],
];

// position starting point
var position = 0;
// direction 0 is right, 1 is left
var direction = 0;
// Focus changes open to closed mouth
var focus = 0;

// function to check if it has hit the page boundary
function checkPageBounds(direction, imgWidth) {
	// setting variable equal to the inner window width
	let pageWidth = window.innerWidth;
	// if the dirction is going right and the position (position is located top left of image) and img width are greater than page width, change direction
	if (direction == 0 && position + imgWidth >= pageWidth) direction = 1;
	// if the direction is going left and the position (again top left of image) is less than zero (page beginning), change direction
	if (direction == 1 && position <= 0) direction = 0;
	// return this
	return direction;
}

// the function moving the position and changing the image
function Run() {
	// call main image from DOM
	let img = document.getElementById("pacmanOpen");
	// setting image width for page boundary purposes
	let imgWidth = img.width;
	// focus has something to do with changing the image from open to close mouth: focus = (0 + 1) remainder 2, which = 1, a.k.a 1 cannot be divided by 2 therfore 1 is leftover - then (1+1) remainder 2 = 0 because 2 can be divded by 2 and then then nothing is leftover
	focus = (focus + 1) % 2;
	// checking the page boundary and then changing the dureciton
	direction = checkPageBounds(direction, imgWidth);
	// img.src checks direction, being 0 - right or 1 left, then checks focus, which changes every single function run
	img.src = pacmanArray[direction][focus];
	// if direction is true (direction = 1) move image left 20px
	if (direction) {
		position -= 20;
		img.style.left = position + "px";
	}
	// else move image right 20px
	else {
		position += 20;
		img.style.left = position + "px";
	}
	//run every 80 miliseconds
	setTimeout(Run, 80);
}

// other
console.log(window.innerWidth);
let img = document.getElementById("pacmanOpen");
let imgWidth = img.width;
console.log(imgWidth);

// move with keys
// window.addEventListener(
// 	"keydown",
// 	function (event) {
// 		if (event.defaultPrevented) {
// 			return; // Do nothing if the event was already processed
// 		}

// 		switch (event.key) {
// 			case "ArrowDown":
// 				position += 10;
// 				img.style.top = position + "px";
// 				break;
// 			case "ArrowUp":
// 				position -= 10;
// 				img.style.top = position + "px";
// 				break;
// 			case "ArrowLeft":
// 				position -= 20;
// 				img.style.left = position + "px";
// 				break;
// 			case "ArrowRight":
// 				position += 20;
// 				img.style.left = position + "px";
// 				break;
// 			default:
// 				return; // Quit when this doesn't handle the key event.
// 		}

// 		// Cancel the default action to avoid it being handled twice
// 		event.preventDefault();
// 	},
// 	true
// );
// // the last option dispatches the event to the listener first,
// // then dispatches event to window
