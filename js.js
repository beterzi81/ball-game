//Canvas düzenlemeleri
const cvs = document.getElementById("oyuncanvas");
const ctx = cvs.getContext("2d");
cvs.width = 1150;
cvs.height = 600;

const bg = new Image();
bg.src = "gorseller/bg.png";

const startbut = new Image();
startbut.src = "gorseller/start-button.png";

const scorebut = new Image();
scorebut.src = "gorseller/high-scores-button.png";

const soundbut = new Image();
soundbut.src = "gorseller/sound-button.png";

const isim = new Image();
isim.src = "gorseller/isim.png";

const arr = new Image();
arr.src = "gorseller/ok.png";

const playbg = new Image();
playbg.src = "gorseller/bg-play.png";

const charSprite = new Image();
charSprite.src = "karakter/sprite-char2.png";

const redball1 = new Image();
redball1.src = "gorseller/ball1.png"
const redball2 = new Image();
redball2.src = "gorseller/ball2.png"
const redball3 = new Image();
redball3.src = "gorseller/ball3.png"
const redball4 = new Image();
redball4.src = "gorseller/ball4.png"

let redballs = [redball1,redball2,redball3,redball4];

const blueball1 = new Image();
blueball1.src = "gorseller/ball5.png"
const blueball2 = new Image();
blueball2.src = "gorseller/ball6.png"
const blueball3 = new Image();
blueball3.src = "gorseller/ball7.png"
const blueball4 = new Image();
blueball4.src = "gorseller/ball8.png"

let blueballs = [blueball1,blueball2,blueball3,blueball4];
let ballChooser = 0;
let keys = [];
let score=0;
let baloon1;
let baloon2;
let controller = 0;
let basla= 0;
let ctr = 0;

const mouse = {
  clicked: false,
  x: 10,
  y: 10,
  width: 0.25,
  height: 0.25,
}

function collision(first, second) {
  if (!(first.x > second.x + second.width || 
    first.x + first.width < second.x ||
    first.y > second.y + second.height ||
    first.y + first.height < second.y
  )
   ) {
    return true;
  };
};

cvs.addEventListener('mousedown', function () {
  mouse.clicked = true;
});

cvs.addEventListener('mouseup', function () {
  mouse.clicked = false;
});

let canvasposition = cvs.getBoundingClientRect();
cvs.addEventListener('mousemove', function (e) {
  mouse.x = e.x - canvasposition.left;
  mouse.y = e.y - canvasposition.top;
});

