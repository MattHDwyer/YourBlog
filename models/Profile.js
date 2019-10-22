const { mongoose } = require('../app-utilities')
const Schema = mongoose.Schema;

var profileSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
})

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;