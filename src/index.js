import './styles/style.css';
import createKeyboard from './js/createKeyboard';
import desriptionInner from './js/descriptionInner';
import capslock from './js/capslock';

const body = document.querySelector('body');

let lang = 'en';

function getLocalStorage() {
  if (localStorage.getItem('lang_suppo')) {
    lang = localStorage.getItem('lang_suppo');
  } else {
    localStorage.setItem('lang_suppo', lang);
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

// change lang
document.addEventListener('keydown', (event) => {
  const button = keyboard.querySelector(`[data-code=${event.code}]`);
  if (button) {
    if ((event.altKey && event.shiftKey)
    || (button.dataset.code === 'AltRight' && event.shiftKey)) {
      if (localStorage.getItem('lang_suppo') === 'en') {
        lang = 'ru';
        localStorage.setItem('lang_suppo', lang);
      } else {
        lang = 'en';
        localStorage.setItem('lang_suppo', lang);
      }
      createKeyboard(keyboard, lang);
      description.innerHTML = desriptionInner(lang);
    }
  }
});

document.addEventListener('keydown', (event) => {
  // event.preventDefault();
  const button = keyboard.querySelector(`[data-code=${event.code}]`);

  // capslock
  if (event.code === 'CapsLock') {
    capslock(button);
  }
});

document.addEventListener('click', (event) => {
  // event.preventDefault();
  const button = event.target;

  // capslock
  if (button.classList.contains('button_capslock')) {
    capslock(button);
  }
});
