var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var postSchema = new Schema ({
	postTitle: String,
	pbody: Object,
	category: String,
	month: String,
	year: String,
	country: String,
	postDate: String,
	image: String
});

module.exports = db.model('Posts', postSchema);