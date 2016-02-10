/*
mainApp.directive('ngBindHtmlUnsafe', [function() {
    return function(scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
        scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
        });
    };
}]);
*/
 mainApp
.directive('TrustedHtml', ['$sce', 
               function( $sce ){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }
]);
