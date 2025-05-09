const textarea = document.querySelector('#editor');
const cached = localStorage.getItem('value');
const btnClear = document.querySelector('.btnClear')

textarea.addEventListener('input', setCaches);
btnClear.addEventListener('click', clearTextarea)

if (cached) {
  textarea.value = cached;
}

function setCaches () {
  localStorage.setItem('value', textarea.value);
}

function clearTextarea () {
  localStorage.removeItem('value');
  textarea.value = '';
}