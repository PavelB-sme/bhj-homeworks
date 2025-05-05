const img = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
const cachedData = localStorage.getItem('currencyData');


if (cachedData) {
  displayCurrencyData(JSON.parse(cachedData));
  img.classList.remove('loader_active');
} else {
  loadCurrencyData();
}

function loadCurrencyData() {
  img.classList.add('loader_active');
  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
  xhr.send();
}

function displayCurrencyData(response) {
  items.innerHTML = '';
  const valute = response.response.Valute;

  for (let element in valute) {
    const item = document.createElement('div');
    const itemCode = document.createElement('div');
    const itemValue = document.createElement('div');
    const itemCurrency = document.createElement('div');

    item.className = 'item';
    itemCode.className = 'item__code';
    itemValue.className = 'item__value';
    itemCurrency.className = 'item__currency';

    itemCode.textContent = valute[element].CharCode;
    itemValue.textContent = valute[element].Value;
    itemCurrency.textContent = 'руб.';

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    items.appendChild(item);
  }
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);

    localStorage.setItem('currencyData', xhr.responseText);

    displayCurrencyData(response);
    img.classList.remove('loader_active');
  }
});