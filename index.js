var load = true;
do {
    // x=firstrandomnumber
    var x = Math.random() * 6;//generating the first random number(0 to 5.99999999999 upto 16 decimal places).

    // y=secondrandomnumber
    var y = Math.random() * 6;//generating the second random number.

    // math.floor will gives a number between (0 to 5.99999) 0 to 5 so for getting a number between 0 to 6 we added 1(+1).
    x = Math.floor(x) + 1;

    y = Math.floor(y) + 1;


    // for declaring the winner.
    if (x === y) document.querySelector("h1").innerHTML = "Draw";
    else if (x > y) document.querySelector("h1").innerHTML = "Player 1 win";
    else document.querySelector("h1").innerHTML = "Player 2 win";


    //change the image to a random dicee image 1.
    if (x == 1) document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
    if (x == 2) document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
    if (x == 3) document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
    if (x == 4) document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
    if (x == 5) document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
    if (x == 6) document.querySelector("img.img1").setAttribute("src", "images/dice6.png");


    //change the image to a random dicee image 2.
    if (y == 1) document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
    if (y == 2) document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
    if (y == 3) document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
    if (y == 4) document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
    if (y == 5) document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
    if (y == 6) document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}
while (load == false);