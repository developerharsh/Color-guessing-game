var colors=generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickclr();
var colordis = document.getElementById("colordis");
var msg = document.querySelector("#message");
var h1=document.querySelector("h1");
var resbtn = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var no = 6;

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickclr();
	colordis.textContent = pickedColor;
	no = 3;
	for(var i=0; i<squares.length; i++)
	{	
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	} 
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	no = 6;
	for(var i=0; i<squares.length; i++)
	{	
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		
	} 
});

colordis.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{	
	//adding colors to square
	squares[i].style.backgroundColor = colors[i];

	//add click listener to the squares
	squares[i].addEventListener("click",function(){
		var clickedclr=this.style.backgroundColor;

		if (clickedclr === pickedColor) {
			msg.textContent = "Correct!!!";
			msg.style.color = "green";
			changeclr();
			h1.style.backgroundColor = pickedColor;
			resbtn.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			msg.textContent = "Try Again";
			msg.style.color = "red";
		}

	});
} 

resbtn.addEventListener("click",function(){
	msg.textContent = "";
	colors = generateRandomColors(no);
	pickedColor = pickclr();
	colordis.textContent = pickedColor;

	for(var i=0; i<squares.length; i++)
	{	
		squares[i].style.backgroundColor = colors[i];
	} 

	h1.style.backgroundColor = "steelblue";
	resbtn.textContent = "New Colors";
});

function changeclr(){
	for(var i=0; i<squares.length; i++)
	{	
	//adding colors to square
	squares[i].style.backgroundColor = pickedColor;
	} 
}

function pickclr(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}