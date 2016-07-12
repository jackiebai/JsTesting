# JavaScript-based BDD Testing Framework

This seed project is coded on top of Protractor, Cucumber-JS, and Protractor-Cucumber-Html frameworks, and it's writen in Javascript. You can utilize the project to expand e2e test coverage against both AngularJs and Non-AngularJs web applications.

### Installation
 - install [node.js] on your workstation
 - download the sourcecode
 - open a commandline interface
 - run below command under the BddFramework subfolder

    $ npm install


### Code Structure
 - feature files are located under ./BddFramework/Scripts/Features
 - test files are inside ./BddFramework/Scripts/Steps
 
### Run Tests Locally
 - make sure you are inside the intrafinity network
 - run the following command under the BddFramework subfolder

   $ npm run test_local


### Run tests through Teamcity
 - run e2e - ParentGradesWebsite configuration from:http://teamcity.intrafinity.loc/viewType.html?buildTypeId=SmPresence_Social_E2eParentGradesWebsite
  - testing results are available under Artifacts\testresults


