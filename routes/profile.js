const { express, router, mongoose } = require('../app-utilities')
const Profile = require('../models/Profile')

router.get('/register-profile', async (req,res) => {
    res.render('profile-signup')
})

router.post('/register-profile', express.urlencoded({extended: false}), async (req,res) => {
    try {
        let profile = new Profile(req.body)
        console.log(req.body);
        await profile.save()
        res.redirect('/admin/users')
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;