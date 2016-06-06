var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require("../Support/helper.js");

module.exports = function () {   
    this.World = require("../Support/world.js").World;

    this.Given('Go to login page', function (next) {
        this.loginPage.get();
        expect(this.loginPage.loaded()).to.become(true).and.notify(next);
    });
    
    this.When('Login with valid parent credentials "$username" "$password"', function (username, password,next) {
        this.loginPage.loginWithParentCredentials(username, password);
        next();
    });
    
    this.Then('Go to SLMS Parent Grades site', function (next) {
        this.landingPage.get();
        next();
    });
    
    this.Then('Upon logging in the first thing a parent sees is the Landing page with title "$title"', function (title,next) {
        expect(this.landingPage.getPageTitle()).to.eventually.equal(title).and.notify(next);
    });
    
    this.Then('Parent can navigate to the Grades page for their child/children at index "$index"', function (index,next) {
        this.gradesPage.pickAChild(index);
        next();
    });
    
    this.Then('"$totalClass" items are available for the child', function (total,next) {
         expect(this.gradesPage.getAllClassElements()).to.eventually.equal(parseInt(total)).and.notify(next);
    });
    
    
};