'use strict';
exports.config = {
    directConnect: process.env.DIRECT_CONNECT||true,
    specs: ['Scripts/Features/*.feature'],
    multiCapabilities:[ {
        'browserName': 'chrome'
    },
    {
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
