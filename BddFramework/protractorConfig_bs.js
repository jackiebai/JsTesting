'use strict';

exports.config = {
    seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['Scripts/Features/*.feature'],
    multiCapabilities: [{
        'browserName' : 'android',
        'platform' : 'ANDROID',
        'device' : 'Samsung Galaxy S5',
        'browerstack.debug': 'true',
        'browserstack.user': process.env.BROWSERSTACK_USER||'jackiebai1',
        'browserstack.key': process.env.BROWSERSTACK_KEY||'nsLXe2n2oipiDotuHR1c',
        'browserstack.local': 'true',        
    },
        {
        'browerstack.debug': 'true',
        'browserstack.user': process.env.BROWSERSTACK_USER||'jackiebai1',
        'browserstack.key': process.env.BROWSERSTACK_KEY||'nsLXe2n2oipiDotuHR1c',
        'browserstack.local': 'true',
        'browserName': 'firefox'
    }],
    onPrepare: function () {
        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;         
        };
    },
    troubleshoot: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: process.env.BASE_URI||'http://v4stagingsubsub2.devnet.intrafinity.com',
    cucumberOpts: {
        tags: [],
        require: ['Scripts/Support/*.js', 'Scripts/Steps/*steps.js'],
        format: 'pretty'
    }
};
