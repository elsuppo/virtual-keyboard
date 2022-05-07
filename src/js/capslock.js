function capslock(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    document.querySelectorAll('.button_text').forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = el.innerHTML.toLowerCase();
    });
  } else {
    button.classList.add('active');
    document.querySelectorAll('.button_text').forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = el.innerHTML.toUpperCase();
    });
  }
}

function isCapslock(button) {
  if (localStorage.getItem('caps') === 'false') {
    const caps = true;
    localStorage.setItem('caps', caps);
    capslock(button);
  } else {
    const caps = false;
    localStorage.setItem('caps', caps);
    capslock(button);
  }
}

export default isCapslock;
