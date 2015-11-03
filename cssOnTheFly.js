mainApp.directive('cssOnTheFly', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        template: '',
        replace: true,
        compile: function compile(tElement, tAttrs, transclude) {
            // In config .NET properties in 'UPPERCASE'. In config .php properties in 'UpperCamelCase'.
            var debugProp = $rootScope.config.hasOwnProperty('DEBUG') ? 'DEBUG' : 'Debug';
            var href = $rootScope.config[debugProp] ? tAttrs.hrefDebug : tAttrs.hrefRelease;
            
            if ($("head > link[href='" + href + "']").length == 0) {
                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: href
                }).appendTo("head");
            }
            
            /*
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) { },
                post: function postLink(scope, iElement, iAttrs, controller) { }
            };
            */
        }
    };
}]);