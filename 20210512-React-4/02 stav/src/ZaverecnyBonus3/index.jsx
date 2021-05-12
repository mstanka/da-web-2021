import React from 'react';
import { useCasVSekundach } from './hodiny';

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05.

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();

  const hours = Math.floor(casVSekundach / 3600);
  const minutes = Math.floor((casVSekundach % 3600) / 60);
  const seconds = casVSekundach % 60;

  const time =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0');

  return (
    <>
      Čas právě teď: <b>{time}</b>
    </>
  );
};
