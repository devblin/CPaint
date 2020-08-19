var penColor = "black";
var toolName = "pen";
var toW = document.getElementById("tow");
var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
var pX = 0;
var pY = 0;
var colors = document.querySelectorAll(".colors");
var tools = document.querySelectorAll(".tools");
var ctx = canvas.getContext("2d");

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeColor);
}
for (var i = 0; i < tools.length; i++) {
  tools[i].addEventListener("click", changeTool);
}

canvas.addEventListener("dblclick", function () {
  if (toolName == "clear") {
    clear();
  } else if (toolName == "fill") {
    fill(penColor);
  } else if (toolName == "clearall") {
    canvas.style.backgroundColor = "white";
    clear();
  }
});
canvas.addEventListener("mousedown", down);
function down() {
  canvas.addEventListener("mousemove", move);
  canvas.addEventListener("mouseup", up);
  function move(e) {
    pX = e.clientX - canvas.offsetLeft;
    pY = e.clientY - canvas.offsetTop;
    if (toolName == "pen") {
      draw(pX, pY, penColor, 2, 2);
    } else {
      draw(pX, pY, "white", 5, 5);
    }
  }
  function up() {
    canvas.removeEventListener("mousemove", move);
    canvas.removeEventListener("mouseup", up);
  }
}
function fill(color) {
  canvas.style.backgroundColor = color;
}
function draw(sX, sY, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(sX, sY, x, y);
}
function clear() {
  ctx.clearRect(0, 0, 600, 400);
}
function changeColor(e) {
  penColor = e.target.getAttribute("data-color");
  toW.style.color = penColor;
  e.target.style.fontColor = "green";
  if (penColor == "black") {
    toW.style.backgroundColor = "white";
  } else {
    toW.style.backgroundColor = "black";
  }
}
function changeTool(e) {
  toolName = e.target.getAttribute("id");
  for (var i = 0; i < tools.length; i++) {
    var typ = tools[i];
    if (typ.getAttribute("id") == toolName) {
      e.target.style.color = "greenyellow";
    } else {
      typ.style.color = "white";
    }
  }
}
