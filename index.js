const canvas = querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas);

//We create some classes.
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
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
}
class Enemie{
    constructor(x,y, radius, life){
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.life = life;
    }
}
class Food{
    constructor(x,y,radius,Food){
        this.x = x;
        this.y = y;
        this.radius = radius;
    	this.Food = Food;
    }
}
class Collision {
    constructor(rect1, rect2){
        this.aLeft = rect1.position.x;
        this.aTop = rect1.position.y;
        this.aRight = rect1.position.x + rect1.size.x;
        this.aBottom = rect1. position.y + rect1.size.y;

        this.bLeft = rect2.position.x;  
        this.bTop =  rect2.positiion.y;
	    this.bRight = rect2.position.x + rect2.size.x;
    	this.bBottom = rect2.position.y +rect2.size.y;
        this.overlapped();
    }
    overlapped(){
        if(this.aLeft > this.bRight || this.bLeft > this.aRight)
        return false;
        if(this.aTop > this.aBottom || this.bTop > this.aBottom)
        return false;
    }
}
const initialTime = 0;
    if (initialTime = 0, initialTime < 0, initialTime++){

    }else{
        console.log("The timer is broken, please contact the dev!");
}

//Declare some variables
const x = canvas.width / 2;
const y = canvas.height / 2;
const Food = canvas.width / 0.5;
const username = document.getElementsByTagName('input'); //Elements in a variable
let score = 0; //initial user score

//Loop over the to attach them a keyup listener
for(let i=0; i<username.length; i++){
    inputs[i].addEventListener('keyup', checkNames);
}

const food = new Food(x, y, 30, 'green');
food.draw();

const player = new player(x, y, 30, 'blue');
player.draw();

console.log(player);

///////////////Functions///////////////

//User Scores
function drawScore(){
    ctx.font = "16ox Arial";
    ctx.fillStyle = "#9995DD";
    ctx.fillText("Scores: "+score, 8, 20);
    drawScore();
}
//Check for Username
function checkNames(){
    let playersReady = 0;
    for(let i = 0; i < username.length; i++){
        if (inputs[i].value != ""){
            playersReady++; //increment the value if the value is not empty
        }
    }
}
window.addEventListener('Click',(event) => {
    const projectile = new Projectile(
        event.clientX,
        event.clientY,
         5,
         'red',
         null
    );
        projectile.draw();
});

//Window for error case
window.addEventListener('waiting',(ErrorEvent) =>{
    const ErrorMessage = new ErrorMessage(
        ErrorEvent="Time out detected!"
    );
});
//showing up the messge
document.getElementById('status').textContent = "Waiting for... " + 
    (username.length - playersReady) + "More players" +
    (username.length - playersReady == 1 ? "" : "s") +
    "..." +
    (username.length - playersReady == 0 ? "The game is beggining now!": "");
    checkNames();
