const { express, router, mongoose, passport, bcrypt } = require('../app-utilities')
const User = require('../models/User')


router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out')
    res.redirect('/login');
})

module.exports = router;