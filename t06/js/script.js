'use strict'

function transformation() {
    let hero = document.getElementById(`hero`);
    let lab = document.getElementById(`lab`);

    if (hero.innerHTML === `Bruce Banner`) {
        hero.innerHTML = `Hulk`;
        hero.style.fontSize = `120px`;
        hero.style.letterSpacing = `5px`;
        lab.style.background = `#789554`;
    }
    else {
        hero.innerHTML = `Bruce Banner`;
        hero.style.fontSize = `60px`;
        hero.style.letterSpacing = `2px`;
        lab.style.background = `#ffb300`;
    }
}

document.querySelector('#btn').onclick = transformation;