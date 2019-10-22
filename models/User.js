const { mongoose } = require('../app-utilities')
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;