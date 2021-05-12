import React, { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <>
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />{' '}
      +
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />{' '}
      = <output>{firstNumber + secondNumber}</output>
    </>
  );
};
