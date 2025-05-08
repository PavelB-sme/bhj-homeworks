const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if(document.cookie === 'modal.className="modal_active"') {
    modal.classList.remove('modal_active');
  } else {
    modal.classList.add('modal_active');
  }
  
  modalClose.addEventListener('click', (e) => {
    modal.classList.toggle('modal_active');
    document.cookie = 'modal.className="modal_active";';
  })
});