const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')

router.get('/dashboard', ensureAuthenticated, async (res,req) => {
    res.render('')
})

module.exports = router;