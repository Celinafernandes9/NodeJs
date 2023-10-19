const express = require('express').Router();
const route = require('express').Router();

const userModel = require('./module');

// to register a data
route.post('/register',async (req, res) => {
    const newUser = new userModel({
    name:req.body.name,
    email: req.body.email,
    mobile:req.body.mobile
    })
    try {
        const saveData = await newUser.save();
        res.send(saveData);
    } catch (error) {
        console.log(error);
    }
})

// to access all data from the specific folder from mongoDb
route.get('/showData',async (req,res)=>{
    try {
        const showData = await userModel.find()
        res.send(showData)
    } catch (error) {
        console.log(error);
    }
})

// to delete specific data by the id
route.delete('/delete',async (req, res)=>{
    let id = req.query.id
    try {
        const deleteData = await userModel.findByIdAndDelete(id)
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error);
    }
})

// to update specific data
route.post('/update', async (req, res)=>{
    let _id = req.body._id
    try {
        const update = await userModel.findByIdAndUpdate(_id, req.body)
        res.send("Updated")
    } catch (error) {
        console.log(error);
    }
})

// to find specific user data
route.get('/showOne', async (req, res)=>{
    let id = req.query.id
    try {
       const show = await userModel.findById(id) 
       res.send(show)
    } catch (error) {
        console.log(error);
    }
})
module.exports = route;