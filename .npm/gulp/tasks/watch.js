/**
 * Watch for file changes and run tasks.
 *
 * Tasks:
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function(gulp, $, config, messages, fs) {
  gulp.task('watch', function() {
    gulp.watch(config.sass.src, gulp.series('styles'));
    gulp.watch(config.javascript.src, gulp.series('scripts'));
  });
};
