	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/forside.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/udstyr', {
				templateUrl : 'pages/udstyr.html',
				controller  : 'udstyrController'
			})

			// route for the contact page
			.when('/om_os', {
				templateUrl : 'pages/omOs.html',
				controller  : 'omOsController'
			})

			.when('/produkter', {
				templateUrl : 'pages/productListing.html',
				controller  : 'listingController'
			})

			.when('/produkter/:id', {
				templateUrl : 'pages/productPage.html',
				controller  : 'productController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {

	});

	scotchApp.controller('udstyrController', function($scope) {

	});

	scotchApp.controller('omOsController', function($scope) {

	});

	scotchApp.controller('listingController', function($scope) {

	});

	scotchApp.controller('productController', function($scope, $routeParams) {

	});
