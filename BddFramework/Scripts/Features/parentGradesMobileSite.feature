Feature: Parent Grades Mobile Website
	Scenario: As a Parent, I should be able to log into the SLMS system using my parent credentials. 
		Given Go to login page
		When Login with valid parent credentials "sparent1" "password"
		Then Go to SLMS Parent Grades site
		Then Upon logging in the first thing a parent sees is the Landing page with title "Mobile"
		Then Parent can navigate to the Grades page for their child/children at index "0"
		Then "249" items are available for the child
		

	