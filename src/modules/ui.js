import Storage from './storage.js';

export const LIST = document.querySelector('.list');
export const VALUE = document.querySelector('.list__task');
const LI = document.createElement('li');
const INPUT = document.createElement('input');
const SPAN = document.createElement('span');

export default class Ui {
  static display() {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task) => {
      Ui.createTask(task);
    });
  }

  static createTask(task) {
    const LI_ITEM = LI.cloneNode(true);
    const CHECK = INPUT.cloneNode(true);
    const INPUT_TEXT = INPUT.cloneNode(true);
    const ICON = SPAN.cloneNode(true);

    LI_ITEM.classList.add('list__item');
    LI_ITEM.setAttribute('draggable', 'true');
    CHECK.setAttribute('type', 'checkbox');
    CHECK.classList.add('list__checkbox');
    INPUT_TEXT.setAttribute('type', 'text');
    INPUT_TEXT.setAttribute('name', 'task');
    INPUT_TEXT.setAttribute('value', task.description);
    INPUT_TEXT.classList.add('list__text');
    ICON.classList.add('material-icons', 'gray');
    ICON.innerText = 'more_vert';

    LI_ITEM.append(CHECK, INPUT_TEXT, ICON);
    LIST.appendChild(LI_ITEM);
  }

  static removeTask(element) {
    element.parentNode.remove();
  }

  static clearInput() {
    VALUE.value = '';
  }

  static clearCompleted(arr) {
    arr.forEach((element) => {
      element.parentNode.remove();
    });
  }
}
