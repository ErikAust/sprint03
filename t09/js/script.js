"use strict"

let playBox = [];

let turnsCounter = 0;


let playBoxZeroFill = () => {
    for (let i = 0; i < 3; i++) {
        playBox[i] = []
        for (let j = 0; j < 3; j++)
            playBox[i][j] = 0;
    }
}

let changeBackground = (id) => {
    let player1 = document.querySelector(`#plrOneBar`);
    let player2 = document.querySelector(`#plrTwoBar`);
    let infoBar = document.querySelector(`#infoBar`);

    if (id === 1) {
        player1.style.backgroundColor = `#cd903c`;
        player2.style.backgroundColor = `#d3d3d3`;
    }
    if (id === 2) {
        player1.style.backgroundColor = `#d3d3d3`;
        player2.style.backgroundColor = `#cd903c`;
    }
    if (id === 3) {
        player1.style.backgroundColor = `#d3d3d3`;
        player2.style.backgroundColor = `#d3d3d3`;
        infoBar.style.backgroundColor = `#367533`;

    }
    if (id === 4) {
        player1.style.backgroundColor = `#d3d3d3`;
        player2.style.backgroundColor = `#d3d3d3`;
        infoBar.style.backgroundColor = `#cd903c`;
    }
}


let changeSymbolColor = (type, num) => {
    for (let i = 0, j = 3; i < 3; i++, j--) { //j - for diagonal
        let winArea;
        if (type === `row`)
            winArea = document.querySelector(`#area${num + 1}x${i + 1} > div`);
        if (type === `column`)
            winArea = document.querySelector(`#area${i + 1}x${num + 1} > div`);
        if (type === `backSlash`)
            winArea = document.querySelector(`#area${i + 1}x${i + 1} > div`);
        if (type === `slash`)
            winArea = document.querySelector(`#area${j}x${i + 1} > div`);
        if (winArea.className === `cross`)
            winArea.style.backgroundColor = `#367533`;
        if (winArea.className === `circle`)
            winArea.style.border = `18px solid #367533`;
    }
}

let winDrawChecker = () => {
    let winner = 0;
    let result = document.querySelector(`#resultInfoBar`);

    for (let i = 0; playBox[i]; i++) {

        if (i === 0 && playBox[1][1] !== 0) {
            if (playBox[0][0] === playBox[1][1] && playBox[0][0] === playBox[2][2]) {
                winner = playBox[1][1];
                changeSymbolColor(`backSlash`,);
            }
            if (playBox[2][0] === playBox[1][1] && playBox[2][0] === playBox[0][2]) {
                winner = playBox[1][1];
                changeSymbolColor(`slash`,);
            }
        }

        if (playBox[i][0] === playBox[i][1] && playBox[i][0] === playBox[i][2]
            && playBox[i][0] !== 0) {
            winner = playBox[i][0];
            changeSymbolColor(`row`, i);
        }

        if (playBox[0][i] === playBox[1][i] && playBox[0][i] === playBox[2][i]
            && playBox[0][i] !== 0) {
            winner = playBox[0][i];
            changeSymbolColor(`column`, i);
        }
    }
    if (winner !== 0) {
        result.innerHTML = `Player ${winner} won!`;
        changeBackground(3);
        listener(false);
        return;
    }
    if (turnsCounter === 9) {
        result.innerHTML = `It\'s a draw!`;
        changeBackground(4);
    }
}


let makeTurn = (str) => {
    let divArea = document.querySelector(`#${str}`);
    let element = document.createElement(`div`);
    let turnCounterArea = document.querySelector(`#nmbrTurnCounter`);

    if (str !== `false`) {

        if (turnsCounter % 2 === 0) {
            element.className = `cross`;
            changeBackground(2);

            playBox[+str.charAt(4) - 1][+str.charAt(6) - 1] = 1;
        }

        if (turnsCounter % 2 !== 0) {
            element.className = `circle`;
            changeBackground(1);

            playBox[+str.charAt(4) - 1][+str.charAt(6) - 1] = 2;
        }
        divArea.appendChild(element);
        turnsCounter += 1;
        turnCounterArea.innerHTML = `${turnsCounter}`;
        if (turnsCounter > 4)
            winDrawChecker();
    }
}


let listener = (flag) => {
    let areas = document.querySelectorAll(`.areas`);
    let reset = document.querySelector(`#gameResetBtn`)

    if (flag === true) {
        for (let i = 0; areas[i]; i++)
            areas[i].addEventListener(`click`, () => {
                makeTurn(areas[i].getAttribute(`id`))
            }, { once: true });
        reset.addEventListener(`click`, () => {
            window.location.reload()
        })
    }
    if (flag === false)
        for (let i = 0; areas[i]; i++)
            areas[i].setAttribute(`id`, `false`)
}

playBoxZeroFill();
listener(true);
changeBackground(1);