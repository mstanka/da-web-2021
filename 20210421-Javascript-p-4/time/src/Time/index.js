import './style.css';

const Time = (props) => {
  return `
    <div class="time">
      <span class="zone">${props.zone}</span>
      :
      <span class="datetime">${props.datetime}</span>
    </div>
  `;
};

export default Time;
