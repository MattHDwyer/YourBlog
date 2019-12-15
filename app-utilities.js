const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = express.Router()
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')


module.exports = {
    express,
    session,
    morgan,
    mongoose,
    router,
    passport,
    expressLayouts,
    flash,
    bcrypt,
    bodyParser
}