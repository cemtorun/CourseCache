var bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
    express        = require("express"),
	westernCourse  = require("./models/western"),
    brownCourse    = require("./models/brown"),
    app            = express(),
    seedDB         = require("./seeds"),
	url            = require('url')


// APP CONFIG
// mongoose.connect("mongodb://localhost/CourseCache", { useNewUrlParser: true }); 

mongoose.connect("mongodb+srv://cisac:cemtorun@cluster0-4fjcs.mongodb.net/CourseCache?retryWrites=true&w=majority", 
				 { useNewUrlParser: true });
				 
//var url = "mongodb://localhost/CourseCache";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// seedDB();

var model = ""; // define as global variable so it can keep it while changing from different gets

// RESTFUL ROUTES

// MAIN PAGE

app.get("/", function(req, res){
	res.render("school");
})

app.get("/about", function(req, res){
	res.render("about");
})

app.get("/contact", function(req, res){
	res.render("contact");
})

app.get("/:school", function(req, res){
	var school = "western";
	var url = req.url;
	
	if (url.includes("brown/courses") || url.includes("university=brown")) {
		school = "brown";
	} else if (url.includes("western/courses") || url.includes("university=western")) {
		school = "western";
	};
	model = eval(school+"Course");
	model.aggregate([{ $match: { associations : "random" }}, { $sample: {size: 3}}], function(err, randoms) {
	if(err){
			console.log(err);
		} else {
			res.render("search", {school: school, randoms: randoms}); // represents index.ejs
		}
	});
});

// COURSE SEARCH PAGE
app.get("/:school/courses", function(req, res){
	var search = req.query.search.toLowerCase();
	var temp = search.split(" ");
	var finalSearch = '"' + temp.join('" "') + '"'
	var school = "western";
	var url = req.url;
	
	if (url.includes("brown/courses") || url.includes("university=brown")) {
		school = "brown";
	} else if (url.includes("western/courses") || url.includes("university=western")) {
		school = "western";
	};
	
	model = eval(school+"Course");
	
	model.find({ $text: { $search: finalSearch } }, function(err, courses) {
	if(err){
			console.log(err);
		} else {
			res.render("index", {courses: courses, school: school}); // represents index.ejs

		}
	});
});
	
// SHOW ROUTE

app.get("/:school/courses/:id", function(req, res){
	
	var school = "western";
	var url = req.url;
	var id = req.params.id;
	
	if (url.includes("brown/courses") || url.includes("university=brown")) {
		school = "brown";
	} else if (url.includes("western/courses") || url.includes("university=western")) {
		school = "western";
	};
	
	var x = req.url.split("courses/");
	id = x[x.length-1];
	model = eval(school+"Course");

	model.findById(id, function(err, selectCourse){
		if (err) {
			console.log(err);
		} else {
			res.render("show", {course: selectCourse, school: school});
				}
	});
});

const port = process.env.PORT || 8080;
const ip = process.env.IP || "127.0.0.1";
app.listen(port,function(){
    console.log("Server has started .... at port "+ port+" ip: "+ip);
});