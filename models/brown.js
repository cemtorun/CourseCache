var mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
	title: String,
	description: String,
	prereq: String,
	times: String,
	associations: String
});

var brownCourse = mongoose.model("brownCourse", courseSchema);

module.exports = brownCourse