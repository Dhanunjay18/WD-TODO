/* eslint-disable linebreak-style */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Latest TODO test Cases", () => {
  beforeAll(() => {
    [
      {
        title: "Assignment Done",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Play Cricket",
        completed: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 1)
        ).toLocaleDateString("en-CA"), // test case for yesterday
      },
      {
        title: "Do Coding",
        completed: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() + 1)
        ).toLocaleDateString("en-CA"), // test cse for tommorow
      },
    ].forEach(add);
  });
  test("Creating New Todo", () => {
    // Test for checking creating new todo
    expect(all.length).toEqual(3);

    add({
      title: "Go to Library",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toEqual(4);
  });

  test("Check for todos due later", () => {
    expect(dueLater().length).toEqual(1); // Only Play Cricket Test Cases
  });

  test("Check for todos overdue", () => {
    expect(overdue().length).toEqual(1); // Only Do Coding test cases
  });

  test("Check for todos due today", () => {
    // eslint-disable-next-line max-len
    expect(dueToday().length).toEqual(2); // Go to Library and Assignment Done TODOS
  });

  test("Check todos", () => {
    // Checking marking a todo as completed
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });
});
