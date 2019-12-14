const { express, router, mongoose } = require('../app-utilities')
const User = require('../models/User')
const Profile = require('../models/Profile')

/* This 'admin' route is for development use only. Will be removed once developed. */

router.get('/admin', (req,res) => {
    res.send('admin_welcome')
})


router.get('/users', async (req,res) => {
    try {
        let user = await User.find()
        console.log(user);
        res.send(user);
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/profiles', async (req, res) => {
    try {
        let profile = await Profile.find()
        console.log(profile);
        res.send(profile);
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;