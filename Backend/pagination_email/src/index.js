const express=require('express');

const { connect } = require('mongoose');
const app = express()

app.use(express.json())


module.exports =app;