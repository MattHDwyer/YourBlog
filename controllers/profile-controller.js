const { express, router, mongoose, bcrypt, passport } = require('../app-utilities')
const User = require('../models/User')
const { ensureAuthenticated } = require('../config/auth')
const Profile = require('../models/Profile')

const profileSetup = async (req, res) => {
    const currentUser = await User.findOne({ _id: req.user.id })
    const { name, bio } = req.body;
    let errors = [];

    if (!name || !bio) {
        console.log(req.body);
        console.log(name, bio);
        errors.push({ msg: "Please fill in all fields" })
    }

    if (errors.length > 0) {
        res.render('profile-signup', {
            user: req.user,
            errors,
            name,
            bio
        });
    } else {
        Profile.findOne({ name: name })
            .then(user => {
                if(user) {
                    errors.push({ msg: "Name is already being used, try again!"})
                    res.render('profile-signup', {
                        user: req.user,
                        errors,
                        name,
                        bio
                    });
                } else {
                    const newProfile = new Profile({ 
                        userId: req.user._id,
                        name,
                        bio});
                        newProfile.save()
                            .then(doc => {                   
                                 // Update the Users ProfileId
                                console.log();
                                currentUser.profileId = doc._id
                                currentUser.save((err, result) => {
                                    req.flash('success_msg', "Your Profile is now setup!")
                                    res.redirect(`/u/${newProfile.name}`)
                                })
                            })
                            .catch(err => console.log(err));
                }
                    
            });
    };
};

module.exports = {
    profileSetup
}