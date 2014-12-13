'use strict';

require('angular');

var app = angular.module('MaterialColor', []);

	app.factory('ColorFactory', function() {

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
			getRandomColor: function() {
				// function to get random colors
				var news = new Array;
				
				random1 = Math.floor((Math.random() * 19)),
				random2 = Math.floor((Math.random() * 19));

				// var random_primary = document.getElementById('random-primary');
				// var random_secondary = document.getElementById('random-secondary');

				news['primary'] = factory.colors[random1];
				news['secondary'] = factory.colors[random2];
				// random_primary.classList.add(factory.colors[random1]);
				// random_secondary.classList.add(factory.colors[random2]);

				return news;
			},
			copyColor: function(id) {
				// function to copy color in clipboard
				return false;
			}

		}

		return factory;
	} );

	app.factory('UserFactory', function() {

		var factory = {
			colors : [
				{
					"id": 0,
					"primary": "blue",
					"secondary": "red"
				},
				{
					"id": 1,
					"primary": "purple",
					"secondary": "lime"
				},
				{
					"id": 2,
					"primary": "blue",
					"secondary": "brown"
				}
			],
			getColorSaved: function() {
				// return color saved by user 
				return factory.colors;
			},
			saveColor: function(news) {
				// function to save colors in user preferences
				return false;
			},
			removeColor: function(id) {
				// function to remove colors from user preferences
				return false;
			}

		}

		return factory;
	} );

	app.controller( 'ColorsCtrl', function($scope, ColorFactory, UserFactory) {
		$scope.colors = UserFactory.getColorSaved();

		$scope.save = function() {
			//save colors in user preferences
			UserFactory.saveColor(news);
		}

		$scope.random = function() {
			var news = ColorFactory.getRandomColor();
			console.log( news );
		}
	} );