var random_number1=Math.floor(Math.random()*6)+1;
var random_number2=Math.floor(Math.random()*6)+1;

var img_src1="images/dice"+random_number1+".png";
var img_src2="images/dice"+random_number2+".png";

document.getElementsByTagName("img")[0].setAttribute("src",img_src1);
document.getElementsByTagName("img")[1].setAttribute("src",img_src2);

if(random_number1>random_number2){
    document.querySelector("h1").textContent="player1 wins";
}else if(random_number2>random_number1){
    document.querySelector("h1").textContent="player2 wins";
}else{
    document.querySelector("h1").textContent="draw";   
}