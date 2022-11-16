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
      return k.dueDate < today ? true : false;
    });

    return ans;
  };

  const dueToday = () => {
    // aa = []
    // for (let i = 0; i < all.length; i++) {
    //   a = []
    //   if(all[i].dueDate === new Date().toLocaleDateString("en-CA")){
    //       if(all[i].completed === false)
    //         a.push("[ ]")
    //       else
    //         a.push("[x]")
    //       a.push(all[i].title)
    //   }
    //   if(a.length!=0)
    //   aa.push(a)
    // }
    // return aa;

    const todayDate = new Date();
    const today = formatDate(todayDate);

    const ans = all.filter((k) => {
      return k.dueDate === today ? true : false;
    });

    return ans;
  };

  const dueLater = () => {
    // aa = []
    // for (let i = 0; i < all.length; i++) {
    //   a = []
    //   if(all[i].dueDate > new Date().toLocaleDateString("en-CA")){
    //       if(all[i].completed === false)
    //         a.push("[ ]")
    //       else
    //         a.push("[x]")
    //       a.push(all[i].title)
    //   }
    //   if(a.length!=0)
    //   aa.push(a)
    //   a.push(all[i].dueDate)
    // }
    // return aa;

    const todayDate = new Date();
    const today = formatDate(todayDate);

    const ans = all.filter((k) => {
      return k.dueDate > today ? true : false;
    });

    return ans;
  };

  const toDisplayableList = (list) => {
    const todayDate = new Date();
    const today = formatDate(todayDate);

    const arr = list.map((k) => {
      if (list[0].dueDate === today) {
        if (!k.completed) return "[ ]" + k.title;
        return "[x]" + k.title;
      } else {
        if (!k.completed) return "[ ]" + k.title + " " + k.dueDate;
        return "[x]" + k.title + " " + k.dueDate;
      }
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

//   const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// eslint-disable-next-line max-len
// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// eslint-disable-next-line max-len
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n\n")
