var audio = document.getElementById("audio");
var pp = document.getElementById("pp")

function shake(){
     audio.play();
     pp.style.animation = "shake 0.5s forwards";

}

window.addEventListener("click", shake)