class Task {                                              // class to create class object
  constructor(name, dueDate, status = "Pending") {
    this.name = name;
    this.dueDate = dueDate;
    this.status = status;
  }
}
class TaskManager {                                       //class for task manager
  constructor() {
    this.tasks = [];
    this.users =
