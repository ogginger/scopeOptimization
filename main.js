//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs(["test_scopeOptimization","code"], function(test_scopeOptimization,code) {
	console.log("Main initialized successfully!");

	new test_scopeOptimization();

	let sTestName = "scopeOptimization_SimpleOptimization_ReturnsScopedOptimization";
	//code( __dirname );
	/*
	.addDependency({
		FileName: "scopeOptimization/test_scopeOptimization.js",
		Dependency: "tests/" + sTestName,
		Export: sTestName
	});
	//*/
	/*
	.Snip.render({
		TemplateType: "test",
		FileName: "scopeOptimization/tests/" + sTestName + ".js",
		Options: {
			Name: sTestName,
			Method: "scopeOptimization"
		}
	});
	//*/
});