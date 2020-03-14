//scopeOptimization.js: Functional Logic.

define(["Module"], function(Module) {
  return function( Input ) {
    let modules = Input
    .split(/define\(/)
    .map(( element ) => { return "define(" + element })
    .slice(1)
    .map(( element ) => { return element.replace(/,$/, ";"); })
    .map(( element ) => { return new Module().parse( element ); });
    let root = modules[modules.length - 1].Name;
    let scopedOptimization = modules.map(( element, index ) => { 
      if ( index != modules.length - 1 ) {
        return element.compose({ Name: root + "." + element.Name });
      } else {
        return element.compose({});
      }  
    }).map(( element ) => {
      return element.replace(/;$/, "");
    }).map(( element ) => {
      return element.replace(/\s/g, "" );
    }).join();
    scopedOptimization += ";";
    return scopedOptimization;
  };
});
