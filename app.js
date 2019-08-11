var bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
    express        = require("express"),
	westernCourse  = require("./models/western"),
    brownCourse    = require("./models/brown"),
    app            = express()
    seedDB         = require("./seeds")


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
	var school = req.query.university
	app.set("schoolName", school) // use app.get()
	res.render("search", {school: school});
});

// COURSE SEARCH PAGE
app.get("/:" + app.get("schoolName") + "/courses", function(req, res){
	var search = req.query.search.toLowerCase();
	var school = app.get("schoolName");
	model = eval(school+"Course");
	model.find({ $text: { $search: search } }, function(err, courses) {
	if(err){
			console.log(err);
		} else {
			res.render("index", {courses: courses, school: app.get("schoolName")}); // represents index.ejs

		}
	});
});
	
// SHOW ROUTE

app.get("/courses/:id", function(req, res){
	model.findById(req.params.id, function(err, selectCourse){
		if (err) {
			console.log(err);
		} else {
			res.render("show", {course: selectCourse, school: app.get("schoolName")});
				}
	});
});

const port = process.env.PORT || 8080;
const ip = process.env.IP || "127.0.0.1";
app.listen(port,function(){
    console.log("Server has started .... at port "+ port+" ip: "+ip);
});