mainApp.directive('stopPropagation', function() {
    return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			$(elm).on('click', function(event) {
				event.stopPropagation();
			});
		}
	};
});