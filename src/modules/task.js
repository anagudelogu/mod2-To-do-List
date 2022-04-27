export default class Task {
  description;

  completed;

  index;

  constructor(desc, index, completed = false) {
    this.description = desc;
    this.index = index;
    this.completed = completed;
  }
}
