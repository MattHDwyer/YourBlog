const { express, router, mongoose, passport, bcrypt } = require('../app-utilities')
const User = require('../models/User')
const Profile = require('../models/Profile')

const login = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/profile-exist',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

const profileExist = async (req, res, next) => {
    const currentUser = await User.findOne({ _id: req.user.id })
    if(!currentUser.profileId){
        res.redirect('/register-profile')
    } else {
        res.redirect('/dashboard')
    }
}

const logout = (req,res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out')
    res.redirect('/login');
}

module.exports = {
    login,
    profileExist,
    logout
}