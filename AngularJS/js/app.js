function MyController($scope){
	$scope.clock = {
		now: new Date();
	};
	var updateClock = function(){
		$scope.clock = new Date();
	};
	setInterval(function(){
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
};