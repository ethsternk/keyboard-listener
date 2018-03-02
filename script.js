'use strict';

const audio = new Audio('pew.m4a');
const audio2 = new Audio('doh.m4a');
const audio3 = new Audio('boom.mp3');
let boxtop = 650;
let boxleft = 685;
const spaceship = document.getElementById("spaceship");
let death = false;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName === 'ArrowDown'& death === false) {
        boxtop += 10;
    }
    if (keyName === 'ArrowUp' & death === false) {
        boxtop -= 10;
        updatePosition();
    }
    if (keyName === 'ArrowRight' && death === false) {
        boxleft += 10;
        updatePosition();
    }
    if (keyName === 'ArrowLeft' && death === false) {
        boxleft -= 10;
        updatePosition();
    }
    if (keyName === ' ' && death === false) {
        shoot();
        updatePosition();
    }
    if (keyName === 'd') {
        audio2.play();
        audio3.play();
        spaceship.style.backgroundImage = "url('https://purepng.com/public/uploads/large/31508450843zdqbtxjdagomp7bbmtc9gna5qmsstsvyhv9kok2wh45kzw0tdnlpdpqrqjm5iakslmklx7hzdchjckw0vt1m0xrfsswiykkm8ri8.png')";
        spaceship.style.width = "140px";
        spaceship.style.height = "140px";
        spaceship.style.left = boxleft - 35 + "px";
        spaceship.style.top = boxtop - 35 + "px";
        death = true;
    }
});

function shoot() {
    const newDiv = document.createElement("div");
    newDiv.className = "pew";
    document.body.appendChild(newDiv);
    newDiv.style.top = boxtop + 15 + "px";
    newDiv.style.left = boxleft + 30 + "px";

    let pewtop = boxtop + 15;
    const id = setInterval(frame, 5);
    function frame() {
        if (pewtop < -20) {
            clearInterval(id);
            newDiv.parentNode.removeChild(newDiv);
        } else {
            pewtop -= 10; 
            newDiv.style.top = pewtop + 'px';  
        }
    }

    audio.currentTime = 0;
    audio.play();
}

function updatePosition() {
    spaceship.style.top = boxtop + "px";
    spaceship.style.left = boxleft + "px";
}