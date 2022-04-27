import './style.css';
import Ui, { LIST, VALUE } from './modules/ui.js';
import Storage from './modules/storage.js';
import Task from './modules/task.js';

const FORM = document.querySelector('form');
// const TASKS = [
//   {
//     description: 'Wash the dishes',
//     completed: false,
//     index: 0,
//   },
//   {
//     description: 'Complete To-Do List project',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Clean my room',
//     completed: false,
//     index: 2,
//   },
// ];

// const DISPLAY = () => {
//   TASKS.forEach((task) => {
//     const LI_ITEM = LI.cloneNode(true);
//     const CHECK = INPUT.cloneNode(true);
//     const INPUT_TEXT = INPUT.cloneNode(true);
//     const ICON = SPAN.cloneNode(true);

//     LI_ITEM.classList.add('list__item');
//     CHECK.setAttribute('type', 'checkbox');
//     CHECK.classList.add('list__checkbox');
//     INPUT_TEXT.setAttribute('type', 'text');
//     INPUT_TEXT.setAttribute('name', 'task');
//     INPUT_TEXT.setAttribute('value', task.description);
//     INPUT_TEXT.classList.add('list__text');
//     ICON.classList.add('material-icons', 'gray');
//     ICON.innerText = 'more_vert';

//     LI_ITEM.append(CHECK, INPUT_TEXT, ICON);
//     LIST.appendChild(LI_ITEM);
//   });
// };

// DISPLAY();

//Display tasks from Local storage
Ui.display();

// Selected color
LIST.addEventListener('click', (e) => {
  const ACTIVE_TASKS = Array.from(
    document.querySelectorAll('.list__text')
  );
  if (
    e.target.classList.contains('list__text') ||
    e.target.classList.contains('list__task')
  ) {
    ACTIVE_TASKS.forEach((task) => {
      if (task.parentNode.classList.contains('selected')) {
        task.parentNode.classList.remove('selected');
      }
    });
    if (e.target.classList.contains('list__text')) {
      e.target.parentNode.classList.toggle('selected');
    }
  }
});

// Add task
FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  if (VALUE.value !== null) {
    //Get length Array
    const LENGTH = Storage.getEntry().length;
    //Create new task
    const TASK = new Task(VALUE.value, LENGTH + 1);
    //Create element in UI
    Ui.createTask(TASK);
    //Add new task to local Storage
    Storage.addEntry(TASK);
    //Clear input
    Ui.clearInput();
  }
});
