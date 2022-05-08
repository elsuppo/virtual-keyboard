import data from './data';

function createKeyboard(keyboard, lang) {
  // eslint-disable-next-line no-param-reassign
  keyboard.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboard.appendChild(keyboardRow);
    data[i].forEach((e) => {
      let buttonInner;
      if (e.key.ru && e.key.en) {
        buttonInner = e.key[lang];
      } else {
        buttonInner = e.key;
      }
      // create button element
      const button = document.createElement('div');
      button.classList.add('button');
      button.innerHTML = buttonInner;
      button.dataset.code = e.code;
      // add additional class for button
      if (e.class) {
        button.classList.add(e.class);
      }
      keyboardRow.append(button);
    });
    keyboard.append(keyboardRow);
  }

  const capslockBtn = document.querySelector('.button_capslock');
  if (localStorage.getItem('caps') === 'false') {
    if (capslockBtn.classList.contains('active')) {
      capslockBtn.classList.remove('active');
    }
    document.querySelectorAll('.button_text').forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = el.innerHTML.toLowerCase();
    });
  } else {
    document.querySelector('.button_capslock').classList.add('active');
    document.querySelectorAll('.button_text').forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = el.innerHTML.toUpperCase();
    });
  }

  return keyboard;
}

export default createKeyboard;
