const express = require('express')
const app = express()
const port = 8080;
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors());
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/caring-hands" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongodb connection successful")
})
const userSchema = mongoose.Schema({
    name: {type:String},
    number: {type:String},
    alternateNumber: {type:String},
    address: {type:String},
    email: {type:String},
    items: {type: String},
    quantity: {type:Number}
})

const joinSchema = mongoose.Schema({
    name: {type:String},
    number: {type:String},
    alternateNumber: {type:String},
    address: {type:String},
    email: {type:String},
    aadharNumber: {type:Number},
    city: {type:String},
    state: {type:String},
    country: {type:String}
})

const User = new mongoose.model("donation-data",userSchema);
const Join = new mongoose.model("join-data",joinSchema);

app.post("/donationDetail" , async(req,res)=>{
    const{name,number,alternateNumber,address,email,items,quantity} = req.body;
    const newUser = new User({name,number,alternateNumber,address,email,items,quantity})
    await newUser.save();
    res.send({message:"data saved"})
})

app.post("/joinDetail" , async(req,res)=>{
    const{name,number,alternateNumber,address,email,aadharNumber,city,state,country} = req.body;
    const newJoin = new Join({name,number,alternateNumber,address,email,aadharNumber,city,state,country})
    await newJoin.save();
    res.send({message:"data saved"})
})

app.listen(port,(req,res)=>{
    console.log("The port is listening")
})