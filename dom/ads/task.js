const rotators = document.querySelector('.rotator')
const initialActive = rotators.querySelector('.rotator__case_active');
const speed = +(initialActive.dataset.speed);
initialActive.style.color = initialActive.dataset.color;

function rotate (a) {

    const target = a.querySelector('.rotator__case_active');
    const next = target.nextElementSibling || a.firstElementChild;

    target.classList.remove('rotator__case_active');
    next.classList.add('rotator__case_active');
    next.style.color = next.dataset.color;
    const newSpeed = +(next.dataset.speed);
    setTimeout(() => {rotate(a)}, newSpeed);
}

setTimeout(()=> rotate(rotators), speed);

