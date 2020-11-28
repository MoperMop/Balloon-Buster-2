function createBalloons(){
  for (column = 0; column <= 3; column = column + 1) {
    for (position = column * 0.5; position - (column * 0.5) <= Math.abs(column - 3); position = position + 1) {
      balloon = new Balloon(column*50+60, position*75+125,column+1)
    }
  }
}


function fireArrow(){
  arrow = createSprite(500,bow.y,5,30);
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.375;
  arrow.velocityX = -10;

  gameState = FIRING;
}