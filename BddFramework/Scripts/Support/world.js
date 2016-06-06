var login = require("../Pages/login_page.js");
var landing = require("../Pages/landing_page.js");
var grades = require("../Pages/grades_page.js");

var World = function World(){
    this.loginPage = new login();
    this.landingPage = new landing();
    this.gradesPage = new grades();
};
module.exports.World = World;