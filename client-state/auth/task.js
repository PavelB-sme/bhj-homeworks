const signin = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const idUser = document.querySelector('#user_id');
const btnOut = document.querySelector('#btnOut');
const form = document.querySelector('#signin__form');
let errorTimeOut = null;
let cached = [];

try {
  cached = JSON.parse(localStorage.getItem('id')) || [];
} catch (e) {
  cached = [];
}

window.addEventListener('DOMContentLoaded', () => {
  if (cached.length > 0) {
    renderWelcome({ user_id: cached[0]});
  }
});

async function asyncFetch (url, data) {
  if(errorTimeOut) {
    clearTimeout(errorTimeOut);
    errorTimeOut = null;
  }

  const existingError = form.querySelector('.login_error');
  if (existingError) {
    existingError.remove();
  }

  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.message || `Ошибка: ${response.status}`);
  }

  const res = await response.json();

  if (!res.success) {
    if (!cached.includes(res.user_id)) {
      throw new Error('Неверный логин/пароль');
    }
  }
  return res;
}

function showError (message) {
  if (errorTimeOut) {
    clearTimeout(errorTimeOut);
    errorTimeOut = null;
  }

  const loginError = document.createElement('div');
  loginError.className = 'login_error';
  loginError.textContent = message;
  form.appendChild(loginError);

  errorTimeOut = setTimeout(() => {
    loginError.remove();
    errorTimeOut  = null;
  }, 1000)
}

function renderWelcome(data) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  btnOut.classList.add('btnOut_active');
  idUser.textContent = data.user_id;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitButton = e.target.querySelector('.btn');
  submitButton.disabled = true;

  try {
    if (errorTimeOut) {
      clearTimeout(errorTimeOut);
      errorTimeOut = null;
    }

    const existingError = form.querySelector('.login_error');
    if (existingError) {
      existingError.remove();
    }

    const formData = new FormData(form);
      if (!formData.get('login') || !formData.get('password')) {
        throw new Error ('Заполните оба поля');
      }

    const res = await asyncFetch('https://students.netoservices.ru/nestjs-backend/auth', formData);
      if (!cached.includes(res.user_id)) {
        cached = [res.user_id];
        localStorage.setItem('id', JSON.stringify(cached));
      }
      renderWelcome(res);
  } catch (error) {
    showError(error.message);
    console.error('Ошибка:', error);
  }
  finally {
    submitButton.disabled = false;
  }
})

btnOut.addEventListener('click',(e) => {
  localStorage.removeItem('id');
  signin.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  btnOut.classList.remove('btnOut_active');
})