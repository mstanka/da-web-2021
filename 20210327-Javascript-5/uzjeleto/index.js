const leto = dayjs('2021-06-22');
const dnes = dayjs();
const msgEl = document.querySelector('#msg');

msgEl.textContent = dnes.isBefore(leto)
  ? 'Ne, ještě není léto... 😟😟😟'
  : 'Anoo, už je léto!!! ☀☀☀☀☀';
