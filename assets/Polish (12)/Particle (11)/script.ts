class ParticleBehavior extends Sup.Behavior {
  mov = new Sup.Math.Vector2();
  rot = 0;
  awake() {
    
  }

  update() {
    this.actor.spriteRenderer.setOpacity(this.actor.spriteRenderer.getOpacity()*.9);
    let opac = this.actor.spriteRenderer.getOpacity();
    this.actor.setLocalScale(opac+.1,opac+.1,1);
    
    if(opac < .01){
      this.actor.destroy();
    }
    
    this.actor.rotateEulerZ(this.rot);
    this.actor.move(this.mov);
  }
}
Sup.registerBehavior(ParticleBehavior);
