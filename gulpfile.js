'use strict';

var gulp         = require( 'gulp' ),
    notify       = require( 'gulp-notify' ),
    sass         = require( 'gulp-sass' );

/* Отслеживание styles.scss */

gulp.task( 'sass', function()
{
  gulp.src( 'sass/*.scss' )
    .pipe( sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass error!"
      } ) )
  )
    .pipe( gulp.dest( 'css/' ) )
    .pipe( notify( 'SASS - хорошая работа!' ) );
} );

/* Watcher */

gulp.task( 'watch', function()
{
  gulp.watch( 'sass/*.scss', [ 'sass' ] );
} );

/* Таск по умолчанию */

gulp.task( 'default', [
  'sass',
  'watch'
] );
