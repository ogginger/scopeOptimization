//test_scopeOptimization.js: Testing Logic.

define(["tests/scopeOptimization_SimpleOptimization_ReturnsScopedOptimization","TestSuite","log","scopeOptimization"], function(scopeOptimization_SimpleOptimization_ReturnsScopedOptimization,TestSuite,log,scopeOptimization) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_scopeOptimization initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "scopeOptimization" );
      xTestSuite.add([
        scopeOptimization_SimpleOptimization_ReturnsScopedOptimization
      ]);
      xTestSuite.test();
    }
  });
});