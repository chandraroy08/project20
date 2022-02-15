var desert , ground
var paddle , stick
var camel , player
var base
var gameover,over
var again,restart
var score = 0
var play
var gameState = play
var END=0
function preload(){
ground=loadImage("desert.jpg")
stick=loadImage("log.png")
player=loadImage("camel.jpg")
over=loadImage("over clip.png")
restart=loadImage("restart.jpg")
coinImg=loadImage("coin.png")
}

function setup() {
 createCanvas(600,600)
desert = createSprite(300,300,600,600)
desert.addImage(ground)
//desert.velocityX=-1
camel = createSprite(50,350)
camel.addImage(player)
camel.scale=0.05
base = createSprite(300,580,600,10)
base.visible=false
gameover = createSprite(300,300)
gameover.scale=0.5
gameover.addImage(over)
gameover.visible=false
again = createSprite(300,200)
again.scale=0.5
again.addImage(restart)
again.visible=false

paddleg=new Group()
edges=createEdgeSprites()
}

function draw() {
  if (gameState===play){

     desert.velocityX=-4

     if(desert.x<0){
         desert.x=desert.width/2
     }
  if(keyDown("space")){
      camel.velocityY=-5
     

  }
  camel.bounceOff(paddleg)
  //camel.bounceOff(edges[0])
  //camel.bounceOff(edges[1])
  //camel.bounceOff(edges[2])
  camel.bounceOff(edges[3])
  
     //add a gravity
     camel.velocityY=camel.velocityY+0.2
     //if(camel.isTouching(paddleg)){
        // gameState=END
     //}
    spawnpaddle();
    
    score=score+Math.round(getFrameRate()/60)
  }

  else if (gameState===END){
       again.visible=true
        gameover=true
        desert.velocityX=0
        spawnpaddle.setVelocityXEach(0)
        if(mousePressedOver(again)){
            reset()
        }
        
        
  }
  paddleg.setLifetimeEach(-1)

 drawSprites();
 text("score:"+score,500,100)

}


function spawnpaddle(){
    if(frameCount%60===0){
        var paddle = createSprite(240,350)
        coin=createSprite(240,330)
        coin.addImage(coinImg)
        paddle.x = Math.round(random(200,600))
        //paddle.y = Math.round(random(200,600))

        //coin.x = Math.round(random(300,590))
       coin.x=paddle.x
       //coin.y=paddle.y
      
        coin.scale=0.01
        paddle.addImage(stick)
       paddle.scale=0.1
        paddle.velocityX=-3
    coin.velocityX=paddle.velocityX
     paddleg.add(paddle)
    }
}
function reset(){
    gameState=play
    again.visible=false
    gameover.visible=false
    score=0
}
