let game = document.querySelector("#game");
let santaHp = document.querySelector("#Santa-Health");
let grinchHp = document.querySelector("#Grinch-Health");
let santa;
let grinch;
let snowBalls = []; // empty array to add thrown snowballs into.
let ctx = game.getContext('2d'); // creates x and y

ctx.fillStyle = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

// ====================== ENTITIES ======================= //
class player { //==> creates class named player
    constructor(x, y, color, width, height) { //==>has to define everytime you make a new creation
        this.x = x;// ==> info can change per creation
        this.y = y;// ==> info can change per creation
        this.color = color;// ==> info can change per creation
        this.width = width;//==>
        this.height = height;//==>
        this.alive = true;// for all creations info is true

        this.render = function () { //==> function created to render class Player on page
            ctx.fillStyle = this.color//==> renders color of Player
            ctx.fillRect(this.x, this.y, this.width, this.height);//==> makes a rectangle on page from Player class
        }

    }
}

class snowBall { //==> creates class named snowBall 
    constructor(x, y) {
        this.x = x;// ==> info can change per creation
        this.y = y;// ==> info can change per creation
        this.color = 'black'; //==> all creations will be black
        this.width = 5; //==> all creations will have width of 5
        this.height = 5;
        this.speed = 10;

        this.render = function () { //==> function created to render snowball on page
            this.x = this.x + this.speed //==> speed and direction snowball will be going
            ctx.fillStyle = this.color //==> color from snowBall class
            ctx.fillRect(this.x, this.y, this.width, this.height); //==> makes a rectangle on page from snowBall class
        }

    }
    

}

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function (e) {
    santa = new player(10, 350, 'red', 50, 50);
    grinch = new player(770, 360, 'green', 20, 40);
    const runGame = setInterval(gameLoop, 120);
});

document.addEventListener("keydown", movementHandler);

// ====================== GAME PROCESSES ======================= //
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    if (grinch.alive) {
        grinch.render();
    }
santa.render();
for (let i=0; i < snowBalls.length;i++){ // creates for Loop to display all snowBalls in array
    snowBalls[i].render() // renders every snowball inside of array (adds to screen)
}

}


//  KEYBOARD INTERACTION LOGIC
function movementHandler(e) {

    switch (e.keyCode) {
        //move up 
        case (87):
            santa.y - 10 >= 0 ? santa.y -= 10 : null;
            break;
        case (83):
            //move  down 
            santa.y + 10 <= game.height ? santa.y += 10 : null;
            break;
        case (32):
            e.preventDefault(); //==>prevents page from scrolling down while pressing space
            let snowball = new snowBall(santa.width/2 + santa.x, santa.height/2 + santa.y); //==>when space is press creates new varible named snowball that makes a snowBall class with postition santa.XandY
            snowBalls.push(snowball);// adds new varible snowball(with class snowBall) to array named snowBalls
        

    }

}


