var circle = document.getElementById("circle");
var up = document.getElementById("up");
var down = document.getElementById("down");

var rotateVal = circle.style.transform;
var rotateSum;

up.onclick = function() {
    rotateSum = rotateVal + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}
down.onclick = function() {
    rotateSum = rotateVal + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}
