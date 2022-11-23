const { Sequelize } = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "DON";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection Successfully established');
//     })
//     .catch((error) => {
//       con sole.log('Connection Failed', error);
//     });

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
