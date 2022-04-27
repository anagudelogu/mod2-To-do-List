import './style.css';
import Ui, { LIST, VALUE } from './modules/ui.js';
import Storage from './modules/storage.js';
import Task from './modules/task.js';

//Display tasks from Local storage
Ui.display();

// Add task
const FORM = document.querySelector('form');
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

// Selected color and remove
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
        task.parentNode.children[2].innerText = 'more_vert';
      }
    });
    if (e.target.classList.contains('list__text')) {
      e.target.parentNode.classList.toggle('selected');
      const ICON = document.querySelector(
        '.selected .material-icons'
      );
      ICON.innerText = 'delete';
      ICON.addEventListener('click', (element) => {
        const ELEM = element.target;
        //Remove from UI
        Ui.removeTask(ELEM);
        //Remove from Storage
        const TASK_LIST = Storage.getEntry();
        let index;
        TASK_LIST.forEach((task) => {
          if (
            ELEM.parentNode.children[1].value === task.description
          ) {
            index = task.index;
          }
        });
        Storage.delEntry(index);
      });
    }
  }
});
