const mongoose = require('mongoose');
// const DB ='mongodb://0.0.0.0:27017/employeReviewSystem';
const DB = 'mongodb+srv://shiva850681:Kaliya8506@cluster0.cro6kwk.mongodb.net/?retryWrites=true&w=majority'

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  
