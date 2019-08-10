var bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
    express        = require("express"),
	westernCourse  = require("./models/western"),
    brownCourse    = require("./models/brown"),
    app            = express()
    seedDB         = require("./seeds")


// APP CONFIG
mongoose.connect("mongodb://localhost/CourseCache", { useNewUrlParser: true }); 
//var url = "mongodb://localhost/CourseCache";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

seedDB();

var model = ""; // define as global variable so it can keep it while changing from different gets

// RESTFUL ROUTES

// MAIN PAGE

app.get("/", function(req, res){
	res.render("school");
})

app.get("/:school", function(req, res){
	var school = req.query.school.toLowerCase();
	app.set("schoolName", school) // use app.get()
	res.render("search", {school: school});
});

// COURSE SEARCH PAGE
app.get("/:school/courses", function(req, res){
	var search = req.query.search.toLowerCase();
	var school = app.get("schoolName");
	model = eval(school+"Course");
	model.find({ $text: { $search: search } }, function(err, courses) {
	if(err){
			console.log(err);
		} else {
			res.render("index", {courses: courses}); // represents index.ejs

		}
	});
});
	
// SHOW ROUTE

app.get("/courses/:id", function(req, res){
	model.findById(req.params.id, function(err, selectCourse){
		if (err) {
			console.log(err);
		} else {
			res.render("show", {course: selectCourse});
				}
	});
});


app.listen(3001, function(){
	console.log("listening for the courseCache webapp!");
});