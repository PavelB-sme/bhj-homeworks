const btnDropdown = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const items = [...document.querySelectorAll(".dropdown__item")];
const dropdownLinks = [...document.querySelectorAll(".dropdown__link")];

btnDropdown.addEventListener('click' , () => {
  dropList.classList.toggle('dropdown__list_active');
})

dropdownLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
  })
})

items.forEach( i => {
    i.addEventListener( 'click', () => {
      btnDropdown.textContent =  i.textContent;
      dropList.classList.remove('dropdown__list_active')
    })
})

document.addEventListener('click', (event) => {
  if (!btnDropdown.contains(event.target) && !dropList.contains(event.target)) {
    dropList.classList.remove('dropdown__list_active');
  }
});





