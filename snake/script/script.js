var count=0;
window.addEventListener("mousemove", function(event){
	var snake = document.createElement("div");
	snake.setAttribute("class","ball");
	document.body.appendChild(snake)
	var mouseX=event.clientX;
	var mouseY=event.clientY;
	snake.style.top=mouseY+"px"
	snake.style.left=mouseX+"px"
	if(count>25){
		var snakes=document.querySelectorAll(".ball")
		document.body.removeChild(snakes[0])
		
	}
	count++
	

})

