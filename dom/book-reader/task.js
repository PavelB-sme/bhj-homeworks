const book = document.querySelector('#book');
const bookControlFontSize = document.querySelector('.book__control_font-size');
const bookControlColor = document.querySelector('.book__control_color');
const bookControlBackground = document.querySelector('.book__control_background');

bookControlFontSize.addEventListener('click', e => {
  const target = e.target;
  const active = target.classList.contains('font-size_active');
  e.preventDefault();

  if (!active) {
    [...bookControlFontSize.children].forEach((child) => {
      child.classList.remove('font-size_active');
      target.classList.add('font-size_active');
    })
  }
  book.classList.remove('book_fs-small', 'book_fs-big');
  const size = e.target.dataset.size;
  if (size) {
    book.classList.add(`book_fs-${size}`);
  }
});

bookControlColor.addEventListener('click', e => {
  const target = e.target;
  const active = target.classList.contains('color_active');

  if(!active && !target.classList.contains('color__title') && !target.classList.contains('book__control_color')) {
    [...bookControlColor.children].forEach((child) => {
      child.classList.remove('color_active');
      target.classList.add('color_active');
      book.style.color = target.dataset.textColor;
      e.preventDefault();
    })
  }
});

bookControlBackground.addEventListener('click', e => {
  const target = e.target;
  const active = target.classList.contains('color_active');

  if(!active && !target.classList.contains('color__title') && !target.classList.contains('book__control_background')) {
    [...bookControlBackground.children].forEach((child) => {
      child.classList.remove('color_active');
      target.classList.add('color_active');
      book.style.background = target.dataset.bgColor;
      e.preventDefault();
    })
  }
});

