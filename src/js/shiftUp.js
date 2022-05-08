function shiftUp() {
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

export default shiftUp;
