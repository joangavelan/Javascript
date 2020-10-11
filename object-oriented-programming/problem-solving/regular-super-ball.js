//Regullar Ball Super Ball - Codewars
function Ball(ballType = 'regular') {
    this.ballType = ballType;
  }
  
  let ball1 = new Ball();
  let ball2 = new Ball('super');
  
  ball1.ballType;
  ball2.ballType;