const canvas = querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas);

//We create a player class which contais all the properties that it will use.
class player{
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}
class Projectile{
    constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color
        context.fill();
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue');
player.draw();

console.log(player);

window.addEventListener('Click',(event) => {
    const projectile = new Projectile(
        event.clientX, 
        event.clientY,
         5, 
         'red', 
         null
    )
    projectile.draw();
});