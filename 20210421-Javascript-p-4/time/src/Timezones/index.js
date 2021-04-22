import './style.css'

const Timezones = (props) => {
  let result = '<label for="zones">Časová zóna:</label>';
  result += '<select id="zones">';

  for (let i = 0; i < props.zones.length; i++) {
    result += `<option value="${props.zones[i]}">${props.zones[i]}</option>`;
  }

  result += '</select>';
  return result;
};

export default Timezones;