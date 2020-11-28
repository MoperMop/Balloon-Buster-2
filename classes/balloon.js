class Balloon{
  constructor(x,y,color){
    this.balloon = createSprite(x,y,21,52);
    //balloonGroup.add(balloon);
    switch(color){
      case 1:
        this.balloon.addImage("blueBalloon", blueBalloonImage);
        this.balloon.scale = 0.12;


        this.balloon.setCollider("circle", 0, -50, 245);
      break;
      case 2:
        this.balloon.addImage("greenBalloon", greenBalloonImage);
        this.balloon.scale = 0.107;


        this.balloon.setCollider("circle", 0, -122.5, 285);
      break;
      case 3:
        this.balloon.addImage("redBalloon", redBalloonImage);
        this.balloon.scale = 0.115;


        this.balloon.setCollider("circle", 0, -115, 275);
      break;
      case 4:
        this.balloon.addImage("pinkBalloon", pinkBalloonImage)
        this.balloon.scale = 1.45;


        this.balloon.setCollider("circle", 0, -8.5, 22)
      break;
    }
  }
  /*checkPop(){
    if(balloon.isTouching(arrow)){
      balloon.visible = false;


      score = score+1;
    }
  }*/
}