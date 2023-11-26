const mongoose = require('mongoose');

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

