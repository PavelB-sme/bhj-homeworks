const tabs = [...document.querySelectorAll('.tab')];
const tabContents = [...document.querySelectorAll('.tab__content')];

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((e) => {
      e.classList.remove('tab_active');
    })
    tab.classList.add('tab_active');

    const indexContentActive = tabs.findIndex(item => item.classList.contains('tab_active'));
    tabContents.forEach((activeContent, index) => {
      tabContents.forEach(i => {
        i.classList.remove('tab__content_active')
      })
      index = indexContentActive;
      tabContents[index].classList.add('tab__content_active');
    })
  })

})
