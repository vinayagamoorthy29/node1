const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const db=mongoose.connect('mongodb://admin:abc!12@ds125912.mlab.com:25912/user')
  .then(() =>console.log("connected"))
  .catch(err => console.error(err));
exports.db=db;



