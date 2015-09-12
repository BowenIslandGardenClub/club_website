var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var nunjucks = require('nunjucks');
var handlebars = require('handlebars');
var contentful = require('contentful-metalsmith');
var moment = require('moment-timezone');
var ESAPI = require('node-esapi');
var sortBy = require('sort-by');

var marked = require('marked');
marked.setOptions({
  sanitize : true,
  smartypants : true});
  

var logFilesMap = function(files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
        var fileObject = files[file];

        console.log("key -------> ", file);
        console.log("value -----> ", fileObject);
    });
    done();
};

var logMetaData = function(files, metalsmith, done) {
	Object.keys(metalsmith.metadata()).forEach(function(dataObjKey) {
		var dataObject = metalsmith.metadata()[dataObjKey];
		
		console.log("key ------> ", dataObjKey);
		console.log("value ----> ", dataObject);
	});
  console.log("Finished with logging.");
  done();
};

var plugin = function(files, metalsmith, done) {
    console.log(files);
    done();
};


console.log("starting Metalsmith now");

Metalsmith(__dirname)
    .destination('./build')
//    .use(plugin)
    .use(contentful({
      accessToken : '523ad29cf40ce3587d53e637fd52aa49bade02364e7d95f9f12de9a85fbf777a'}))
//    .use(logFilesMap)
//    .use(logMetaData)
    .use(layouts({
      engine: 'nunjucks',
      directory: 'templates',
      moment: moment,
      sortBy: sortBy,
      marked: marked,
      ESAPI: ESAPI,
      marked : marked}
    ))
    .build(function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Finished with Metalsmith');
        }
    });
