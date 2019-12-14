const { express, router, mongoose, passport, bcrypt } = require('../app-utilities')
const User = require('../models/User')
const Profile = require('../models/Profile')

router.get('/login', async (req,res) => {
    res.render('login')
})

router.post('/login', async (req, res, next) => {
// WRITE CODE TO CHECK IF THE USER HAS A PROFILE, IF SO REDIRECT THEM TO THEIR DASHBOARD, IF NOT REDIRECT THEM TO REGISTER-PROFILE
    passport.authenticate('local', {
        // callback function into middleware
        successRedirect: '/profile-exist',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/profile-exist', async (req,res,next) => {
    const currentUser = await User.findOne({ _id: req.user.id })
    if(!currentUser.profileId){
        res.redirect('/register-profile')
    } else {
        res.redirect('/dashboard')
    }
    
})

module.exports = router;