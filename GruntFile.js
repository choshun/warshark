// 'use strict';

module.exports = function(grunt){

	// Load grunt tasks automatically based on package.json dependancies
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Config tasks
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		clean: {
			content: ['../EMIT.Wave.Web/Content/'],
			coverage: ['test/coverage/'],
			vendor: ['js/vendor/'],
			js: ['../EMIT.Wave.Web/Content/js']
		},

		jshint: {
			all: ['js/application/article/article.add-buttons.directive.js'],
			options : {
				jshintrc : '.jshintrc'
			}
		},

		uglify: {
			my_target: {
				options: {
					sourceMap: true,
					sourceMapName: 'public/sourcemap.map'
				},

				files: {
					'public/js/dist/warshark.js': [
						// Vendor
						'public/js/vendor/angular/angular.js',
						'public/js/vendor/angular-route/angular-route.js',
						'public/js/vendor/jquery/dist/jquery.js'

						// Application
						//'public/js/application/warshark.js'
					]
				}
			}
		}
	});

	// TODO: I guess use shell to do clean, then karma start test/karma.config etc, then connect:server

	// grunt.registerTask('compile', ['npm-install', 'clean:vendor', 'bower:install', 'copy:fonts', 'compass', 'copy:images', 'copy:css', 'concat', 'copy:js', 'copy:fileUploadMap', 'karma:unit']);
	// grunt.registerTask('default', ['watch']);
};