cvs.addEventListener('mouseleave', function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

let player = {
  x: 548,
  y: 491,
  width: 48,
  height: 62,
  frameX: 0,
  frameY: 0,
  speed: 5,
  moving: false,
};

let arrow = {
  x: player.x + 20,
  y: player.y +15,
  width: 10,
  height: 32,
  speed: 10,
  moving: false,
  showing: false,
};

const button={
  x: 520,
  y: 200,
  width: 108,
  height: 103,
}

function start(){
  if (collision(mouse,button) && mouse.clicked) {
    basla=1;

  }
  ctx.drawImage(startbut,button.x,button.y,button.width,button.height);
}

function mainMenu(){
    if (basla ==1) {
      basla=0;
      bouncingBalls(baloon1,redballs);
    }
    else{
      ctx.clearRect(0,0,cvs.width,cvs.height);
      ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
      ctx.drawImage(isim, 350, 75, 460, 240);
      requestAnimationFrame(mainMenu);
    }
start();
}
mainMenu();

function bouncingBalls(ball,ballColor){
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  ball = {
    //starting positions
    x: Math.floor(Math.random() * 800) + 200, 
    y: 50,
    //sizes - r is radius of ball
    sizenum: 0,
    width: 87,
    height: 87,
    //speed - these will be 
    xv: 6,
    yv: 6,
    moving: true,
  }
  
  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }
  
  function arrowAnimate() {
    if (arrow.showing) {
      drawSprite(
        arr,
        0,
        0,
        arrow.width,
        arrow.height,
        arrow.x,
        arrow.y,
        arrow.width,
        arrow.height
      );
  
      if (arrow.y > -15 && arrow.moving == true) {
        arrow.y -= arrow.speed;
      } else {
        arrow.y = player.y + 1;
        arrow.x = player.x + 20;
        arrow.moving = false;
        arrow.showing = false;
      }
      requestAnimationFrame(arrowAnimate);
    } 
  }
  
  setInterval(function(){
    if(!arrow.showing){
      arrow.x = player.x + 20;
    }
  },1)//her saniye arrow.showing doğru mu diye bakıyor eğer yanlışsa eşitliyor.
  
  setInterval(function () {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.drawImage(playbg, 0, 0, cvs.width, cvs.height);
    drawSprite(
      charSprite,
      player.width * player.frameX,
      player.height * player.frameY,
      player.width,
      player.height,
      player.x,
      player.y,
      player.width,
      player.height
    );
  
    movePlayer();
  
    handlePlayerFrame();
  }, 60);
  
  window.addEventListener("keydown", function (e) {
    
    
    if (e.keyCode == 32) {
      if(!arrow.showing){
        //Hızlanmayı çözen yer
      arrow.moving = true;
      arrow.showing = true;
      arrowAnimate();
      console.log("burdayım");
    }} else {
      keys[e.keyCode] = true;
      player.moving = true;
    }
    // console.log(keys);
  });
  window.addEventListener("keyup", function (e) {
    let keycode = e.keyCode;
    if (e.keyCode == 32) {
    } else {
      delete keys[keycode];
      player.moving = false;
    }
  });
  window.addEventListener("keydown", function (e) {
    let keycode = e.keyCode;
    if (e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });
  
  function moveArrow() {
    if (arrow.y > -15 && arrow.moving == true) {
      arrow.y -= arrow.speed;
    } else {
      arrow.y = player.y + 1;
      arrow.moving = false;
    }
  }
  
  function movePlayer() {
    if (keys[65] && player.x > 0) {
      player.x -= player.speed;
      player.frameY = 2;
      player.moving = true;
    }
    if (keys[68] && player.x < cvs.width - player.width) {
      player.x += player.speed;
      player.frameY = 1;
      player.moving = true;
    }
  }
  
  function handlePlayerFrame() {//Animasyonun adımlarını çizdiriyor
    if (player.frameX < 3 && player.moving) {
      player.frameX++;
    } else if (player.frameX < 3 && player.moving == false) {
      player.frameY = 0;
    } else {
      player.frameX = 0;
    }
  }
  
  let fps, fpsInterval, startTime, now, then, elapsed;
  
  function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
    updateBall();
  }
  
  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      // if (ballChooser == 0) { 
        
      //   }
      
     ctx.clearRect(0, 0, cvs.width, cvs.height);
      
      ctx.drawImage(playbg, 0, 0, cvs.width, cvs.height);
      
      drawBall();
      drawSprite(
        charSprite,
        player.width * player.frameX,
        player.height * player.frameY,
        player.width,
        player.height,
        player.x,
        player.y,
        player.width,
        player.height
      );
      
      movePlayer();
      handlePlayerFrame();
      
    }
  }
  
  if (Math.floor(Math.random() *2) == 0) {
    ball.xv=-ball.xv;
    console.log("sa");
  }
  
  function updateBall(){
    if (!(ball.sizenum<4)) {
      ball.moving=false;
    }
    //move the ball
    if (ball.moving) {
      ball.x +=ball.xv;
    ball.y+=ball.yv;
    }
    else {
      ball.x = -5;
      ball.y = -5;
    }
    
  
    //bounce ball
    if (ball.sizenum == 1) {
      ball.width=63;
      ball.height=63;
    }
    if (ball.sizenum == 2) {
      ball.width=31;
      ball.height=31;
    }
    if (ball.sizenum == 3) {
      ball.width=19;
      ball.height=19;
    }
    if (ball.x - 5 <0 && ball.xv < 0) {
      ball.xv = -ball.xv;
    }
  
    if (ball.x + ball.width > cvs.width && ball.xv > 0 ) {
      ball.xv = -ball.xv;
    }
  
    if (ball.y < 0 && ball.yv <0) {
      ball.yv = - ball.yv;
    }
  
    if (ball.y > 550-ball.height && ball.yv >0) {
      ball.yv = - ball.yv;
    }
   
   
    //drawing ball
    
    
  }
  
  
  function drawBall(){
   
      drawSprite(ballColor[ball.sizenum],0,0,ball.width,ball.height,ball.x,ball.y,ball.width,ball.height);
     
   
  }
  

  
    function collisionPlayer(first, second) {
      if (!(first.x > second.x + second.width - 30 || 
        first.x + first.width < second.x +18 ||
        first.y > second.y + second.height  ||
        first.y + first.height < second.y  +2
      )
       ) {
        return true;
      };
    };
  
  function coll(){
  
    if (collision(ball,arrow) && ball.sizenum < 4 && arrow.moving == true) {
      ball.sizenum++;
      score+=15;
      
      drawBall();
      arrow.y = player.y + 3;
        arrow.x = player.x + 24;
        arrow.moving = false;
        arrow.showing = false;
    }
    else if (score == 60 && controller == 0) {
      bouncingBalls(baloon2,blueballs);
      controller++;
    }
    else if (score == 120 ) {
      if (ctr==0) {
        alert("Kazandınız!\nLütfen Sayfayı Yenileyiniz!\nSkorunuz: " + score);

        ctr++;
      }
    }
  
    if (collisionPlayer(ball, player) ) {
      if (ctr==0) {
        alert("Öldünüz\nLütfen Sayfayı Yenileyiniz!\nSkorunuz: " + score);

        ctr++;
      }


    }
  
  }
  
  setInterval(coll,1000/60);
  
  setInterval(updateBall, 1000/60);
  
  startAnimating(60);
  
}

// bouncingBalls(baloon1,redballs);


