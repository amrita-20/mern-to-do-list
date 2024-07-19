const uuid = require("uuid").v4;

function makeTodoList() {
  const id1 = uuid();
  const id2 = uuid();

  const todoList = {};

  const todos = {
    [id1]: {
      id: id1,
      task: "sleep",
      status: false,
    },
    [id2]: {
      id: id2,
      task: "study",
      status: false,
    },
  };

  todoList.addTodos = (task) => {
    const id = uuid();
    todos[id] = {
      id,
      task: task,
      status: false,
    };
  };

  todoList.getTodos = () => {
    return todos;
  };

  return todoList;
}

module.exports = {
  makeTodoList,
};
