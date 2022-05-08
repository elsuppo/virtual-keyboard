function shiftDown() {
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

export default shiftDown;
