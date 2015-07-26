(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['t_basicinformation'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <span class=\"additional-info\">Currently living in </span><span class=\"additional-info additional-info-emphasized\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + " ("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.countryCode : stack1), depth0))
    + ")</span> <br></br>\n    <span class=\"additional-info\">E-Mail: </span><span class=\"additional-info additional-info-emphasized\">"
    + alias2(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <dt>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "<dt><dd>"
    + alias3(((helper = (helper = helpers.fluency || (depth0 != null ? depth0.fluency : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fluency","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ul class=\"onlineprofile\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.profiles : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-"
    + alias3(((helper = (helper = helpers.network || (depth0 != null ? depth0.network : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"network","hash":{},"data":data}) : helper)))
    + "-square fa-3x\" title=\""
    + alias3(((helper = (helper = helpers.network || (depth0 != null ? depth0.network : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"network","hash":{},"data":data}) : helper)))
    + "\"></i></a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Information</h1>\n<div class=\"section\">\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.basicinfo : depth0),{"name":"with","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <h2 class=\"section-title\">Languages</h2>\n    <dl>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.languages : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </dl>\n    <h2 class=\"section-title\">Online profiles</h2>\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.basicinfo : depth0),{"name":"with","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['t_education'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"section\">\n    <h2 class=\"section-title\">"
    + alias3(((helper = (helper = helpers.studyType || (depth0 != null ? depth0.studyType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"studyType","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"area","hash":{},"data":data}) : helper)))
    + "</h2>\n    <div>\n        <span class=\"additional-info\">"
    + alias3(((helper = (helper = helpers.institution || (depth0 != null ? depth0.institution : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"institution","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <div>\n        <span class=\"additional-info\">"
    + alias3(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"startDate","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.endDate : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n    </div>\n </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return " - "
    + this.escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"endDate","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Education</h1>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.education : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['t_interests'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"interest\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Interests</h1>\n<div class=\"interests\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.interests : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['t_mainsection'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h1 class=\"brand-title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2 class=\"brand-tagline\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</h2>\n<img class=\"main-photo\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " photo\" src=\""
    + alias3(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">";
},"useData":true});
templates['t_projects'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"section\">\n    <h2 class=\"section-title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n    <div>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.website : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.startDate : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n    <p>"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</p>\n </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\""
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "</a>";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"additional-info\">"
    + this.escapeExpression(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.endDate : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"endDate","hash":{},"data":data}) : helper)));
},"7":function(depth0,helpers,partials,data) {
    return "Nowadays";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Projects</h1>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['t_skills'] = template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "      <div class=\"skill\">\n        <span class=\"skill-name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.level : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <span class=\"skill-keyword skill-keyword-"
    + alias2(alias1((depths[1] != null ? depths[1].level : depths[1]), depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h1 class=\"content-subhead\">Skills</h1>\n<div class=\"skills\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.skills : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
templates['t_summary'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<p>\n"
    + this.escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "\n</p>";
},"useData":true});
templates['t_volunteer'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"section\">\n    <h2 class=\"section-title\">"
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + " at "
    + alias3(((helper = (helper = helpers.organization || (depth0 != null ? depth0.organization : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organization","hash":{},"data":data}) : helper)))
    + "</h2>\n    <div>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.website : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <span class=\"additional-info\">"
    + alias3(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.endDate : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n    </div>\n    <p>"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</p>\n </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\""
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "</a>";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"endDate","hash":{},"data":data}) : helper)));
},"6":function(depth0,helpers,partials,data) {
    return "Nowadays";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Volunteer</h1>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.volunteer : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['t_works'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"section\">\n    <h2 class=\"section-title\">"
    + alias3(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"company","hash":{},"data":data}) : helper)))
    + "</h2>\n    <div>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.website : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <span class=\"additional-info\">"
    + alias3(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.endDate : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n    </div>\n    <p>"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</p>\n </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\""
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "</a>";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"endDate","hash":{},"data":data}) : helper)));
},"6":function(depth0,helpers,partials,data) {
    return "Nowadays";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"content-subhead\">Works</h1>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.works : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();