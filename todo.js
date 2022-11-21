/* eslint-disable max-len */
// const { format } = require('prettier')

const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const formatDate = (dd) => {
    return dd.toISOString().split("T")[0];
  };

  const overdue = () => {
    const todayDate = new Date();
    const today = formatDate(todayDate);

    const ans = all.filter((k) => {
      return k.dueDate < today;
    });

    return ans;
  };

  const dueToday = () => {
    const todayDate = new Date();
    const today = formatDate(todayDate);

    const ans = all.filter((k) => {
      return k.dueDate === today;
    });

    return ans;
  };

  const dueLater = () => {
    const todayDate = new Date();
    const today = formatDate(todayDate);

    const ans = all.filter((k) => {
      return k.dueDate > today;
    });

    return ans;
  };

  const toDisplayableList = (list) => {
    const arr = list.map((k) => {
      const statusComplettion = k.completed ? "[x]" : "[ ]";
      const datetobedisplayed =
        k.dueDate === new Date().toLocaleDateString("en-CA") ? "" : k.dueDate;
      return statusComplettion + " " + k.title + " " + datetobedisplayed;
    });
    return arr.join("\n");
  };

  // eslint-disable-next-line max-len
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
