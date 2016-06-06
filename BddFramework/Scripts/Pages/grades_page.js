var helper = require("../Support/helper.js");

var GradesPage = function () {
    
    var cssStudentSelect = 'div[class="studentSelect"]';
    var cssMain = 'main';
    var cssClassElements = 'td[class="name"]';
    
    this.pickAChild = function (index) {
        helper.waitUntilElementIsPresent(cssStudentSelect);
        helper.find(cssStudentSelect).click();
    }
    
    this.getAllClassElements = function () {
        helper.waitUntilElementIsPresent(cssMain);
        return helper.findAll(cssClassElements).then(function (elems) {
                return elems.length;
            });
    }
}
module.exports = GradesPage;
