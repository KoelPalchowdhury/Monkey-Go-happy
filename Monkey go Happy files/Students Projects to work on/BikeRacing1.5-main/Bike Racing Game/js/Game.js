class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState=data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form()
        form.display();
    }

    bike1 = createSprite(displayWidth/2,50);
    bike1.addImage(bike1img);
    bike2 = createSprite(displayWidth/2,130);
    bike2.addImage(bike2img);
    //bgimg = createSprite(displayWidth,displayHeight);
    bikes = [bike1,bike2];

    }

  play(){

form.hide();
Player.getPlayerInfo();
image(bgimg,0,0,displayWidth,displayHeight)
    
    if(allPlayers !== undefined){
      
      var index = 0;
      var x;
      var y;
      for(var plr in allPlayers){
      index = index + 1 ;
      x = 200-allPlayers[plr].distance;
      y = 200-allPlayers[plr].distance;
      bikes[index-1].x = x;
      bikes[index-1].y = y;

  if (index === player.index){
  fill ("red")
  ellipse(x,y,60,80);
  camera.position.x = bikes[index-1].x;
  camera.position.y = bikes[index-1].y
 }
       
 }
 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
  //player.distance -= 10
  bikes[index-1].x +=10
  player.distance=bikes[index-1].x
  player.update();
}
if (keyIsDown(LEFT_ARROW) && player.index !== null) {
  player.distance += 10
  //bikes[index-1].x -=10
  //player.distance=bikes[index-1].x
  player.update();
}

if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      //bikes[index-1].y -=10
      //player.distance=bikes[index-1].y
      player.update();
    }
if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      //bikes[index-1].y +=10
      //player.distance=bikes[index-1].y
      player.update();
    }
   
if (bikes[index-1].x == displayWidth/2-100 && bikes[index-1].y == displayHeight/2-100){
  gameState = 2;
 
}
    drawSprites();
  }
}


  end(){
    //alert("Game Ended" + " " + "Score=>" + " " + player.rank);
    console.log("game end");

  }
}
