class EnemyScriptBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    let ball = Sup.getActor("Ball");
    let updown = ball.getPosition().y - this.actor.getPosition().y;
    Sup.log(updown);
    
    if(ball.getVisible() && Math.abs(updown) > .2){
      if(updown > 0){
        this.actor.arcadeBody2D.setVelocity(0,ENEMY_SPEED);
      }else{
        this.actor.arcadeBody2D.setVelocity(0,-ENEMY_SPEED);
      }
    }else{
      this.actor.arcadeBody2D.setVelocity(0,0);
    }
    
  }
}
Sup.registerBehavior(EnemyScriptBehavior);
