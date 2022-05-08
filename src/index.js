import './styles/style.css';
import createKeyboard from './js/createKeyboard';
import desriptionInner from './js/descriptionInner';
import isCapslock from './js/capslock';

const body = document.querySelector('body');

let lang = 'en';
let caps = false;

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  } else {
    localStorage.setItem('lang', lang);
  }

  if (localStorage.getItem('caps')) {
    caps = localStorage.getItem('caps');
  } else {
    localStorage.setItem('caps', caps);
  }
}

getLocalStorage();

// Create DOM-elements
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
container.appendChild(textarea);
textarea.focus();

const description = document.createElement('div');
description.classList.add('description');
container.appendChild(description);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);

// Create inner DOM-elements
description.innerHTML = desriptionInner(lang);
createKeyboard(keyboard, lang);

// ----KEYBOARD----
const buttons = document.querySelectorAll('.button');
const keyArr = [];
buttons.forEach((el) => {
  keyArr.push(el.dataset.code);
});

document.addEventListener('keydown', (event) => {
  const button = keyboard.querySelector(`[data-code=${event.code}]`);

  // сhange lang
  if (keyArr.includes(event.code)) {
    if ((event.altKey && event.shiftKey)
      || (button.dataset.code === 'AltRight' && event.shiftKey)) {
      if (localStorage.getItem('lang') === 'en') {
        lang = 'ru';
        localStorage.setItem('lang', lang);
      } else {
        lang = 'en';
        localStorage.setItem('lang', lang);
      }
      createKeyboard(keyboard, lang);
      description.innerHTML = desriptionInner(lang);
    }
  }

  // shift
  if (event.shiftKey) {
    document.querySelectorAll('.button_text').forEach((el) => {
      if (localStorage.getItem('caps') === 'false') {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toUpperCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toLowerCase();
      }
    });
  }

  // capslock
  if (event.code === 'CapsLock') {
    isCapslock(button);
  }

  // animation
  if (keyArr.includes(event.code) && event.code !== 'CapsLock') {
    button.style.background = '#808080';
  }
});

document.addEventListener('keyup', (event) => {
  const button = keyboard.querySelector(`[data-code=${event.code}]`);
  if (keyArr.includes(event.code) && event.code !== 'CapsLock') {
    button.style.background = '#000000';
  }

  // shift
  if (event.key === 'Shift') {
    document.querySelectorAll('.button_text').forEach((el) => {
      if (localStorage.getItem('caps') === 'false') {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toLowerCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toUpperCase();
      }
    });
  }
});

// ----MOUSE----
document.addEventListener('click', (event) => {
  let button;
  if (event.target.classList.contains('button')) {
    button = event.target;
  } else {
    return;
  }

  // capslock
  if (button.classList.contains('button_capslock')) {
    isCapslock(button);
  }
});

// mouseDOWN
document.addEventListener('mousedown', (event) => {
  let button;
  if (event.target.classList.contains('button')) {
    button = event.target;
  } else {
    return;
  }

  // shift
  if (button.classList.contains('button_leftshift')
    || button.classList.contains('button_rightshift')) {
    document.querySelectorAll('.button_text').forEach((el) => {
      if (localStorage.getItem('caps') === 'false') {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toUpperCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toLowerCase();
      }
    });
  }

  // space
  if (button.classList.contains('button_space')) {
    textarea.value += ' ';
  }

  // animation
  if (!button.classList.contains('button_capslock')) {
    button.style.background = '#808080';
  }

  // textarea
  if (button.classList.contains('button_text')
  || button.classList.contains('button_digit')) {
    textarea.value += button.innerHTML;
  }
});

// mouseUP
document.addEventListener('mouseup', (event) => {
  let button;
  if (event.target.classList.contains('button')) {
    button = event.target;
  } else {
    return;
  }

  // shift
  if (button.classList.contains('button_leftshift')
    || button.classList.contains('button_rightshift')) {
    document.querySelectorAll('.button_text').forEach((el) => {
      if (localStorage.getItem('caps') === 'false') {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toLowerCase();
      } else {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = el.innerHTML.toUpperCase();
      }
    });
  }

  // animation
  if (!button.classList.contains('button_capslock')) {
    button.style.background = '#000000';
  }
});

// textarea
textarea.addEventListener('blur', (e) => {
  e.target.focus();
});
