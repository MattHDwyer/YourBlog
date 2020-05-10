const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')

const {
    getUserPage,
} = require('../controllers/user-homepage-controller')

router.get('/:id', getUserPage);
module.exports = router;