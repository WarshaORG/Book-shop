var mongoose = require('mongoose');

// Book Schema to add it to mongo data bease
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true,
		unique: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	download_url:{
		type:String
	},
	user_id:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books from mongo data base
module.exports.getBooks = (callback) => {
	Book.find(callback);
}



// Add Book to mongo data base
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

