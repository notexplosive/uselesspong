class ImpactBehavior extends Sup.Behavior {
  trigger = false;
  awake() {
    
  }

  update() {
    if(this.trigger){
      this.trigger = false;
      for(let i = 0; i < 5; i++){
        let vapor = new Sup.Actor("Vapor");
        vapor.setPosition(this.actor.getPosition());
        new Sup.SpriteRenderer(vapor,this.actor.spriteRenderer.getSprite()).setColor(this.actor.spriteRenderer.getColor());
        vapor.setEulerZ(Math.random() * Math.PI*2)
        let b = vapor.addBehavior(ParticleBehavior);
        b.rot = (Math.random() - .5)*.2;
        b.mov = new Sup.Math.Vector2(Math.random() -.5, Math.random() -.5).normalize().multiplyScalar(.2);
      }
    }
  }
}
Sup.registerBehavior(ImpactBehavior);
