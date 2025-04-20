const revealBlock = document.querySelectorAll('.reveal');

function isVisible(element) {
  element.forEach((block) => {
    block.getBoundingClientRect().bottom > 0 && block.getBoundingClientRect().top < window.innerHeight ?
      block.classList.add('reveal_active') :
      block.classList.remove('reveal_active');
  })
}

window.addEventListener('scroll', () => {isVisible(revealBlock)})