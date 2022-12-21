export default class ToDoList {
  constructor(taskList = []) {
    this.taskList = taskList;
  }

  get getTaskList() {
    return this.taskList;
  }

  set setTaskList(newTaskList = []) {
    if (!newTaskList) return;
    this.taskList = newTaskList;
  }

  getLength() {
    return this.taskList.length;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
    this.updateTaskIndex();
  }

  updateTaskIndex() {
    this.taskList.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.taskList.length; i += 1) {
      this.taskList[i].index = i;
    }
  }

  removeCompleted() {
    this.taskList = this.taskList.filter((task) => !task.completed);
  }

  sortTasks() {
    this.taskList.forEach ((task, index) => task.index = index);
  }
}