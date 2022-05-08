
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
        { key: 'Backspace' },
    ],
    [
        { key: 'Tab' },
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
        { key: 'Del' },
    ],
    [
        { key: 'CapsLock' },
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
        { key: 'Enter' },
    ],
    [
        { key: 'Shift' },
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
        { key: 'Shift' },
    ],
    [
        { key: 'Ctrl' },
        { key: 'Win' },
        { key: 'Alt' },
        { key: '         ' },
        { key: 'Alt' },
        { key: '◀' },
        { key: '▼' },
        { key: '▶' },
        { key: 'Ctrl' },
    ],
];

const keyboardConfigRu = [
    [
        { key: 'ё' },
        { key: '1', shiftKey: '!' },
        { key: '2', shiftKey: '\\' },
        { key: '3', shiftKey: '№' },
        { key: '4', shiftKey: ';' },
        { key: '5', shiftKey: '%' },
        { key: '6', shiftKey: ':' },
        { key: '7', shiftKey: '?' },
        { key: '8', shiftKey: '*' },
        { key: '9', shiftKey: '(' },
        { key: '0', shiftKey: ')' },
        { key: '-', shiftKey: '_' },
        { key: '=', shiftKey: '+' },
        { key: 'Backspace' },
    ],
    [
        { key: 'Tab' },
        { key: 'й' },
        { key: 'ц' },
        { key: 'у' },
        { key: 'к' },
        { key: 'е' },
        { key: 'н' },
        { key: 'г' },
        { key: 'ш' },
        { key: 'щ' },
        { key: 'з' },
        { key: 'х' },
        { key: 'ъ' },
        { key: '\\', shiftKey: '/' },
        { key: 'Del' },
    ],
    [
        { key: 'CapsLock' },
        { key: 'ф' },
        { key: 'ы' },
        { key: 'в' },
        { key: 'а' },
        { key: 'п' },
        { key: 'р' },
        { key: 'о' },
        { key: 'л' },
        { key: 'д' },
        { key: 'ж' },
        { key: 'э' },
        { key: 'Enter' },
    ],
    [
        { key: 'Shift' },
        { key: 'я' },
        { key: 'ч' },
        { key: 'с' },
        { key: 'м' },
        { key: 'и' },
        { key: 'т' },
        { key: 'ь' },
        { key: 'б' },
        { key: 'ю' },
        { key: '.', shiftKey: ',' },
        { key: '▲' },
        { key: 'Shift' },
    ],
    [
        { key: 'Ctrl' },
        { key: 'Win' },
        { key: 'Alt' },
        { key: '         ' },
        { key: 'Alt' },
        { key: '◀' },
        { key: '▼' },
        { key: '▶' },
        { key: 'Ctrl' },
    ],
]

const config = {
    Backquote: {
        en: {
            caseDown: '`',
            caseUp: '~',
            caps: '`',
            shiftCaps: '~',
        },
        ru: {
            caseDown: '`',
            caseUp: '~',
            caps: '`',
            shiftCaps: '~',
        },
    },
    Digit1: {
        en: {
            caseDown: '1',
            caseUp: '!',
            caps: '1',
            shiftCaps: '!',
        },
        ru: {
            caseDown: '1',
            caseUp: '!',
            caps: '1',
            shiftCaps: '!',
        },
    },
    Digit2: {
        en: {
            caseDown: '2',
            caseUp: '@',
            caps: '2',
            shiftCaps: '@',
        },
        ru: {
            caseDown: '2',
            caseUp: '\"',
            caps: '2',
            shiftCaps: '\"',
        },
    },
    Tab: {
        en: {
            caseDown: 'Tab',
            caseUp: 'Tab',
            caps: 'Tab',
            shiftCaps: 'Tab',
        },
        ru: {
            caseDown: 'Tab',
            caseUp: 'Tab',
            caps: 'Tab',
            shiftCaps: 'Tab',
        },
    },
    KeyQ: {
        en: {
            caseDown: 'q',
            caseUp: 'Q',
            caps: 'Q',
            shiftCaps: 'q',
        },
        ru: {
            caseDown: 'й',
            caseUp: 'Й',
            caps: 'Й',
            shiftCaps: 'й',
        },
    },

    KeyW: {
        en: {
            caseDown: 'w',
            caseUp: 'W',
            caps: 'W',
            shiftCaps: 'w',
        },
        ru: {
            caseDown: 'ц',
            caseUp: 'Ц',
            caps: 'Ц',
            shiftCaps: 'ц',
        },
    },


    CapsLock: {
    en: {    
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock',
    },
    ru: {
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock',
    }, 
    }

};

const rows = [
    ['Backquote', 'Digit1', 'Digit2'],
    ['Tab', 'KeyQ', 'KeyW'],
    ['CapsLock']
];



function generateKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard-box');

    rows.forEach((row) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');

        row.forEach((key) => {
            const keyElement = document.createElement('div');
            keyElement.classList.add('key');
            keyElement.dataset.key = key;

            const ruElement = document.createElement('div');
            ruElement.classList.add('ru');
            ruElement.innerHTML = `<span class='caseDown hidden'>${config[key].ru.caseDown}</span><span class='caseUp hidden'>${config[key].ru.caseUp}</span><span class='caps hidden'>${config[key].ru.caps}</span><span class='shiftCaps hidden'>${config[key].ru.shiftCaps}</span>`

            const enElement = document.createElement('div');
            enElement.classList.add('en');
            enElement.innerHTML = `<span class='caseDown '>${config[key].en.caseDown}</span><span class='caseUp hidden'>${config[key].en.caseUp}</span><span class='caps hidden'>${config[key].en.caps}</span><span class='shiftCaps hidden'>${config[key].en.shiftCaps}</span>`
            
            keyElement.appendChild(ruElement);
            keyElement.appendChild(enElement);

            rowElement.appendChild(keyElement);
        });
        keyboard.appendChild(rowElement);
    });
    document.body.appendChild(keyboard);
}
generateKeyboard()


let allKey = document.querySelectorAll(".key");
allKey.forEach((el) =>{
    el.addEventListener("mousedown", event => {
        el.classList.add('active');
    });
    el.addEventListener("mouseup", event => {
        el.classList.remove('active');
    });
});

function generateTextarea() {
    let screen = document.createElement('textarea');
    screen.classList.add('textarea');
    screen.id ='textarea';

    document.body.appendChild(screen);
}

generateTextarea();

let textereaElement = document.getElementById('textarea');

    allKey.forEach((el) =>{
        el.addEventListener("click", imput => {
            if ( document.querySelector('.active[data-key = ShiftLeft ]') || document.querySelector('.active[data-key = ShiftRight ]')){
                textereaElement.value = textereaElement.value + el.querySelector (".en").querySelector('.caseUP').innerText; 
            }
            if (document.querySelector('.active[data-key = CapsLock ]') || document.querySelector('.active[data-key = CapsLock ]')){
                textereaElement.value = textereaElement.value + el.querySelector (".en").querySelector('.caps').innerText; 
            }
            textereaElement.value = textereaElement.value + el.querySelector (".en").querySelector('.caseDown').innerText;
        });
    });


function init() {
    let title = "";
    let screen = "";
    let settings = "";
    title += "<div class = 'box'><h1 class = 'title'> Virual Ketboard </h1></div>";
    screen += "<textera class = 'screen'></textera>";
    settings += "<div class='box'></div>"
   // document.body.appendChild(keyboard);
}
init();


