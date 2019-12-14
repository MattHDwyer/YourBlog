const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')

const {
    register
} = require('../controllers/register-controller')

router.get('/register', async (req,res) => {
    res.render('register')
})

router.post('/register', express.urlencoded({extended: false}), register)



module.exports = router;