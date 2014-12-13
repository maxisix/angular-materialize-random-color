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
				
				//generate new random colors in array
				var random = new Array();
					random['random1'] = factory.colors[ Math.floor((Math.random() * 19)) ];
					random['random2'] = factory.colors[ Math.floor((Math.random() * 19)) ];

				return random;
			},
			changeRandomColor: function() {
				// function to change value of random colors

				//get old elements
				var random_primary = $('#random-primary');
				var random_secondary = $('#random-secondary');
				var newRandomColors = factory.getRandomColor();

				// remove old colors classes and add news && adjust data color
				random_primary
					.removeClass( random_primary.data('data_primary_rand') )
					.addClass( newRandomColors['random1'] )
					.data('data_primary_rand', newRandomColors['random1'] ); 

				random_secondary
					.removeClass( random_secondary.data('data_secondary_rand') )
					.addClass( newRandomColors['random2'] )
					.data('data_secondary_rand', newRandomColors['random2'] );

				return true;
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
					"secondary": "red",
					"saved": true //add show difference with random colors 
				},
				{
					"id": 1,
					"primary": "purple",
					"secondary": "lime",
					"saved": true
				},
				{
					"id": 2,
					"primary": "blue",
					"secondary": "brown",
					"saved": true
				}
			],
			getLastId: function() {
				// temporary function returning the tallest color id (pending databse)
				var lastId = 0;
				angular.forEach( factory.colors, function(value, key) {
					if( value.id > lastId ) {
						lastId = value.id;
					}
				} );
				return lastId;
			},
			getColorSaved: function() {
				// return color saved by user 
				return factory.colors;
			},
			saveColor: function( primary, secondary ) {
				// function to save colors in user preferences
				var lastId = factory.getLastId();
				factory.colors.push( { id: lastId + 1, primary:primary, secondary:secondary, saved:true } );
				return true;
			},
			removeColor: function(id) {
				// function to remove colors from user preferences
				return false;
			}

		}

		return factory;
	} );

	app.controller( 'ColorsCtrl', function($scope, ColorFactory, UserFactory) {

		//init function (get user color && generate one random combination)
		$scope.init = function() {
			var colorSaved = UserFactory.getColorSaved();
			var colorRandom = ColorFactory.getRandomColor();
			console.log(colorSaved);
			console.log(colorRandom);
		}
		$scope.colors = $scope.init();

		$scope.save = function() {
			//save colors in user preferences
			UserFactory.saveColor(
				$('#random-primary').data('data_primary_rand'),
				$('#random-secondary').data('data_secondary_rand')
			);
		}

		$scope.random = function() {
			var news = ColorFactory.changeRandomColor();
		}
	} );