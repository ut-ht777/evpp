/**
 * Gulp task runner for managing assets in a project.
 *
 * Before running first task make sure you have all node modules installed.
 * To do so navigate to this folder and run the following command:
 *
 * @command: npm install
 *
 * Tasks available:
 *
 * - gulp (default)
 * First runs the build task to build all the assets,
 * then runs the watch task to watch for changes on the files.
 *
 * - gulp build
 * Runs only the initial tasks to build all the assets.
 *
 */

'use strict';

// Include gulp
var gulp = require('gulp');

// Config file
var config = require('./gulp/config.json');

// Include file system
var fs = require('fs');

// Auto load all required plugins
var $ = require('gulp-load-plugins')({
	pattern: '*',
	scope: 'dependencies',
	rename: {
		'jshint': 'jshintCore',
		'jshint-stylish': 'stylish'
	}
});

// Messages data for notify to display
var messages = {
	error: function(err) {
		$.notify.onError({
			title: config.messages.error.title,
			message: config.messages.error.message
		}) (err);

		this.emit('end');
	},
	success: {
		title: config.messages.success.title,
		message: config.messages.success.message,
		onLast: true
	}
};

// Load tasks from files
$.loadSubtasks('gulp/tasks/*.js', $, config, messages, fs);

// Gulp build task to run all tasks just once
gulp.task('build',
  gulp.series('styles', 'scripts')
);

// Default Gulp task to Run
gulp.task('default',
	gulp.series('build', 'watch')
);
