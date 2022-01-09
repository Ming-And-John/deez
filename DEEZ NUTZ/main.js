var mouseEvent = "";
var canvas="myCanvas"

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Radius=4;
var Color="black";
var width=3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown"

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){

        console.log("Current position of x & y coordinates = ");
        console.log("x = "+ current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,Radius,0,2 * Math.PI);
        ctx.stroke();

    }
}