define([], function() {
    return "define(\"dep\",[],function(){return\"abc\"}),define(\"simpleOptimization\",[\"dep\"],function(e){console.log(e)});";
});