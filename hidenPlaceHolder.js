mainApp.directive('hidenPlaceHolder', function() {
    return {
		restrict: 'A',
		link: function(scope, elm, attrs) 
		{	
			// Delete placeHolder field information.
			$(elm).on('focus', function ()
			{
				$(elm).attr("placeholder",'');
			});
			
			// Introduce data in the field placeHolder.
			$(elm).on('focusout', function (event)
			{
				$(elm).attr("placeholder",attrs.placeholder);
			});
			
			
		}
	};
});