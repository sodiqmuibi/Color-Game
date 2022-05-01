var numSquares=6;
var colors=[];
var pickedColor;
var squares= document.querySelectorAll(".squares");
var Display=document.getElementById("Display");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetBtn=document.getElementById("reset");
var easyBtn=document.getElementById("easy");
var hardBtn=document.getElementById("hard");
var modeBtn=document.querySelectorAll(".mode");

init();

resetBtn.addEventListener("click", function() {
	reset();
});

function init() {
	setUpModeBtn();
	setUpSquares();
	reset();
}

function setUpModeBtn() {
	for (var i=0; i<modeBtn.length; i++) {
	modeBtn[i].addEventListener("click", function() {
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"? numSquares=3: numSquares=6;
		reset();

	});
}
}

function setUpSquares() {
	for (i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor=this.style.background;
		if (clickedColor === pickedColor) {
			Display.textContent="Correct";
			changeColor(clickedColor);
			h1.style.background=pickedColor;
			resetBtn.textContent="Play again?";
		}
		else {
			this.style.background="#232323";
			Display.textContent="Try again!";
		}
	});
}
}

function reset() {
	colors=RandomColors(numSquares);
	pickedColor=randomPick();
	message.textContent=pickedColor;
	resetBtn.textContent="New Colors";
	for (i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.background=colors[i];			
		}
		else {
			squares[i].style.background=colors[i];
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
	Display.textContent="";
}

function changeColor(color) {
	for (i=0; i<squares.length; i++) {
		squares[i].style.background=color;
	}
}

function randomPick() {
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function RandomColors(Num) {
	var arr=[];
	for (i=0; i<Num; i++) {
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var rand="rgb(" + r + ", " + g + ", " + b + ")";
		arr.push(rand);
	}
	return arr;
}


