const revealBlock = document.querySelector('.reveal');

function isVisible(element) {
  return element.getBoundingClientRect().bottom > 0 && element.getBoundingClientRect().top < window.innerHeight;
}

window.addEventListener('scroll', () => {
  isVisible(revealBlock) ?
    revealBlock.classList.add('reveal_active') :
    revealBlock.classList.remove('reveal_active');
})