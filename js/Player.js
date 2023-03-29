class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
   //escribe el código correcto para mostrar las vidas como tres rectángulos verdes en una línea horizontal.
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var lifeWidth = 30;
var lifeHeight = 10;
var lifeSpacing = 5;
var lifeX = 10;
var lifeY = 10;

for (var i = 0; i < playerLives; i++) {
  ctx.fillStyle = "green";
  ctx.fillRect(lifeX + (lifeWidth + lifeSpacing) * i, lifeY, lifeWidth, lifeHeight);
}

   
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
