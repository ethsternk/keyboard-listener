'use strict';

let boxtop = 650;
let boxleft = 685;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName === 'ArrowDown') {
        boxtop += 10;
    }
    if (keyName === 'ArrowUp') {
        boxtop -= 10;
    }
    if (keyName === 'ArrowRight') {
        boxleft += 10;
    }
    if (keyName === 'ArrowLeft') {
        boxleft -= 10;
    }
    document.getElementById("box").style.top = boxtop + "px";
    document.getElementById("box").style.left = boxleft + "px";
});