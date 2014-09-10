var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var postSchema = new Schema ({
	direction: String,
	rule: String,
	category: String,
	timer: Boolean
});

module.exports = db.model('Posts', postSchema);