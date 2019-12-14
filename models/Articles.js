const { mongoose } = require('../app-utilities')
const Schema = mongoose.Schema;

var articleSchema = new Schema ({
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;