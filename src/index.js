import './style.css';

const LIST = document.querySelector('.list');
const LI = document.createElement('li');
const INPUT = document.createElement('input');
const TASKS = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To-Do List project',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean my room',
    completed: false,
    index: 2,
  },
];

const DISPLAY = () => {
  TASKS.forEach((task) => {
    const LI_ITEM = LI.cloneNode(true);
    const CHECK = INPUT.cloneNode(true);
    const INPUT_TEXT = INPUT.cloneNode(true);

    LI_ITEM.classList.add('list__item');
    CHECK.setAttribute('type', 'checkbox');
    CHECK.classList.add('list__checkbox');
    INPUT_TEXT.setAttribute('type', 'text');
    INPUT_TEXT.setAttribute('name', 'task');
    INPUT_TEXT.setAttribute('value', task.description);

    INPUT_TEXT.classList.add('list__text');

    LI_ITEM.append(CHECK, INPUT_TEXT);
    LIST.appendChild(LI_ITEM);
  });
};

DISPLAY();
