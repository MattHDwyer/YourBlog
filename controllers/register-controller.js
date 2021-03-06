const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')

const register = async (req, res, next) => {
    const { email, password, password2 } = req.body;
    let errors = [];

    if (!email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" })
    }

    if (password !== password2) {
        errors.push({ msg: "Passwords do not match!"})
    }

    if (password.length < 6) {
        errors.push({ msg: "Password needs to be at least 6 characters!"})
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            email,
            password,
            password2
        });
    } else {
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    errors.push({ msg: "Email is already Registered"})
                    res.render('register', {
                        errors,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({ 
                        profileId: null,
                        email,
                        password});
                        bcrypt.genSalt(15, (err, salt) => 
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can login')
                                res.redirect('/login')
                            })
                            .catch(err => console.log(err));
                    }))
                }
            });
    };
};

module.exports = {
    register
}
