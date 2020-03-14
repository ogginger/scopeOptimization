//scopeOptimization_SimpleOptimization_ReturnsScopedOptimization.js: Testing logic.

define([
	"scopeOptimization",
	"tests/etc/simpleOptimization"
], function(
	scopeOptimization,
	simpleOptimization
) {
	return {
		"Name":"scopeOptimization_SimpleOptimization_ReturnsScopedOptimization",
		"Input": simpleOptimization,
		"Function": scopeOptimization,
		"ExpectedOutput": "define(\"simpleOptimization.dep\",[],function(){return\"abc\"}),define(\"simpleOptimization\",[\"dep\"],function(e){console.log(e)});",
		"Debug": true
	};
});
