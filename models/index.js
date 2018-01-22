var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Author = require('./author.js');
module.exports.Book = require('./book.js');