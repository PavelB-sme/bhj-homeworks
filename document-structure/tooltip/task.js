const linksTooltip = document.querySelectorAll('.has-tooltip')

linksTooltip.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const textTooltip = target.title;
    const positionLink = target.getBoundingClientRect();
    const topTooltip = positionLink.bottom;
    const leftTooltip = positionLink.left;

    target.insertAdjacentHTML('afterbegin', `<div class="tooltip tooltip_active" style="left: ${leftTooltip}px; top: ${topTooltip}px">
     ${textTooltip}
    </div>`)

  })
})

document.addEventListener('scroll', e => {
  const tooltip = document.querySelector('.tooltip_active')
  if(tooltip.classList.contains('tooltip_active')) {
    tooltip.remove();
  }
})

document.addEventListener('click', e => {
  const tooltip = document.querySelector('.tooltip_active')
  if(!e.target.classList.contains('has-tooltip')) {
    tooltip.remove();
  }
})