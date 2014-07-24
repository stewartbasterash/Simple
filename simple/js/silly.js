// JavaScript source code
var SILLY = (function(module) {
    
    module.DoIt = function (resultObject) {
        resultObject.prepend(new Date() + '<br/>');
    };

    return module;
}(SILLY || {}));
