const express = require('express');
const app = express();
const port = 4500;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const secret = 'atct3100';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://ashutoshthakur626:atct3100@cluster0.47lkhmb.mongodb.net/?retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
    gmail: String,
    username: String,
    password: String
});

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    food: String,
    address: String
});

const User = mongoose.model('User1',userSchema);
const Form = mongoose.model('Form',formSchema);

const verify = (req,res,next) => {
    try
    {
    const auth = req.headers.authorization;
    const token = auth.replace('Bearer ','');
    const json = jwt.verify(token,secret);
    req.user = json;
    next();
    }catch(error)
    {
        return res.json({
            message: 'Invalid token',
        })
    }
}

app.post('/register',async(req,res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    let existingUser = await User.findOne({username});
    if(existingUser)
    {
        return res.json({
            message: 'This username already exists',
        });
    }
    existingUser = await User.findOne({email});
    if(existingUser)
    {
        return res.json({
            message: 'This gmail already exists',
        });
    }
    const json = {username,email,password};
    const newUser = new User(json);
    await newUser.save();
    const token = jwt.sign(json,secret);
    res.json({
        token: token,
        message: 'User created successfulyy'
    })
})

app.post('/login',async(req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    let existingUser = await User.findOne({username});
    if(!existingUser)
    {
        return res.json({
            message: 'This user does not exists'
        })
    } 
    if(password === existingUser.password)
    {
        const json = {
            username: existingUser.username,
            gmail: existingUser.gmail,
            password: existingUser.password
        };
        const token = jwt.sign(json,secret);
        return res.json({
            message: 'Login successful',
            token: token
        })
    }
    else
    {
        return res.json({
            message: 'Password incorrect'
        })
    }
});

app.post('/form',async(req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const food = req.body.food;
    const address = req.body.address;
    const json = {name,email,food,mobile,address};
    const newForm = new Form(json);
    await newForm.save();
})

app.get('/getall',async(req,res)=> {
    const data = await Form.find({});
    return res.json(data);
})

app.get('/getashu',async(req,res)=> {
    const data = await User.find({});
    return res.json(data);
})

app.listen(port,()=> {
    console.log(`Listening on port number ${port}`);
})