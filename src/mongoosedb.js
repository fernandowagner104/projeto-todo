const mongoose = require("mongoose");

const user = "admin";
const pass = "yoda123456";
const database = "todo_sample";
const serverName = "cluster0.nnkcl4p.mongodb.net";


module.exports = {
    init: () => {
      mongoose
        .connect(
          `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };