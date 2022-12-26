let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
flipY(c);

//sky
c.fillStyle = "#dcf7ff";
c.fillRect(0, 0, canvas.width, canvas.height);

//grass
c.fillStyle = "#5eba7d";
c.fillRect(0, 0, 600, 50);

//walkway
c.fillStyle = "#f1f2f3";
c.fillRect(328, 0, 26, 50);

//sun
c.fillStyle = "#fff6a2";
c.strokeStyle = "#fff6a2";
c.beginPath();
c.arc(90, 325, 50, 0, 2 * Math.PI);
c.stroke();
c.fill();
c.closePath();

drawClouds();
drawHouse();
//for loops for creating trees
for (let x = 1; x < 6; x++) {
  drawTrees(c, -60 + x * 55, 50, 90, 20, 30);
}
for (let x = 1; x < 5; x++) {
  drawTrees(c, -30 + x * 52.5, 40, 65, 20, 30);
}
for (let x = 1; x < 6; x++) {
  drawTrees(c, 380 + x * 55, 50, 90, 20, 30);
}
for (let x = 1; x < 5; x++) {
  drawTrees(c, 410 + x * 52.5, 40, 65, 20, 30);
}

//caption, have to flip canvas again for this
flipY(c);
c.font = "25px Sans-serif";
c.fillStyle = "black";
c.fillText("Just a Small House", 10, 30);

function drawTrees(c, x, y, height, width, radius) {
  c.fillStyle = "#cd8a5f";
  c.strokeRect(x, y, width, height);
  c.fillRect(x, y, width, height);
  // green part of tree
  c.fillStyle = "#93ce50";
  c.beginPath();
  c.arc(x + width / 2, y + height * 1.25, radius, 0, Math.PI * 2);
  c.stroke();
  c.fill();
  c.closePath();
}

function drawHouse() {
  c.strokeStyle = "black";
  c.fillStyle = "#f7de9b";
  c.beginPath();
  c.strokeRect(275, 50, 130, 90);
  c.fillRect(275, 50, 130, 90);
  c.closePath();
  c.fill();

  //roof
  c.fillStyle = "#c94e34";
  c.strokeRect(375, 145, 25, 50);
  c.fillRect(375, 145, 25, 50);
  c.moveTo(265, 141.2);
  c.lineTo(415, 141.2);
  c.lineTo(340, 210);
  c.lineTo(265, 141.2);
  c.stroke();
  c.fill();
  c.closePath();

  //windows
  c.fillStyle = "#f5f5f5";
  c.beginPath();
  c.strokeRect(290, 100, 25, 25);
  c.fillRect(290, 100, 25, 25);
  c.strokeRect(365, 100, 25, 25);
  c.fillRect(365, 100, 25, 25);
  c.closePath();

  // window +
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(290, 112.5);
  c.lineTo(315, 112.5);
  c.stroke();
  c.moveTo(302.5, 100);
  c.lineTo(302.5, 125);
  c.stroke();

  //second window +
  //realizing i could've made this much simpler and wouldn't have to calculate...
  c.moveTo(365, 112.5);
  c.lineTo(390, 112.5);
  c.stroke();
  c.moveTo(377.5, 100);
  c.lineTo(377.5, 125);
  c.stroke();
  c.closePath();

  //door
  c.fillStyle = "#90511b";
  c.beginPath();
  c.strokeRect(328, 50, 25, 40);
  c.fillRect(328, 50, 25, 40);
  c.closePath();

  //doorknob
  c.fillStyle = "#d9af14";
  c.beginPath();
  c.arc(348, 70, 3, 0, 2 * Math.PI);
  c.fill();
  c.closePath();
}

function drawClouds() {
  c.fillStyle = "#ffffff";

  c.beginPath();
  c.arc(0, 200, 30, 0, Math.PI * 2);
  c.arc(40, 200, 50, 0, Math.PI * 2);
  c.arc(80, 200, 40, 0, Math.PI * 2);
  c.arc(100, 200, 30, 0, Math.PI * 2);
  c.fill();

  c.beginPath();
  c.arc(160, 300, 30, 0, Math.PI * 2);
  c.arc(200, 300, 50, 0, Math.PI * 2);
  c.arc(240, 300, 40, 0, Math.PI * 2);
  c.arc(260, 300, 30, 0, Math.PI * 2);
  c.fill();

  c.beginPath();
  c.arc(360, 200, 30, 0, Math.PI * 2);
  c.arc(400, 200, 50, 0, Math.PI * 2);
  c.arc(440, 200, 40, 0, Math.PI * 2);
  c.arc(460, 200, 30, 0, Math.PI * 2);
  c.fill();

  c.beginPath();
  c.arc(500, 325, 30, 0, Math.PI * 2);
  c.arc(540, 325, 50, 0, Math.PI * 2);
  c.arc(580, 325, 40, 0, Math.PI * 2);
  c.arc(700, 325, 30, 0, Math.PI * 2);
  c.fill();
}

// flipY moves the origin and flips the Y axis, so the coordinate system
// is more familiar, with the origin (0,0) in the lower left corner
function flipY(c) {
  var canvas = c.canvas;
  var w = canvas.clientWidth;
  var h = canvas.clientHeight;
  c.translate(0, h);
  c.scale(1, -1);
}
