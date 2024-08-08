//import mongoose from 'mongoose';
const mongoose = require('mongoose');

//connecto to mongodb where 'students_list' is database name

mongoose.connect('mongodb://localhost/students_list');

//check if it is connected
mongoose.connection
    //use .once to watch for mongodb connection
    .once('open', () => console.log('Connected to mongodb'))
    .on('error', (error) => {
        console.warn('Error : ', error);
        done();
    });


//clear all collections from the 'students' database
beforeEach(function(done) {
    mongoose.connection.collections.students.drop()

})