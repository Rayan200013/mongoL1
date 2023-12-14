const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());

// we have in app.listen function 2 Parameters, a and b
// a is the port numnber & b what you want to do after listneing to this port

// create three constants (username, password, database)
// but we should use the .env file here
const username = process.env.USERNAME,
  password = process.env.PASSWORD,
  database = process.env.DATABASE;
// we need to link our server(backend) with our database
const mongoose = require("mongoose");
// We use the method(function) connect to create the connection
mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.zpxyep1.mongodb.net/${database}?retryWrites=true&w=majority`
);

// if you have alot of modals, just comment out a big title called MODALs

// to make tafa3oul with the database we need the modal
// Every document need a model la t3aber aano

// import UserModel
const UserModel = require("./models/Users");

// anything that we order it from the web is a get request
// app.get takes 2 parameters
// first one is the path of our website (localhost:3000/home)
// second parameter is a callback function which will be executed when someone orders something from this path
app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// app.post() method will go to the create user post the user after he press on the button
// we get the information frpm the database by the req in the the post action not the res
app.post("/createUser", async (req, res) => {
  const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
