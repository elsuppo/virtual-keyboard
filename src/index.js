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

document.addEventListener('keydown', (event) => {
  const button = keyboard.querySelector(`[data-code=${event.code}]`);

  // сhange lang
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

  // capslock
  if (event.code === 'CapsLock') {
    isCapslock(button);
  }
});

document.addEventListener('click', (event) => {
  // event.preventDefault();
  const button = event.target;

  // capslock
  if (button.classList.contains('button_capslock')) {
    isCapslock(button);
  }
});
