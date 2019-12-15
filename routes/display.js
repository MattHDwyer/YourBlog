const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')

router.get('/:id', async (req, res, next) => {
    const userID = req.params.id
    Profile.findOne({ name: userID })
    .exec()
    .then( doc =>{
        res.render('user-dashboard', {
            name: doc.name,
            bio: doc.bio
        });
    })
    .catch(err => {
        console.log(err);
    })
});
module.exports = router;