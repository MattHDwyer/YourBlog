const { router } = require('../app-utilities');

const {
    login,
    profileExist,
    logout
} = require('../controllers/login-controller.js');

router.get('/login', async (req,res) => {
    res.render('login')
});
router.post('/login', login, profileExist);
router.get('/profile-exist', profileExist);
router.get('/logout', logout)

module.exports = router;