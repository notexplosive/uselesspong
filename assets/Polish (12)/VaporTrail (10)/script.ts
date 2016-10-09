class VaporTrailBehavior extends Sup.Behavior {
  tick = 5;
  awake() {
    
  }

  update() {
    if(this.tick > 0){
      this.tick --;
    }else{
      this.tick = 2;
      let vapor = new Sup.Actor("Vapor");
      vapor.setPosition(this.actor.getPosition());
      new Sup.SpriteRenderer(vapor,this.actor.spriteRenderer.getSprite()).setColor(this.actor.spriteRenderer.getColor());
      
      vapor.addBehavior(ParticleBehavior);
    }
    
  }
}
Sup.registerBehavior(VaporTrailBehavior);
