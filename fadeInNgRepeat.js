mainApp.directive('fadeInNgRepeat', function() {
    return {
		restrict: 'A',
		link: function(scope, elm, attrs) {			
			var duration = parseInt(attrs.fadeInNgRepeat);
            if (isNaN(duration)) {
                duration = 500;
            }

            elm = jQuery(elm);
            elm.hide();
            elm.fadeIn(duration);

            scope.destroy = function(complete) {
                elm.fadeOut(duration, function() {
                    if (complete) {
                        complete.apply(scope);
                    }
                });
            };
		}
	};
});