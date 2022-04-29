export default class Storage {
  static getEntry() {
    let TASK_LIST;
    if (!localStorage.getItem('taskList')) {
      TASK_LIST = [];
    } else {
      TASK_LIST = JSON.parse(localStorage.getItem('taskList'));
    }
    return TASK_LIST;
  }

  static setEntry(entry) {
    localStorage.setItem('taskList', JSON.stringify(entry));
  }

  static addEntry(task) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.push(task);
    Storage.setEntry(TASK_LIST);
  }

  static delEntry(lastDesc) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task, index) => {
      if (lastDesc === task.description) {
        TASK_LIST.splice(index, 1);
        Storage.updateIndex(TASK_LIST);
      }
    });
    Storage.setEntry(TASK_LIST);
  }

  static editEntry(lastDesc, newDesc) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task) => {
      if (lastDesc === task.description) {
        task.description = newDesc;
      }
    });
    Storage.setEntry(TASK_LIST);
  }

  static taskCompleted(DESC) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task) => {
      if (DESC === task.description) {
        task.completed = !task.completed;
      }
    });
    Storage.setEntry(TASK_LIST);
  }

  static clearCompleted() {
    const TASK_LIST = Storage.getEntry();

    TASK_LIST.forEach((completedTask, index) => {
      if (completedTask.completed) {
        TASK_LIST.splice(index, 1);
        Storage.updateIndex(TASK_LIST);
      }
    });
    Storage.setEntry(TASK_LIST);
  }

  static updateIndex(arr) {
    arr.forEach((task, index) => {
      task.index = index + 1;
    });
    Storage.setEntry(arr);
  }

  static updateDragIndex(arr) {
    const TASK_LIST = Storage.getEntry();
    arr.forEach((task, index) => {
      TASK_LIST.forEach((t) => {
        if (task.value === t.description) {
          t.index = index + 1;
          TASK_LIST.sort((a, b) => a.index - b.index);
        }
      });
    });
    Storage.setEntry(TASK_LIST);
  }
}
