const { express, router, mongoose } = require('../app-utilities')
const User = require('../models/User')


router.get('/register', async (req,res) => {
    res.render('register')
})

router.post('/register', express.urlencoded({extended: false}), async (req,res) => {
    try {
        let user = new User(req.body)
        await user.save()
        res.redirect('/register-profile')
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;