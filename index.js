/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const { connect } = require("./connectDB");
const { count } = require("./TodoModel");
const Todo = require("./TodoModel");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second Item",
      dueDate: new Date(),
      completed: true,
    });
    console.log("Created todo with ID : ", todo.id);
  } catch (error) {
    console.error(error);
  }
};

const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log("Found ", totalCount, "items in the table!");
  } catch (error) {
    console.error(error);
  }
};

const getAllTodos = async () => {
  try {
    const todos = await await Todo.findAll({
      order: [["id", "DESC"]],
    });
    const todoList = todos.map((todo) => {
      const str = todo.displayableString();
      return todo.dueDate === new Date().toLocaleDateString("en-CA")
        ? str.substring(0, str.length - 10)
        : str;
    });
    console.log(todoList.join("\n"));
  } catch (error) {
    console.error(error);
  }
};

const getSingleTodo = async () => {
  try {
    const todo = await await Todo.findOne({
      order: [["id", "DESC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

const updateTodo = async (id) => {
  try {
    await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (id) => {
  try {
    await Todo.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  // await createTodo();
  //   await countItems();
  //   await getAllTodos();
  //   await getSingleTodo();
  //   await updateTodo(2);
  //   await getAllTodos();
  //   await deleteItem(3);
  await getAllTodos();
})();
