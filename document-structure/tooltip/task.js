const linksTooltip = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

function createTooltip(element, textTooltip) {
  if (activeTooltip) {
    activeTooltip.remove();
  }

  const rect = element.getBoundingClientRect();
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = textTooltip;

  tooltip.style.position = 'absolute';
  tooltip.style.top = `${rect.bottom + window.pageYOffset}px`;
  tooltip.style.left = `${rect.left + window.pageXOffset}px`;

  document.body.appendChild(tooltip);
  return tooltip;
}

document.addEventListener('scroll', () => {
  if (activeTooltip) {
    activeTooltip.remove();
    activeTooltip = null;
  }
});

linksTooltip.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetElement = e.currentTarget;
    const textTooltip = targetElement.title;

    if (activeTooltip && activeTooltip.parentElement === targetElement) {
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }

    activeTooltip = createTooltip(targetElement, textTooltip);
  });
});

document.addEventListener('click', (e) => {
  const clickedElement = e.target;
  const isTooltipLink = clickedElement.classList.contains('has-tooltip') ||
    clickedElement.closest('.has-tooltip');

  if (!isTooltipLink && activeTooltip) {
    activeTooltip.remove();
    activeTooltip = null;
  }
});