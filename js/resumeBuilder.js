//first object

var bio = 
	{
	"name": "claudia cedeno",
	"role": "Web Dev",
	"contacts": {
		"mobile": "4560034567",
		"email": "clau@me.com",
		"github": "mccc86",
		"twitter": "@cruisetiki",
		"location": "Los Angeles, California, USA"
		},
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "Welcome to my Resume",
	"skills": [
		"coding", "math", "bilingual"
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
					$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
					}
			}
} /* end of bio object*/




var education = {
	"schools": [
		{
	
			"name": "BlueHill College",
			"degree": "Business",
			"dates": "2005-2009",
			"location": "Guayaquil, Ecuador",
			"majors": ["Business", "GeneralBusiness"]
		}
	],
	"onlineCourses": [
		{
	
			"title": "Business Fundamentals",
			"school": "Excelsior College",
			"dates": "2009",	
			"url": "http://www.excelsior.edu"
		
		}
	],
	"display": function displayEducation()
		{
			$("#education").append(HTMLschoolStart);
			for(var i = 0; i < education.schools.length; i++){
	
				var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				$(".education-entry:last").append(schoolName + schoolDegree);

				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));

				$(".education-entry:last").append(HTMLschoolLocation.replace ("%data%", education.schools[i].location));

				$(".education-entry:last").append( HTMLschoolMajor.replace("%data%", education.schools[i].majors));
	

			} 
				
			$(".education-entry").append(HTMLonlineClasses);
			for(var i = 0; i < education.onlineCourses.length; i++){
	
	
				var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				$(".education-entry:last").append( onlineCourseTitle + onlineCourseSchool);

				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));

				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
			}
			
		}	//end of display
	
	
} /* end of education object*/



var work = {
	
	"jobs": [
		{
		"employer": "MLC Event Planning",
		"title": "Webmaster",
		"location": "Encino, California",
		"dates": "2012-2013",
		"description": "Created mlceventplanning.com site, designed and developed to up-to-date styles and frameworks. Managed ad promoted it using social media as well."
		}
	],
	"display": function displayWork(){
		for(var i = 0; i < work.jobs.length; i++){
	
			$("#workExperience").append(HTMLworkStart);
	
			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

			var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			
			$(".work-entry:last").append(workEmployer + workTitle);

			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));

			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));

			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		}
		
		
	}//end display work
	
	
}





//fourth object

var projects = {
	
	"projects": [
		{
		"title": "Cruisetiki",
		"dates": "2014-present",
		"description": "new platform to get cruise mates",
		"images": "images/197x148.gif"
		}
	],
	"display": function displayProjects(){

		$("#projects").append(HTMLprojectStart);
		for(var i = 0; i < projects.projects.length; i++){
			
			$(".project-entry").append(HTMLprojectTitle .replace("%data%", projects.projects[i].title));

			
			$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));

			
			$(".project-entry").append( HTMLprojectDescription.replace("%data%", projects.projects[i].description));

			
			$(".project-entry").append( HTMLprojectImage.replace("%data%", projects.projects[i].images));
			}
		}// end of projects display
}


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


