// Plan and Create Project by Gavin - Bullets challenge ULTRA

// Setup Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 800;

// Global Varibles
let tankBlue = document.getElementById("tankBlue");
let tankRed = document.getElementById("tankRed");
let speed = 10;
let mouseX;
let mouseY;

// Objects on Map

// Player Position
let player = {
  x: 600,
  y: 400,
  rotation: 0,
};

// Barrel Position
let barrel = {};

// Create Object to Store Pressed Key Data
let keyPressed = {};

// Key Event Listeners
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// Create Functions To Store Kep Pressed Data In Object
function keyDownHandler(event) {
  keyPressed[event.code] = true;
}

function keyUpHandler(event) {
  keyPressed[event.code] = false;
}

// Call Draw Function
window.addEventListener("load", draw);

function draw() {
  // Clear Canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Logic
  // Rotate Tank To Cursor
  player.rotation = Math.atan2(mouseX - player.x, -(mouseY - player.y));

  // Stop Player on Contact With Wall
  if (map.y > player.y - 35) {
    keyPressed.KeyW = false;
  }
  if (map.y + 2200 < player.y + 35) {
    keyPressed.KeyS = false;
  }
  if (map.x > player.x - 35) {
    keyPressed.KeyA = false;
  }
  if (map.x + 2500 < player.x + 35) {
    keyPressed.KeyD = false;
  }

  // Move Map to Simulate Player Movement
  if (keyPressed["KeyW"]) {
    map.y += speed;
    borderTop.y += speed;
    borderLeft.y += speed;
    borderBottom.y += speed;
    borderRight.y += speed;
    edgeTop.y += speed;
    edgeLeft.y += speed;
    edgeBottom.y += speed;
    edgeRight.y += speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].y1 += speed;
      vertLines[i].y2 += speed;
    }
  }
  if (keyPressed["KeyA"]) {
    map.x += speed;
    borderTop.x += speed;
    borderLeft.x += speed;
    borderBottom.x += speed;
    borderRight.x += speed;
    edgeTop.x += speed;
    edgeLeft.x += speed;
    edgeBottom.x += speed;
    edgeRight.x += speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].x1 += speed;
      vertLines[i].x2 += speed;
    }
  }
  if (keyPressed["KeyS"]) {
    map.y += -speed;
    borderTop.y += -speed;
    borderLeft.y += -speed;
    borderBottom.y += -speed;
    borderRight.y += -speed;
    edgeTop.y += -speed;
    edgeLeft.y += -speed;
    edgeBottom.y += -speed;
    edgeRight.y += -speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].y1 += -speed;
      vertLines[i].y2 += -speed;
    }
  }
  if (keyPressed["KeyD"]) {
    map.x += -speed;
    borderTop.x += -speed;
    borderLeft.x += -speed;
    borderBottom.x += -speed;
    borderRight.x += -speed;
    edgeTop.x += -speed;
    edgeLeft.x += -speed;
    edgeBottom.x += -speed;
    edgeRight.x += -speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].x1 += -speed;
      vertLines[i].x2 += -speed;
    }
  }

  // Drawing

  // Draw Grid Lines
  // Vertical
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(105, 105, 105, 0.6)";
  for (i = 0; i < vertLines.length; i++) {
    ctx.beginPath();
    ctx.moveTo(vertLines[i].x1, vertLines[i].y1);
    ctx.lineTo(vertLines[i].x2, vertLines[i].y2);
    ctx.stroke();
  }

  // Draw Out of Bounds
  ctx.fillStyle = "rgba(90, 90, 90, 0.7)";
  ctx.fillRect(borderTop.x, borderTop.y, 3700, 500);
  ctx.fillRect(borderLeft.x, borderLeft.y, 600, 2200);
  ctx.fillRect(borderBottom.x, borderBottom.y, 3700, 500);
  ctx.fillRect(borderRight.x, borderRight.y, 600, 2200);

  ctx.fillStyle = "rgba(110, 110, 110, 0.3)";
  ctx.fillRect(edgeTop.x, edgeTop.y, 2500, 125);
  ctx.fillRect(edgeLeft.x, edgeLeft.y, 125, 1950);
  ctx.fillRect(edgeBottom.x, edgeBottom.y, 2500, 125);
  ctx.fillRect(edgeRight.x, edgeRight.y, 125, 1950);

  // Draw Map Borders
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 4;
  ctx.strokeRect(map.x, map.y, 2500, 2200);

  // Draw Player
  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.rotate(player.rotation);
  ctx.drawImage(tankBlue, -player.x + 600, -player.y + 400, 150, 160);
  ctx.restore();

  // Request Another Animation Frame
  requestAnimationFrame(draw);
}

// Mouse Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}
