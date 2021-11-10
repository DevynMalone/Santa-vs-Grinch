let game = document.querySelector("#game");
let santaHp = document.querySelector("#Santa-Health");
let grinchHp = document.querySelector("#Grinch-Health");
let santa;
let grinch;
let snowball;
let snowballs = []; // empty array to add thrown snowballs into.
let ctx = game.getContext('2d'); // creates x and y

ctx.fillStyle = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

// ====================== ENTITIES ======================= //
class Player { //==> creates class named player
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

class Snowball { //==> creates class named snowBall 
    constructor(x, y) {
        this.x = x;// ==> info can change per creation
        this.y = y;// ==> info can change per creation
        this.color = 'black'; //==> all creations will be black
        this.width = 5; //==> all creations will have width of 5
        this.height = 5;
        this.speed = 50;

        this.render = function () { //==> function created to render snowball on page
            this.x = this.x + this.speed //==> speed and direction snowball will be going
            ctx.fillStyle = this.color //==> color from snowBall class
            ctx.fillRect(this.x, this.y, this.width, this.height); //==> makes a rectangle on page from snowBall class
        }

    }
    

}
// EVENT LISTENERS //

window.addEventListener('DOMContentLoaded', function (e) {
    santa = new Player(10, 350, 'red', 50, 50); //==> creates new varible named santa that makes a Player class with these(x,y,color,height,width)
    grinch = new Player(770, 360, 'green', 20, 40);//==> creates new varible named grinch that makes a Player class with these(x,y,color,height,width)
    const runGame = setInterval(gameLoop, 120);
});

document.addEventListener("keydown", movementHandler);

//  GUI //

function addNewGrinch() {  // ==> new sherk function adds new sherk when hit 
    grinch.alive = false;
    setTimeout(function() {
      let x = 770; // ==> give random number times(x) game width
      let y = Math.floor(Math.random() * game.height); // ==> give random number times(x) game height
      grinch = new Player(770, y, 'green', 20, 40) 
    }, 250);
    return true;
}


//  KEYBOARD INTERACTION LOGIC //

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
            let snowball1 = new Snowball(santa.width/2 + santa.x, santa.height/2 + santa.y); //==>when space is press creates new varible named snowball that makes a snowBall class with postition santa.XandY
            snowballs.push(snowball1);// adds new varible snowball(with class snowBall) to array named snowBalls
        

    }

}

// ====================== GAME PROCESSES ======================= //

function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    // santa.render();
    
    
    if (grinch.alive) {
        grinch.render();
        
    }
    santa.render();
for (let i=0; i < snowballs.length;i++){ // creates for Loop to display all snowBalls in array
    snowballs[i].render() // renders every snowball inside of array (adds to screen)
    detectHit(snowballs[i], grinch);
}

}




// ====================== COLLISION DETECTION ======================= //

function detectHit (p1, p2) {
    // what do we know know to be true
    // what conditions must false for the hit to be true
    // Crawler ( x, y, width, height )
    let hitTest = (
        p1.y + p1.height > p2.y &&  // ==> checking to see if a hit was dectected (x and y of charcters)(player.1 & player.2)
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width
    ); // {boolean} : if all are true -> hit

    if (hitTest) {
       addNewGrinch(); // return addNewGrinch(); // ==> add new Grinch function 

    } else {
        return false;
    }
}
