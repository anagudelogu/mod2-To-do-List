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

  static delEntry(entry) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task, i) => {
      if (entry.index === task.index) {
        TASK_LIST.splice(i, 1);
      }
    });
    Storage.setEntry(TASK_LIST);
  }

  static editEntry(entry, desc) {
    const TASK_LIST = Storage.getEntry();
    TASK_LIST.forEach((task) => {
      if (entry.index === task.index) {
        task.description = desc;
      }
    });
    Storage.setEntry(TASK_LIST);
  }
}
