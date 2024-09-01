var randomNumber1=Math.floor(Math.random()*6 +1);
var randomNumber2=Math.floor(Math.random()*6 +1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
var heading=document.querySelector("h1");
if (randomNumber1>randomNumber2){
    heading.innerHTML="&#128681;Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    heading.innerHTML="Player 2 wins&#128681;";
}else{
    heading.innerHTML="Draw!";
}