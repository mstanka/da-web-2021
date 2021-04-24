'use strict';

const tasks = [
  {
    name: 'Vyprat košile',
    due: {
      time: 3,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Nakoupit na nedělní oběd',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 6,
      unit: 'hour',
    },
    done: false,
  },
  {
    name: 'Zopakovat si funkce vyšších řádů',
    due: {
      time: 8,
      unit: 'hour',
    },
    notify: {
      time: 30,
      unit: 'minute',
    },
    done: true,
  },
  {
    name: 'Dát výpověď v práci',
    due: {
      time: 14,
      unit: 'day',
    },
    notify: {
      time: 4,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Jít si zaběhat',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'hour',
    },
    done: true,
  },
];

// Vytvořte pole, které obsahuje pouze názvy všech úkolů.
const taskNames = tasks.map((task) => task.name);
console.log(taskNames);

// Vytvořte pole, které obsahuje objekty pouze těch úkolů, které již byly splněny.
const taskDone = tasks.filter((task) => task.done === true);
console.log(taskDone);

// Vytvořte pole, které obsahuje objekty pouze těch úkolů, které mají být splněný během následujících tří dnů.
const taskInThreeDays = tasks.filter(
  (task) => task.due.time <= 3 && task.due.unit === 'day',
);
console.log(taskInThreeDays);

// Máme-li pole úkolů, které mají být splněny do tří dnů, zjistěte, zda jsou všechny úkoly z tohoto seznamu již splněny.
const tasksAllDone = taskInThreeDays.every((task) => task.done === true);
console.log(tasksAllDone);
