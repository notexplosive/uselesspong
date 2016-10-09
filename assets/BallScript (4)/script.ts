class BallBehavior extends Sup.Behavior {
  whoscored = 0;
  tick = 60;
  awake() {
    this.actor.arcadeBody2D.setVelocity(this.newDir());
  }

  update() {
    let player = Sup.getActor("Player");
    let enemy = Sup.getActor("Enemy");
    
    let vel = this.actor.arcadeBody2D.getVelocity();
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,enemy.arcadeBody2D) || Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,player.arcadeBody2D) ){
      vel.x = -vel.x;
      vel.y += (Math.random() -.5)*.01;
      vel.multiplyScalar(1.01);
      
      Sup.Audio.playSound("Polish/HitBall");
      
      if(this.actor.getBehavior(ImpactBehavior) != null){
        this.actor.getBehavior(ImpactBehavior).trigger = true;
      }
      
      if(Sup.getActor("Camera").getBehavior(ScreenShakeBehavior) != null){
        Sup.getActor("Camera").getBehavior(ScreenShakeBehavior).trigger = true;
      }
    }
    
    if(this.outOfBounds()){
      vel.y = -vel.y;
      Sup.Audio.playSound("Polish/BounceBall");
      if(Sup.getActor("Camera").getBehavior(ScreenShakeBehavior) != null){
        Sup.getActor("Camera").getBehavior(ScreenShakeBehavior).trigger = true;
      }
    }
    
    let scored = this.inScoreZone();
    // clear "whoscored" value after one frame
    if(this.whoscored != 0){
      this.whoscored = 0;
    }
    
    if(scored != 0){
      this.whoscored = scored;
      this.tick = 60;
    }
    
    if(!this.actor.getVisible()){
      this.tick--;
      if(this.tick == 0){
        this.actor.arcadeBody2D.warpPosition(0,0);
        this.actor.setVisible(true);
        Sup.Audio.playSound("Polish/SpawnBall");
        
        if(this.actor.getBehavior(ImpactBehavior) != null){
          this.actor.getBehavior(ImpactBehavior).trigger = true;
        }
        vel = this.newDir();
      }
    }

    this.actor.arcadeBody2D.setVelocity(vel);
  }
  
  inScoreZone():number{
    let pos = this.actor.getPosition();
    if(this.actor.getVisible()){
      if(pos.x > 4){
        this.actor.setVisible(false);
        // POINT TO PLAYER
        return 1;
      }

      if(pos.x < -4){
        this.actor.setVisible(false);
        // POINT TO ENEMY
        return 2;
      }
    }
    return 0;
  }
  
  outOfBounds(){
    let pos = this.actor.getPosition();
    if(pos.y > 2.8){
      this.actor.setPosition(pos.x, 2.8);
      return true;
    }
    
    if(pos.y < -2.8){
      this.actor.setPosition(pos.x, -2.8);
      return true;
    }
  }
  
  newDir():Sup.Math.Vector2{
    return new Sup.Math.Vector2(Math.random()-.5,Math.random()-.5).add(.1,0).normalize().multiplyScalar(BALL_SPEED);
  }
}
Sup.registerBehavior(BallBehavior);
