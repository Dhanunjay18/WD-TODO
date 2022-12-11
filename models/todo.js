/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
// models/todo.js
// import { sequelize } from '.';
// import Op from Sequelize;
"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      console.log(
        (await Todo.overdue())
          .map((todo) => todo.displayableString())
          .join("\n")
      );
      console.log("\n");

      console.log("Due Today");
      console.log(
        (await Todo.dueToday())
          .map((todo) => {
            const str = todo.displayableString();
            return str.substring(0, str.length - 11);
          })
          .join("\n")
      );
      console.log("\n");

      console.log("Due Later");
      console.log(
        (await Todo.dueLater())
          .map((todo) => todo.displayableString())
          .join("\n")
      );
    }

    static async overdue() {
      const todos = await Todo.findAll({
        where: {
          dueDate: {
            [Op.lt]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });
      // const todoList = todos.map((todo) => {
      //   return todo.displayableString();
      // });
      // return todoList.join('\n');
      // console.log(typeof(todos));
      return todos;
    }

    static async dueToday() {
      const todos1 = await Todo.findAll({
        where: {
          dueDate: {
            [Op.eq]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });
      // const todoList1 = todos1.map((todo) => {
      //   const str = todo.displayableString();
      //   return todo.dueDate === new Date().toLocaleDateString('en-CA') ?
      //     str.substring(0, str.length - 10) :
      //     str;
      // });
      // return todoList1.join('\n');
      return todos1;
    }

    static async dueLater() {
      const todos2 = await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: new Date().toLocaleDateString("en-CA"),
          },
        },
      });
      // const todoList2 = todos2.map((todo) => {
      //   return todo.displayableString();
      // });
      // return todoList2.join('\n');
      return todos2;
    }

    static async markAsComplete(id) {
      await Todo.update(
        { completed: true },
        {
          where: {
            id: id,
          },
        }
      );
    }
    displayableString() {
      const checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
