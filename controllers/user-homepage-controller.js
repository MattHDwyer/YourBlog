const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')


const getUserPage = async (req, res, next) => {
    const currentProfile = await Profile.findOne({ name: req.params.id });
    if(!currentProfile){
        res.redirect('/page-not-found')
    } else {
        res.render('user-dashboard', {
            name: currentProfile.name,
            bio: currentProfile.bio
            });
    };
}

module.exports = {
    getUserPage
}