// BASE CODE
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// VARIABLES
let stars = [];
let width = window.innerWidth;
let height = window.innerHeight;

// EVENT LISTENERS 
window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// FUNCTIONS FOR RENDERING
function clean() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    for (let i = 0; i < 1; i++) {
        let randomX = Math.random() * width;
        let randomY = Math.random() * height;
        let randomWidth = Math.random() * 8;
        let randomHeight = Math.random() * 8; 
        let randomOpacity = Math.random();

        stars.push(new Star(randomX, randomY, randomWidth, randomHeight, randomOpacity));
    }
}, 100);

// FUNCTION FOR RENDERING
function draw() {
    requestAnimationFrame(draw);

    // METHOD FOR CLEANING SCREEN
    clean();

    // METHOD FOR RENDERING
    for (let i = 0; i < stars.length; i++) {
        stars[i].move();
    }
}
draw();