const express = require("express").Router();
const route = require("express").Router();
const bcrypt = require("bcrypt");

const userModel = require("./schema");
const { register } = require("./validation");
const {login} = require('./validation')

// to register a data
route.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const newUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: hash
  });
  try {
    const { error } = register(req.body);
    if (error) return res.status(404).send(error.message);

    const emailExists = await userModel.findOne({ email: req.body.email });
    if (emailExists) return res.status(404).send("email is already exists");

    const saveData = await newUser.save();
    res.send(saveData);
  } catch (error) {
    console.log(error);
  }
});

route.post('/login', async(req, res)=>{
    
})

// to access all data from the specific folder from mongoDb
route.get("/showData", async (req, res) => {
  try {
    const showData = await userModel.find();
    res.send(showData);
  } catch (error) {
    console.log(error);
  }
});

// to delete specific data by the id
route.delete("/delete", async (req, res) => {
  let id = req.query.id;
  try {
    const deleteData = await userModel.findByIdAndDelete(id);
    res.send("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

// to update specific data
route.post("/update", async (req, res) => {
  let _id = req.body._id;
  try {
    const update = await userModel.findByIdAndUpdate(_id, req.body);
    res.send("Updated");
  } catch (error) {
    console.log(error);
  }
});

// to find specific user data
route.get("/showOne", async (req, res) => {
  let id = req.query.id;
  try {
    const show = await userModel.findById(id);
    res.send(show);
  } catch (error) {
    console.log(error);
  }
});
module.exports = route;
