var helper = require("../Support/helper.js");

var LoginPage = function () {
    var cssTxtUsername = 'input[id$="_txtUsername"]';
    var cssTxtPassword = 'input[type="password"]';
    var cssBtnLogin = 'input[id$="_btnLogin"]';
    
    this.get = function () {
        browser.get('gateway/Login.aspx');
    };

    this.loaded = function (){
        var ec = protractor.ExpectedConditions;
        var condition = ec.and(ec.visibilityOf(helper.find(cssTxtUsername)), ec.visibilityOf(helper.find(cssTxtPassword)));
        return browser.wait(condition);
    }

    this.loginWithParentCredentials = function (username, password) {
        helper.find(cssTxtUsername).sendKeys(username);
        helper.find(cssTxtPassword).sendKeys(password);
        helper.find(cssBtnLogin).click();
    }
};

module.exports = LoginPage;
