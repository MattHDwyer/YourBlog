const { express, router, mongoose, passport, bodyParser, bcrypt } = require('../app-utilities')
const User = require('../models/User')
const Profile = require('../models/Profile')

/* Function below is to authenticate users as they login, if successful the site behind the scenes goes to the route /profile-exist, otherwise returns error on the /login route R*/
const login = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/profile-exist',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

/* Function below checks to make sure that the user has an existing Profile attached to their account (after initial Passport auth passes), if so they're redirected to their page, if not they're redirected to the profile registration page */
const profileExist = async (req, res, next) => {
    const currentUser = await User.findOne({ _id: req.user.id })
    if(!currentUser.profileId){
        res.redirect('/register-profile')
    } else {
        const currentProfile = await Profile.findOne({ _id: currentUser.profileId })
        res.redirect(`/${currentProfile.name}`)
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