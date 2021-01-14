"use strict"

let archiveRerender = () => {
    let textArea = document.querySelector(`#notesTextArea`);
    let cookiesArray = (document.cookie).split(`delimiter`);

    textArea.innerHTML = ``;
    cookiesText.value = ``;
    if (cookiesArray.length === 1) {

        let empty = document.createElement(`span`); //
        empty.innerHTML = `[empty]`
        textArea.appendChild(empty);
        return;
    }
    for (let i = 1; cookiesArray[i]; i++) {
        let span = document.createElement(`span`);
        span.innerHTML = `--> ${cookiesArray[i]}`;
        textArea.appendChild(span);
    }
}

let addCookies = () => {
    let note = cookiesText.value.trim();
    let expDate = new Date();
    expDate.setDate(expDate.getDate() + 30);

    if (note.length === 0) {
        alert(`It's empty. Try to input something in "Text input".`)
        return;
    }
    document.cookie = `${document.cookie}delimiter${note}; expires=${expDate.toUTCString()}; path=/`
    archiveRerender();
}

let clearCookies = () => {
    if (confirm(`Are you sure?`))
        document.cookie = `=2; max-age=-1; path=/`
    archiveRerender();
}

archiveRerender();
