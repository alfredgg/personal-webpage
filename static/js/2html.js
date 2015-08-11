/*global $, jQuery, alert*/
/*global jQuery, jQuery, alert*/
/*global Handlebars, Handlebars, alert*/
/*global console, Console, alert*/

(function () {
    "use strict";
    var d_mainsection, d_summary, d_skills, d_works, d_education, d_basicinformation, d_interests, d_projects, d_volunteer;
    $.getJSON(resume_url, function (data) {
        console.log(data);
        
        d_mainsection = Handlebars.templates.t_mainsection(data.basics);
        d_summary = Handlebars.templates.t_summary(data.basics);
        d_works = Handlebars.templates.t_works({"works": data.work});
        d_skills = Handlebars.templates.t_skills({"skills": data.skills});
        d_education = Handlebars.templates.t_education({"education": data.education});
        d_basicinformation = Handlebars.templates.t_basicinformation({"basicinfo": data.basics, "languages": data.languages});
        d_interests = Handlebars.templates.t_interests({"interests": data.interests});
        d_volunteer = Handlebars.templates.t_volunteer({"volunteer": data.volunteer});
        d_projects = Handlebars.templates.t_projects({"projects": data.projects});
        
        console.log(d_interests);
        
        $("#mainsection").html(d_mainsection);
        $("#summary").html(d_summary);
        $("#skills").html(d_skills);
        $("#works").html(d_works);
        $("#education").html(d_education);
        $("#interests").html(d_interests);
        $("#projects").html(d_projects);
        $("#volunteer").html(d_volunteer);
        $("#basic-information").html(d_basicinformation);
    });
}());