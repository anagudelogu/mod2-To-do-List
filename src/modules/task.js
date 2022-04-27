export default class Task {
  description;
  completed = false;
  index;
  constructor(desc, index, completed) {
    this.description = desc;
    this.index = index;
    this.completed = completed;
  }
}
