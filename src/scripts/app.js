// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "scripts/vendor",
    "paths": {
		"app": "../app",
      "mobileMenu": "../app/mobileMenu"
    }
});
 
// Load the main app module to start the app
requirejs(["app/main"]);