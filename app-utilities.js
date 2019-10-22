const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

module.exports = {
    express,
    morgan,
    mongoose,
    router,
    expressLayouts
}