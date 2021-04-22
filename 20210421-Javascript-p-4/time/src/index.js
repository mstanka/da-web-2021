'use strict';

import './style.css';
import Time from './Time';
import Timezones from './Timezones';

fetch('http://worldtimeapi.org/api/timezone')
  .then((resp) => resp.json())
  .then((json) => {
    const zoneSelectElm = document.querySelector('#zone-select');
    zoneSelectElm.innerHTML = Timezones({ zones: json });
  });

const btnShow = document.querySelector('#btn-show');
btnShow.addEventListener('click', () => {
  const zonesSelect = document.querySelector('#zones');
  const mainElm = document.querySelector('main');

  fetch(`http://worldtimeapi.org/api/timezone/${zonesSelect.value}`)
    .then((resp) => resp.json())
    .then((json) => {
      mainElm.innerHTML = Time({
        zone: zonesSelect.value,
        datetime: json.datetime,
      });
    });
});
