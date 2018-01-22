const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
	title: String,
	author: String,
	image: String,
	releaseDate: Date
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;