// BASE CODE
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// EVENT LISTENERS 
window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width / 2 + ", " +  canvas.height / 2);
    
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function clean() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// FUNCTION FOR RENDERING
function draw() {
    requestAnimationFrame(draw);

    // METHOD FOR CLEANING SCREEN
    clean();

    // METHOD FOR RENDERING

       
}
draw();

