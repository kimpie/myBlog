var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var postSchema = new Schema ({
	words: String,
	category: String,
	month: Number,
	year: Number,
	country: String
});

module.exports = db.model('Posts', postSchema);