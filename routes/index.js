const { express, router, mongoose } = require('../app-utilities')
const User = require('../models/User')

router.get('/', (req,res) => {
    res.render('welcome')
})

module.exports = router;