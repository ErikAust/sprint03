'use strict'

function getFormattedDate(dateObject) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let a = '0';
    if (dateObject.getDate() < 10) {
        a += dateObject.getDate();
    }
    else
        a = dateObject.getDate();

    let b = '0';
    if (dateObject.getMonth() < 10) {
        b += dateObject.getMonth() + 1;
    }
    else
        b = dateObject.getMonth() + 1;

    let c = '0';
    if (dateObject.getHours() < 10) {
        c += dateObject.getHours();
    }
    else
        c = dateObject.getHours();

    let d = '0';
    if (dateObject.getMinutes() < 10) {
        d += dateObject.getMinutes();
    }
    else
        d = dateObject.getMinutes();

    return `${a}.${b}.${dateObject.getFullYear()} ${c}:${d} ${days[dateObject.getDay()]}`;
}


const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');
console.log(getFormattedDate(date0));
// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));
// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));
// 01.01.2042 03:24 Wednesday
