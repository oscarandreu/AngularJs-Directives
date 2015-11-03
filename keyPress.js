mainApp.directive('keyPress', ['$location', '$rootScope', function($location, $rootScope) {
	
	
	function checkFilter (obj)
	{
		
		if (!obj.hasOwnProperty('filterPath'))
			return false;
				
		for (var i = 0; i < obj.filterPath.length; ++i)
		{
			if ( (obj.filterPath[i] == '*') || ($location.path().search(obj.filterPath[i]) != -1) )
				return true;
		}
		
		return false;
	}
	
    return {
		restrict: 'A',
		link: function(scope, elm, attrs) 
		{	
			// Delete placeHolder field information.
			$('body').off('keydown');
        	$('body').on('keydown',function(e)
            {
        		var obj = JSON.parse(attrs.keyPress);
        		if ( checkFilter(obj) )
        		{
        			for (var i = 0;  i < obj.characters.length; ++i)
        				if (obj.characters[i] == e.which)
        				{
        					if (obj.hasOwnProperty('stopPropagateEvent') && (obj.stopPropagateEvent))
        						e.preventDefault();
        					
        					$rootScope.$broadcast(obj.event, e.which, false );
        				}
        		}
        
        	});
        
			
		}
	};
}]);