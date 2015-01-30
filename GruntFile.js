// 'use strict';

module.exports = function(grunt){

	// Load grunt tasks automatically based on package.json dependancies
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Config tasks
	grunt.initConfig({

		// lib sass, https://github.com/sindresorhus/grunt-sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'public/css/warshark.css': 'public/sass/warshark.scss'
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
						'public/js/vendor/angular-ui-router/release/angular-ui-router.js',
						'public/js/vendor/jquery/dist/jquery.js',

						// Application
						'public/js/application/mapmaker/mapmaker.js',
						'public/js/application/mapmaker/service.mapmaker.js',
						'public/js/application/mapmaker/ctrl.mapmaker.js',
						'public/js/application/mapmaker/directive.position.js',
						'public/js/application/warshark.js'
					]
				}
			}
		},

		watch: {
			files: ['public/js/application/**/*.js'],
			tasks: ['uglify'],
			sass: {
				files: ['public/sass/**/*.{scss,sass}','public/sass/_partials/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['views/*.ejs', 'public/dist/js/*.{js,json}', 'public/css/*.css','public/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		}

	});

	// grunt.registerTask('compile', ['npm-install', 'clean:vendor', 'bower:install', 'copy:fonts', 'compass', 'copy:images', 'copy:css', 'concat', 'copy:js', 'copy:fileUploadMap', 'karma:unit']);
	grunt.registerTask('default', ['watch', 'sass:dist']);
};