'use strict';

require('angular');

var app = angular.module('MaterialColor', []);

	app.factory('ActionFactory', function() {

		var factory = {
			getColor: function() {
				// here function to get random color
				return false;
			},
			saveColor: function(id) {
				// here function to copy hex in clipboard 
				return false;
			}

		}

		return factory;
	} );

	app.controller( 'ColorsCtrl', function($scope, ActionFactory) {
		$scope.colors = ActionFactory.getColor();
	} );