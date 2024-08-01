//import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema is blueprint that outlines how data is organized and stored


//config the schema
const studentSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    grade: Number
});