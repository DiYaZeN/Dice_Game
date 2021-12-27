var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomImage;


var selectImage1=document.querySelectorAll("img")[0];

selectImage1.setAttribute("src",randomImageSource);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomImage2;

var selectImage2=document.querySelectorAll("img")[1];

selectImage2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";

}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";

}

else{
    document.querySelector("h1").innerHTML="Player 1&2 lose!";

}
