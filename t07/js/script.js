'use strict'

let correctErrors = (character) => {
    for (let i = 0; i < character.length; i++) {
        if (character[i].getAttribute(`data-element`) === null)
            character[i].setAttribute(`data-element`, `none`);
        if (character[i].getAttribute('class') === null)
            character[i].setAttribute(`class`, `unknown`);
    }
};

let makeCircle = (character) => {
    for (let i = 0; i < character.length; i++) {
        let dataElem = (character[i].getAttribute(`data-element`)).split(` `);
        character[i].appendChild(document.createElement(`br`));
        for (let j = 0; j < dataElem.length; j++) {
            let node = document.createElement(`div`);
            node.className = `elem ${dataElem[j]}`;
            if (dataElem[j] === `none`) {
                let line = document.createElement('div');
                line.className = `line`;
                node.appendChild(line);
            }
            character[i].appendChild(node);
        }
    }
};

let rendering = () => {
    let character = document.body.getElementsByTagName(`li`);
    correctErrors(character);
    makeCircle(character);
};

rendering();