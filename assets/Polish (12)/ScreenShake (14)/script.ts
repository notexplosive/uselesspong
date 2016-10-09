class ScreenShakeBehavior extends Sup.Behavior {
  trigger = false;
  tick = 0;
  awake() {
    
  }

  update() {
    if(this.trigger){
      this.trigger = false;
      this.tick = 10;
    }
    
    if(this.tick > 0){
      this.tick--;
      let vec = new Sup.Math.Vector2(Math.random()-.5, Math.random()-.5).multiplyScalar(.1);
      this.actor.setPosition(vec);
    }else{
      this.actor.setPosition(0,0);
    }
  }
}
Sup.registerBehavior(ScreenShakeBehavior);
