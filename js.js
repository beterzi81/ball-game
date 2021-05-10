//Canvas düzenlemeleri
const cvs= document.getElementById('oyuncanvas');
const ctx = cvs.getContext('2d'); 
cvs.width=1150;
cvs.height=600;


const bg = new Image();
bg.src = 'gorseller/bg.png';

const startbut = new Image();
startbut.src = 'gorseller/start-button.png';

const scorebut = new Image();
scorebut.src = 'gorseller/high-scores-button.png';

const soundbut = new Image();
soundbut.src = 'gorseller/sound-button.png';

const isim = new Image();
isim.src = 'gorseller/isim.png';


const keys=[];

// function draw(){
//   ctx.clearRect(0, 0, 1150, 600);
//   ctx.drawImage(bg, 0, 0,1150,600);
//   ctx.drawImage(startbut, 520,200,108,103);
//   ctx.drawImage(scorebut, 448,240,72,69);
//   ctx.drawImage(soundbut, 638,240,72,69);
//   ctx.drawImage(isim, 350,50);
//   requestAnimationFrame(draw);
// }

// draw();

const player={
  x:548,
  y:491,
  width: 48,
  height: 62,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false
};


const playbg = new Image();
playbg.src = 'gorseller/bg-play.png';

const charSprite = new Image();
charSprite.src = 'karakter/sprite-char.png';

function drawSprite (img,sX,sY,sW,sH,dX,dY,dW,dH){
  ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
};

// function animate(){
  // ctx.clearRect(0,0,cvs.width,cvs.height);
  // ctx.drawImage(playbg,0,0,cvs.width,cvs.height);
  // drawSprite(charSprite,player.width * player.frameX,player.height * player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);
  // movePlayer();
  // handlePlayerFrame();
//   requestAnimationFrame(animate);
// };

// animate();

setInterval(function(){
  ctx.clearRect(0,0,cvs.width,cvs.height);
  ctx.drawImage(playbg,0,0,cvs.width,cvs.height);
  drawSprite(charSprite,player.width * player.frameX,player.height * player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);
  movePlayer();
  handlePlayerFrame();
},60)

window.addEventListener("keydown" , function(e){
  keys[e.keyCode] = true;
  player.moving = true;
  // console.log(keys);
});
window.addEventListener("keyup" , function(e){
  delete keys[e.keyCode];
  player.moving=false;
  
});

function movePlayer(){
  if (keys[65] && player.x > 0){
    player.x -= player.speed;
    player.frameY=2;
    player.moving = true;
  }
  if (keys[68] && player.x < cvs.width - player.width ){
    player.x += player.speed;
    player.frameY=1;
    player.moving = true;
  }
}

function handlePlayerFrame (){
  if(player.frameX < 3 && player.moving) {
    player.frameX++;
  }
  else if (player.frameX < 3 && (player.moving==false)){
    player.frameY=0;
  }
  else {
    player.frameX=0;
}
}

let fps, fpsInterval , startTime, now , then , elapsed;

function startAnimating(fps){
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  now=Date.now();
  elapsed = now - then ;
  if (elapsed > fpsInterval) {
    then= now - (elapsed % fpsInterval);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    ctx.drawImage(playbg,0,0,cvs.width,cvs.height);
    drawSprite(charSprite,player.width * player.frameX,player.height * player.frameY,player.width,player.height,player.x,player.y,player.width,player.height);
    movePlayer();
    handlePlayerFrame();
  }
}

startAnimating(20);