angular
    .module('mapmaker')
    .controller('MapmakerCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    	
    	this.model = {
    		'Rob': 'I am the captian now',
    		'I believe in alex': false,
    		'nodes': [
    			{
    				'name': 'Mexico'
    			},
    			{
    				'name': 'Fresno'
    			}
    		]
    	};

    	this.updateNodeName = function(name, index) {
    		this.model.nodes[index].name = name;
    		$scope.$apply();
    		console.log(this.model);
    	};

    	// For testing directive firing when control model changes with $observe
		$timeout(angular.bind(this, function() {
			this.model.nodes[0].name = 'snyarf';
			$scope.$apply();
		}), 3000);
    }]);