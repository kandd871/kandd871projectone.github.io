var text2 = document.querySelector(".text2")
var text3 = document.querySelector(".text3")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var footer = document.querySelector("footer")

function click1() {
text2.style.display = "block";
footer.style.position = "relative";
}

function click2() {
text3.style.display = "block";
}

one.addEventListener("click", click1);
two.addEventListener("click", click2);