const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});

// .model take 2 parameters the fisrt what you want to have
// second is how to take out
const UserModel = model("Users", UserSchema);
// export to use it in the server.js
module.exports = UserModel;
