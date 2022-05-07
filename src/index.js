import './styles/style.css';
import createKeyboard from './js/createKeyboard';
import desriptionInner from './js/descriptionInner';

const body = document.querySelector('body');

// eslint-disable-next-line prefer-const
let lang = 'en';

// Create DOM-elements
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
container.appendChild(textarea);

const description = document.createElement('div');
description.classList.add('description');
container.appendChild(description);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);

// Create inner DOM-elements
description.innerHTML = desriptionInner(lang);

createKeyboard(keyboard, lang);
