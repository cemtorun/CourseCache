var mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
	title: String,
	description: String
});

var westernCourse = mongoose.model("westernCourse", courseSchema);

module.exports = westernCourse