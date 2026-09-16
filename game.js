const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

let x = 280;
let y = 180;
let enemyY = 20;

document.addEventListener("keydown", function(event){

    const speed = 10;

    if(event.key==="w") y-=speed;
    if(event.key==="s") y+=speed;
    if(event.key==="a") x-=speed;
    if(event.key==="d") x+=speed;

    player.style.left=x+"px";
    player.style.top=y+"px";

});

setInterval(function(){

    enemyY+=5;

    if(enemyY>400){
        enemyY=20;
    }

    enemy.style.top=enemyY+"px";

},50);