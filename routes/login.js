const { express, router, mongoose, passport } = require('../app-utilities')
require('../config/passport')(passport)

router.get('/login', async (req,res) => {
    res.render('login')
})

router.post('/login', async (req,res,next) => {
    passport.authenticate('local', { 
        successRedirect: '/register-profile',
        failureRedirect: '/login',
        failureFlash: true 
    })(req,res,next);
});


module.exports = router;