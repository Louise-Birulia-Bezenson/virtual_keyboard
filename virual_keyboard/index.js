let keys = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 96, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

const keyboardConfig = [
    [
        { key: '`', shiftKey: '~' },
        { key: '1', shiftKey: '!' },
        { key: '2', shiftKey: '@' },
        { key: '3', shiftKey: '#' },
        { key: '4', shiftKey: '$' },
        { key: '5', shiftKey: '%' },
        { key: '6', shiftKey: '^' },
        { key: '7', shiftKey: '&' },
        { key: '8', shiftKey: '*' },
        { key: '9', shiftKey: '(' },
        { key: '0', shiftKey: ')' },
        { key: '-', shiftKey: '_' },
        { key: '=', shiftKey: '+' },
        { key: 'Backspace'},
    ],
    [
        { key: 'Tab'},
        { key: 'q' },
        { key: 'w' },
        { key: 'e' },
        { key: 'r' },
        { key: 't' },
        { key: 'y' },
        { key: 'u' },
        { key: 'i' },
        { key: 'o' },
        { key: 'p' },
        { key: '[', shiftKey: '{' },
        { key: ']', shiftKey: '}' },
        { key: '\\', shiftKey: '|' },
        { key: 'Del'},
    ],
    [
        { key: 'CapsLock'},
        { key: 'a' },
        { key: 's' },
        { key: 'd' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'j' },
        { key: 'k' },
        { key: 'l' },
        { key: ';', shiftKey: ':' },
        { key: '\'', shiftKey: '\"' },
        { key: 'Enter'},
    ],
    [
        { key: 'Shift'},
        { key: 'z' },
        { key: 'x' },
        { key: 'c' },
        { key: 'v' },
        { key: 'b' },
        { key: 'n' },
        { key: 'm' },
        { key: ',', shiftKey: '<' },
        { key: '.', shiftKey: '>' },
        { key: '/', shiftKey: '?' },
        { key: '▲' },
        { key: 'Shift'},
    ],
    [
        { key: 'Ctrl'},
        { key: 'Win' },
        { key: 'Alt' },
        { key: '         ' },
        { key: 'Alt' },
        { key: '◀' },
        { key: '▼' },
        { key: '▶' },
        { key: 'Ctrl'},
    ],
]

function init (){
    let title = "";
    let screen = "";
    let keyboardBox = "";
    let settings = "";
    title +="<div class = 'box'><h1 class = 'title'> Virual Ketboard </h1></div>"
    screen +="<textera class = 'screen'></textera>"

    let html = "";
    keyboardConfig.forEach((row) => {
        html += '<div class="row">';

        row.forEach((obj) => {
            html += `<div class="key">${obj.key}</div>`
        });

        html += '</div>';
    });

    keyboardBox +=`<div class='keyboardBox'>${html}</div>`;
    settings += "<div class='box'></div>"
    document.body.innerHTML = title + screen + keyboardBox + settings;
}
init();


