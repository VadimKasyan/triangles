var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let A = [400, 50];
let B = [100, 580];
let C = [700, 580];
let last = [320,300];
let direction;

//top A
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";
ctx.font = "40px serif";
ctx.beginPath();
ctx.arc(A[0], A[1], 1, 0, Math.PI*2, true);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillText("A", 390, 35);

//left B
ctx.beginPath();
ctx.arc(B[0], B[1], 1, 0, Math.PI*2, true);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillText("B", 60, 590);

//right C
ctx.beginPath();
ctx.arc(C[0], C[1], 1, 0, Math.PI*2, true);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillText("C", 715, 590);

function draw(number) {
    var canvas = document.getElementById("canvas");
    for(let i = 0; i < number; i++) {
        //random direction. 0 - top, 1 - left, 2 - right
        direction = Math.floor(Math.random() * 3);
    
        //draw
        ctx.beginPath();
    
        if(direction == 0) {
            ctx.arc((last[0]+A[0])/2, (last[1]+A[1])/2, 1, 0, Math.PI*2, true);
            last = [(last[0]+A[0])/2, (last[1]+A[1])/2]
        }
        if(direction == 1) {
            ctx.arc((last[0]+B[0])/2, (last[1]+B[1])/2, 1, 0, Math.PI*2, true);
            last = [(last[0]+B[0])/2, (last[1]+B[1])/2]
        }
        if(direction == 2) {
            ctx.arc((last[0]+C[0])/2, (last[1]+C[1])/2, 1, 0, Math.PI*2, true);
            last = [(last[0]+C[0])/2, (last[1]+C[1])/2]
        }
    
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

var element = document.getElementById("draw-1");
element.onclick = function() {
    draw(1)
}
var element = document.getElementById("draw-number");
element.onclick = function() {
    draw(document.getElementById("number").value)
}