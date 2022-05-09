import config from './config.js';

const rows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const specButton = ['ShiftLeft', 'CapsLock', 'Tab', 'Backspace', 'Delete', 'Enter', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltRight', 'AltLeft', 'MetaLeft'];

let lang = window.localStorage.getItem('lang') || 'en';
let size = 'caseDown';
let sizeLast = 'caseUp';
let langLast = 'ru';

function generateTextarea() {
  const screen = document.createElement('textarea');
  screen.classList.add('textarea');
  screen.id = 'textarea';

  document.body.appendChild(screen);
  return screen;
}

const textereaElement = generateTextarea();

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
      ruElement.innerHTML = `<span class='caseDown hidden'>${config[key].ru.caseDown}</span><span class='caseUp hidden'>${config[key].ru.caseUp}</span><span class='caps hidden'>${config[key].ru.caps}</span><span class='shiftCaps hidden'>${config[key].ru.shiftCaps}</span>`;

      const enElement = document.createElement('div');
      enElement.classList.add('en');
      enElement.innerHTML = `<span class='caseDown hidden'>${config[key].en.caseDown}</span><span class='caseUp hidden'>${config[key].en.caseUp}</span><span class='caps hidden'>${config[key].en.caps}</span><span class='shiftCaps hidden'>${config[key].en.shiftCaps}</span>`;

      keyElement.appendChild(ruElement);
      keyElement.appendChild(enElement);

      rowElement.appendChild(keyElement);
    });
    keyboard.appendChild(rowElement);
  });
  document.body.appendChild(keyboard);
}
generateKeyboard();

const allKey = document.querySelectorAll('.key');

function keyboardStyle() {
  allKey.forEach((el) => {
    el.querySelector(`.${langLast}`).classList.add('hidden');
    el.querySelector(`.${lang}`).classList.remove('hidden');
    el.querySelector(`.${lang}`).querySelector(`.${sizeLast}`).classList.add('hidden');
    el.querySelector(`.${lang}`).querySelector(`.${size}`).classList.remove('hidden');
  });
}
keyboardStyle();

allKey.forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active');
  });

  el.addEventListener('mouseup', () => {
    el.classList.remove('active');
  });
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  document.querySelector(`[data-key=${e.code}]`).classList.add('active');
  if (specButton.includes(e.code)) {
    if (e.code === 'AltLeft' && e.ctrlKey === true) {
      if (lang === 'en') {
        lang = 'ru';
        langLast = 'en';
        window.localStorage.setItem('lang', lang);
        keyboardStyle();
      } else {
        lang = 'en';
        langLast = 'ru';
        window.localStorage.setItem('lang', lang);
        keyboardStyle();
      }
    }
    if (e.code === 'ShiftLeft') {
      size = 'caseUp';
      sizeLast = 'caseDown';
      keyboardStyle();
      return;
    }
    if (e.code === 'ShiftRight') {
      size = 'caseUp';
      sizeLast = 'caseDown';
      keyboardStyle();
      return;
    }
    if (e.code === 'Tab') {
      textereaElement.value += '  ';
      return;
    }
    if (e.code === 'Backspace') {
      textereaElement.value = textereaElement.value.substring(0, textereaElement.value.length - 1);
      return;
    }
    if (e.code === 'Enter') {
      textereaElement.value += '\n';
      return;
    }

    return;
  }
  if (document.querySelector(`[data-key=${e.code}]`)) {
    if (e.code === 'Space') {
      textereaElement.value += ' ';
    }
    textereaElement.value += document.querySelector(`.active[data-key=${e.code}]`).querySelector(`.${lang}`).querySelector(`.${size}`).innerText;
  }
});

document.addEventListener('keyup', (e) => {
  if (document.querySelector(`[data-key=${e.code}]`)) {
    document.querySelector(`[data-key=${e.code}]`).classList.remove('active');
    if (e.code === 'ShiftLeft') {
      size = 'caseDown';
      sizeLast = 'caseUp';
      keyboardStyle();
    }
    if (e.code === 'ShiftRight') {
      size = 'caseDown';
      sizeLast = 'caseUp';
      keyboardStyle();
    }
  }
});

allKey.forEach((el) => {
  el.addEventListener('click', () => {
    if (el.dataset.key === 'Space') {
      textereaElement.value += ' ';
      return;
    }
    if (el.dataset.key === 'Tab') {
      textereaElement.value += '  ';
      return;
    }
    if (el.dataset.key === 'Backspace') {
      textereaElement.value = textereaElement.value.substring(0, textereaElement.value.length - 1);
      return;
    }
    if (el.dataset.key === 'Enter') {
      textereaElement.value += '\n';
      return;
    }
    if (specButton.includes(el.dataset.key)) {
      return;
    }
    textereaElement.value += el.querySelector(`.${lang}`).querySelector('.caseDown').innerText;
  });
});
