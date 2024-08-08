//import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema is blueprint that outlines how data is organized and stored


//config the schema
const studentSchema = new Schema({
    name: String,
});

//create the schema model for each student
const Student = mongoose.model("Student", studentSchema);

//export the schema model
module.exports = Student;