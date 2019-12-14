const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')

const {
    profileSetup
} = require('../controllers/profile-controller')

router.get('/register-profile', ensureAuthenticated, async (req,res) => {
    res.render('profile-signup', {
        user: req.user
    })
})

router.post('/register-profile', ensureAuthenticated, profileSetup)

module.exports = router;