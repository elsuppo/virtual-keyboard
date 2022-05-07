import data from './data';

function createKeyboard(keyboard, lang) {
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
      // add class for unique button
      if (e.class) {
        button.classList.add(e.class);
      }
      keyboardRow.append(button);
    });
    keyboard.append(keyboardRow);
  }
  return keyboard;
}

export default createKeyboard;
