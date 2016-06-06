module.exports = {
    find: function(cssString){
        return element(by.css(cssString));
    },

    findAll: function(cssString){
        return element.all(by.css(cssString));
    },
    
    waitUntilElementIsPresent: function (cssString) {
        browser.wait(function () {
            return browser.isElementPresent(by.css(cssString));
        });
    },
    
    currentUrlMatches: function (regExp) {
        browser.wait(function () {
            return browser.getCurrentUrl().then(function (url) {
                return regExp.test(url);
            });
        });
    }
}
