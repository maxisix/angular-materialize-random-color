'use strict';

require('angular');

var app = angular.module('MaterialColor', []);

	app.factory('ActionFactory', function() {

		var factory = {
			colors : [
				"red",
				"pink",
				"purple",
				"deep-purple",
				"indigo",
				"blue",
				"light-blue",
				"cyan",
				"teal",
				"green",
				"light-green",
				"lime",
				"yellow",
				"amber",
				"orange",
				"deep-orange",
				"brown",
				"grey",
				"blue-grey"
			],
			getColor: function() {
				// here function to get random colors
				random1 = Math.floor((Math.random() * 19)),
				random2 = Math.floor((Math.random() * 19));

				var random_primary = document.getElementById('random-primary');
				var random_secondary = document.getElementById('random-secondary');

				random_primary.classList.add(factory.colors[random1]);
				random_secondary.classList.add(factory.colors[random2]);

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