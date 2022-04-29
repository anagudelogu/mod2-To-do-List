import Storage from './storage.js';

export default class DragDrop {
  static addEventListeners() {
    const DRAGGABLES = document.querySelectorAll(
      '.list__item:not(:nth-child(1))',
    );
    const DRAG_CONTAINER = document.querySelector('.list');

    DRAGGABLES.forEach((draggable) => {
      draggable.addEventListener('dragstart', DragDrop.dragStart);
      draggable.addEventListener('dragend', DragDrop.dragEnd);
    });
    DRAG_CONTAINER.addEventListener('dragover', DragDrop.dragOver);
  }

  static dragStart(e) {
    const elem = e.target;
    elem.classList.add('dragging');
  }

  static dragEnd(e) {
    const elem = e.target;
    elem.classList.remove('dragging');
    const NEW_ORDER = [...document.querySelectorAll('.list__text')];
    // Storage
    Storage.updateDragIndex(NEW_ORDER);
  }

  static dragOver(e) {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    const DRAG_CONTAINER = document.querySelector('.list');
    const afterElement = DragDrop.getAfterElement(
      DRAG_CONTAINER,
      e.clientY,
    );
    if (afterElement === null) {
      DRAG_CONTAINER.appendChild(dragging);
    } else {
      DRAG_CONTAINER.insertBefore(dragging, afterElement);
    }
  }

  static getAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(
        '.list__item:not(:nth-child(1)):not(.dragging)',
      ),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        }
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }
}
