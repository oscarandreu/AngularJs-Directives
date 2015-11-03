 mainApp.directive('ngLoad', ['$parse', '$timeout', function($parse, $timeout) {
    return  {
		restrict: 'A',
		compile: function($element, attr) {
			var fn = $parse(attr['ngLoad']);
			return function(scope, element, attr) {
				element.on('load', function(event) {
					$timeout(function() {
						scope.$apply(function() {
							fn(scope, { $event: event } );
						});
					});
				});
			};
		}
    };
}]);