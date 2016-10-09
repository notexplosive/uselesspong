class ScoreScriptBehavior extends Sup.Behavior {
  pScore = 0;
  eScore = 0;
  awake() {
    this.updateBoard();
  }

  update() {
    let ball = Sup.getActor("Ball");
    
    if(ball.getBehavior(BallBehavior).whoscored == 1){
      this.pScore++;
      this.updateBoard();
    }
    
    if(ball.getBehavior(BallBehavior).whoscored == 2){
      this.eScore++;
      this.updateBoard();
    }
  }
  
  updateBoard(){
    let playerScore = this.actor.getChild("PlayerScore");
    let enemyScore = this.actor.getChild("EnemyScore");
    playerScore.textRenderer.setText(this.pScore);
    enemyScore.textRenderer.setText(this.eScore);
  }
}
Sup.registerBehavior(ScoreScriptBehavior);
