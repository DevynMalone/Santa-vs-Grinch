let game = document.querySelector("#game");
let santaHp  = document.querySelector("#Santa-Health");
let grinchHp  = document.querySelector("#Grinch-Health");
let santa;
let grinch;
let ctx = game.getContext('2d'); // creates x and y

ctx.fillStyle = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

// ====================== ENTITIES ======================= //
class idk {
    constructor(x, y, color,width,height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function() {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }
}

// let santaTest = new idk(10, 350,'red', 50, 50);
// let grinchTest = new idk(770, 360, 'green', 20, 40);
// console.log(santaTest);
// console.log(grinchTest);
// grinchTest.render();
// santaTest.render();
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function(e){
    santa = new idk(10, 350,'red', 50, 50);
    grinch = new idk(770, 360, 'green', 20, 40);

 
});

// document.addEventListener("keydown", movementHandler );

// ====================== GAME PROCESSES ======================= //
function gameLoop () {
    ctx.clearRect(0, 0, game.width, game.height);
   if (grinch.alive) {
       grinch.render();
   } 
   santa.render();
}
