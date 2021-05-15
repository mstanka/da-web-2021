import React, { useState, useEffect } from 'react';

const App = () => {
  const [datetime, setDatetime] = useState(' ');
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => {
        setDatetime(data.datetime);
        console.log(data.datetime);
      });
  }, [timezone]);

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  return (
    <form>
      <select onChange={handleTimezoneChange} value={timezone}>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Europe/Prague">Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
      <div>
        {timezone} - {datetime}
      </div>
    </form>
  );
};

export default App;
