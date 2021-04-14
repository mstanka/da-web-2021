'use strict';

// Podívejte se, jak stránka vypadá. Smažte obsah elementu todo__tasks uvnitř souboru index.html, ale zapamatujte si, jak se v HTML vytvoří jeden úkol.
// V JavaScriptu vytvořte pole objektů tasks, které bude reprezentovat seznam úkolů. Každý úkol bude mí zatím pouze název.
// Vytvořte komponentu Task, která na vstupu očekává jeden úkol a vytvoří pro něj patřičné HTML.
// Zavolejte funkci Task v cyklu přes pole úkolů a zapojte výsledek do vaší stránky.

// const tasks = [
//   {
//     name: 'Vyprat ponožky',
//   },
//   {
//     name: 'Naučit se funkce vyššího řádu',
//   },
//   {
//     name: 'Nakoupit na víkend',
//   },
//   {
//     name: 'Zavolat babi',
//   },
// ];

// const Task = (props) => {
//   return `
//     <div class="task">${props.name}</div>
//   `;
// };

// const todoTasksEl = document.querySelector('.todo__tasks');

// for (let i = 0; i < tasks.length; i++) {
//   todoTasksEl.innerHTML += Task(tasks[i]);
// }

////////////////////////////
// Vytvořte další komponentu TasksList, která na vstupu props očekává objekt obsahující pole úkolů v tomto tvaru.
//   {
//     tasks: [
//       // array of tasks
//     ]
//   }
// Z HTML odstraňte celý prvek todo__tasks a nechte komponentu TasksList vytvořit celý tento prvek i s jeho obsahem. Komponenta TasksList tedy bude postupně v cyklu volat komponentu Task a vrátí HTML celého divu s třdiou todo__taska.
// Zavolejte funkci TasksList, předejte jí všechny úkoly v očekávaném formátu tasks a zapojte výsledek funkce do vaší stránky na konec elementu s třidou todo.

const todoEl = document.querySelector('.todo');

const taskslist = {
  tasks: [
    {
      name: 'Vyprat ponožky',
    },
    {
      name: 'Naučit se funkce vyššího řádu',
    },
    {
      name: 'Nakoupit na víkend',
    },
    {
      name: 'Zavolat babi',
    },
  ],
};

const Task = (props) => {
  return `
    <div class="task">${props.name}</div>
  `;
};

const TasksList = (props) => {
  for (let i = 0; i < props.tasks.length; i++) {
    todoEl.innerHTML += Task(props.tasks[i]);
  }
  return `
    <div class="todo__tasks">${props.tasks}</div>
  `;
};

TasksList(taskslist);
