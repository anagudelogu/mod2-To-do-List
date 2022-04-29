import './style.css';
import Ui, { LIST, VALUE } from './modules/ui.js';
import Storage from './modules/storage.js';
import Task from './modules/task.js';
import DragDrop from './modules/dragDrop.js';

// Display tasks from Local storage
window.addEventListener('DOMContentLoaded', () => {
  Ui.display();
  DragDrop.addEventListeners();
});

// Add task
const FORM = document.querySelector('form');
FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const TASK_LIST = Storage.getEntry();
  if (
    VALUE.value !== ''
    && !TASK_LIST.some((e) => e.description === VALUE.value)
  ) {
    // Get length Array
    const LENGTH = TASK_LIST.length;
    // Create new task
    const TASK = new Task(VALUE.value, LENGTH + 1);
    // Create element in UI
    Ui.createTask(TASK);
    // Add new task to local Storage
    Storage.addEntry(TASK);
    // Clear input
    Ui.clearInput();
  } else if (TASK_LIST.some((e) => e.description === VALUE.value)) {
    VALUE.value = 'This task already exists!';
    setTimeout(() => {
      Ui.clearInput();
    }, 2000);
  } else {
    VALUE.value = 'Please, enter a task.';
    setTimeout(() => {
      Ui.clearInput();
    }, 2000);
  }

  DragDrop.addEventListeners();
});

// Selected color, remove and edit
LIST.addEventListener('click', (e) => {
  const IN = e.target;
  const ACTIVE_TASKS = Array.from(
    document.querySelectorAll('.list__text'),
  );
  if (
    IN.classList.contains('list__text')
    || IN.classList.contains('list__task')
  ) {
    ACTIVE_TASKS.forEach((task) => {
      if (task.parentNode.classList.contains('selected')) {
        task.parentNode.classList.remove('selected');
        task.parentNode.children[2].innerText = 'more_vert';
      }
    });
    if (IN.classList.contains('list__text')) {
      IN.parentNode.classList.toggle('selected');
      const ICON = document.querySelector(
        '.selected .material-icons',
      );
      ICON.innerText = 'delete';

      // Remove a task
      ICON.addEventListener('click', (element) => {
        const ELEM = element.target;
        // Remove from UI
        Ui.removeTask(ELEM);
        // Remove from Storage
        Storage.delEntry(ELEM.parentNode.children[1].value);
      });

      // Edit a task
      const TASK_DESC = IN.value;
      IN.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          IN.blur();
        }
      });

      IN.addEventListener('change', () => {
        const VALUE = IN.value;
        IN.parentNode.classList.remove('selected');
        // Update Local Storage
        Storage.editEntry(TASK_DESC, VALUE);
        // Change Icon
        ICON.innerText = 'more_vert';
      });
    }
  }
});

// Completed
LIST.addEventListener('change', (e) => {
  if (e.target.classList.contains('list__checkbox')) {
    const DESC = e.target.parentNode.children[1].value;
    // Toggle completed on Local Storage
    Storage.taskCompleted(DESC);
  }
  // Clear all
  const COMPLETED_TASKS = Array.from(
    document.querySelectorAll('.list__checkbox:checked'),
  );
  const CLEAR_BUTTON = document.querySelector('.list__button');
  CLEAR_BUTTON.addEventListener('click', () => {
    // Ui
    Ui.clearCompleted(COMPLETED_TASKS);
    // Storage
    Storage.clearCompleted();
  });
});
