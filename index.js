const audio = new Audio('Rex.m4a');

const btn = document.querySelector("button");

btn.addEventListener("click", function(){
	audio.play();
	
	btn.addEventListener("dblclick", function(){
	audio.pause();
	
	
});
	
});

