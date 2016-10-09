class PlayerScriptBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    let updown = 0;
    if(Sup.Input.isKeyDown("DOWN")){updown--};
    if(Sup.Input.isKeyDown("UP")){updown++};
    if(updown > 0){
      this.actor.arcadeBody2D.setVelocity(0,PLAYER_SPEED);
    }
    if(updown < 0){
      this.actor.arcadeBody2D.setVelocity(0,-PLAYER_SPEED);
    }
    if(updown == 0){
      this.actor.arcadeBody2D.setVelocity(0,0);
    }
    
    this.checkOutOfBounds();
  }
  
  checkOutOfBounds(){
    let pos = this.actor.getPosition();
    if(pos.y > 2.8){
      this.actor.arcadeBody2D.warpPosition(pos.x, 2.8);
    }
    
    if(pos.y < -2.8){
      this.actor.arcadeBody2D.warpPosition(pos.x, -2.8);
    }
  }
}
Sup.registerBehavior(PlayerScriptBehavior);
