const player = document.getElementById("player");

let x = 280;
let y = 180;

document.addEventListener("keydown", function(event){

    const speed = 10;

    if(event.key==="w") y-=speed;
    if(event.key==="s") y+=speed;
    if(event.key==="a") x-=speed;
    if(event.key==="d") x+=speed;

    player.style.left=x+"px";
    player.style.top=y+"px";

});