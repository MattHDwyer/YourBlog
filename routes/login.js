const { express, router, mongoose, passport, bcrypt } = require('../app-utilities')
const User = require('../models/User')

router.get('/login', async (req,res) => {
    res.render('login')
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});


module.exports = router;