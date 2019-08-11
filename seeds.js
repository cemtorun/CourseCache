var mongoose = require("mongoose");
var brownCourse = require("./models/brown");
var westernCourse = require("./models/western");

western = [
	{
		title: "ACTURSCI 1021B - INTRO TO FINANCIAL SECURE SYS",
		description: "The nature and cause of financial security and insecurity; public, private and employer programs and products to reduce financial insecurity, including social security, individual insurance and annuities along with employee pensions and benefits."
	},
	{
		title: "ACTURSCI 2053 - MATH FOR FINANCIAL ANALYSIS",
		description: "Simple and compound interest, annuities, amortization, sinking funds, bonds, bond duration, depreciation, capital budgeting, probability, mortality tables, life annuities, life insurance, net premiums and expenses."
	},
	{
		title: "CALCULUS 2503B - ADVANCED CALCULUS II",
		description: "Integral calculus of functions of several variables: multiple integrals; Leibnitz' rule; arc length; surface area; Green's theorem; independence of path; simply connected and multiply connected domains; three dimensional theory and applications; divergence theorem; Stokes' theorem."
	},
	{
		title: "tester1",
		description: "fun fun fun fun fun fun fun fun fun fun fun"
	},
	{
		title: "tester2",
		description: "calculus calculus  calculus calculus calculus calculus"
	},
	{
		title: "tester3",
		description: "calculus calculus calculus fun fun fun fun fun "
	},
	{
		title: "tester4",
		description: "calculus calculus calculus calculus calculus "
	},
	{
		title: "BUSINESS 1220E - INTRODUCTION TO BUSINESS",
		description: "Business Administration 1220E, offered by the Ivey Business School, gives students from all faculties the opportunity to learn business fundamentals in finance, marketing, operations, organizational behavior and general management. The course is delivered using Ivey's renowned case method, which challenges students to learn by doing, within an active class environment of no more than 85 students. Students explore real business issues, make management decisions, defend their position, and take action. This course will be particularly appealing to those students who want a glimpse of Ivey's unique learning experience."
	}
]

brown = [
	{
		title: "CHEM 2272F - INTRODUCTORY ANALYTICAL CHEM",
		description: "This course emphasizes the quantitative aspects of chemistry. Starting with classical measurements of volumes and masses, the course will develop statistical tools of estimation, confidence, accuracy, and precision in treating experimental data. This includes an introduction to instrumental methods of analysis."
	},
	{
		title: "DISABST 1010B - EXPLORING DISABILITY",
		description: "Explores provocative ethical and practical Disability Studies topics using a Liberal Arts framework. Students actively engage both sides of cases with legal, medical, and recreational significance. Examines how disability, mental health and neuro-diversity intersect with modern culture and social institutions."
	},
	{
		title: "FOODNUTR 1070B - INTRODUCTORY HUMAN NUTRITION",
		description: "An introductory study of food and nutrition, with a particular emphasis on nutrient sources, physiological roles, including dietary requirements, and impact on health."
	}
]


function seedDB(){
   //Remove all Courses
   westernCourse.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        	console.log("removed all western courses!!!");
			// Add in the courses
			western.forEach(function(seed){
				westernCourse.create(seed, function(err, data){
					if(err){
						console.log(err)
					} else {
						console.log("Added a western course!!")
					}
				});
			})
		}	   
   });
   brownCourse.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        	console.log("removed all brown courses!!!");
			// Add in the courses
			brown.forEach(function(seed){
				brownCourse.create(seed, function(err, data){
					if(err){
						console.log(err)
					} else {
						console.log("Added a brown course!!")
					}
				});
			})
		}	   
   });
}
	

module.exports = seedDB;