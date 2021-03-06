//first object

var bio = 
	{
	"name": "Claudia Cedeno",
	"role": "Web Developer",
	"contacts": {
		"mobile": "5550004433",
		"email": "mccc86@gmail.com",
		"github": "mccc86",
		"twitter": "@cruisetiki",
		"location": "Los Angeles, California, USA"
		},
	"pictureURL": "images/rose.jpg",
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"skills": [
		"jQuery", 
		"HTML", 
		"CSS", 
		"Javascript", 
		"Spanish",
		 "WordPress"
		],
	"display": function displayBio()
			{
	
				$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

				$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

				$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
				
				$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

				$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

				$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

				$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	
				$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));

				$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

				//skills at glance

				$("#header").append(HTMLskillsStart);

				for(var i = 0; i < bio.skills.length; i++){
					$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
					}
			}
} /* end of bio object*/


var work = {
	
	"jobs": [
		{
			"employer": "MLC Event Planning",
			"title": "Webmaster",
			"location": "Los Angeles, California",
			"dates": "2012-2013",
			"description": "Designed, developed and maintained mlceventplanning.com site."
		},
		{
			"employer": "Ticadia",
			"title": "Co-founder",
			"location": "Encino, California",
			"dates": "2014-present",
			"description":	"Vice-president duties and web maintenance"
		}
	],
	"display": function displayWork(){
		for(var i = 0; i < work.jobs.length; i++){
	
			$("#workExperience").append(HTMLworkStart);
	
			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

			var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			
			$("#workExperience").append(workEmployer + workTitle);

			$("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));

			$("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));

			$("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		}
		
		
	}//end display work
	
	
}



var projects = {
	
	"projects": [
		{
		"title": "Cruisetiki",
		"dates": "2014-present",
		"description": "new platform to get cruise mates",
		"images": "images/cruise.jpg"
		}
	],
	"display": function displayProjects(){

		$("#projects").append(HTMLprojectStart);
		for(var i = 0; i < projects.projects.length; i++){
			
			$("#projects").append(HTMLprojectTitle .replace("%data%", projects.projects[i].title));

			
			$("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));

			
			$("#projects").append( HTMLprojectDescription.replace("%data%", projects.projects[i].description));

			
			$("#projects").append( HTMLprojectImage.replace("%data%", projects.projects[i].images));
			}
		}// end of projects display
}





var education = {
	"schools": [
		{
	
			"name": "BlueHill College",
			"degree": "Business",
			"dates": "2005-2009",
			"location": "Guayaquil, Ecuador",
			"majors": ["Business", "General Business"]
		}
	],
	"onlineCourses": [
		{
	
			"title": "Business Strategy",
			"school": "Excelsior College",
			"dates": "2009-2010",	
			"url": "http://www.excelsior.edu"
		
		}
	],
	"display": function displayEducation()
		{
			$("#education").append(HTMLschoolStart);
			for(var i = 0; i < education.schools.length; i++){
	
				var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				$("#education").append(schoolName + schoolDegree);

				$("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));

				$("#education").append(HTMLschoolLocation.replace ("%data%", education.schools[i].location));

				$("#education").append( HTMLschoolMajor.replace("%data%", education.schools[i].majors));
	

			}
				
			$("#education").append(HTMLonlineClasses);
			for(var i = 0; i < education.onlineCourses.length; i++){
	
	
				var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				$("#education").append( onlineCourseTitle + onlineCourseSchool);

				$("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));

				$("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
			}
			
		}	//end of display
	
	
} /* end of education object*/



// build bio section
bio.display();

//build working section
work.display();

//build project section
projects.display();

//build education section
education.display();

//build map
$("#mapDiv").append(googleMap);
initializeMap();

//display footer
displayFooter(bio.contacts);


console.log(bio);
console.log(education.schools);
console.log(education.onlineCourses);
console.log(work);
console.log(projects);

				/*footer*/
function displayFooter(){
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);
}


mapDiv.display = function(){
$("#mapDiv").append(googleMap);
} 


