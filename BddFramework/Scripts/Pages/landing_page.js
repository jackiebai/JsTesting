var helper = require("../Support/helper.js");
var LandingPage = function () {
   
    this.get = function () {
        browser.get('/social/parentgrades');
        return helper.currentUrlMatches(/parentgrades/);
    };

    this.getPageTitle = function () {
        return browser.getTitle();
    }
};

module.exports = LandingPage;
