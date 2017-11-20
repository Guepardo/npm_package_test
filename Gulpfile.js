var gulp       = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var source     = require('vinyl-source-stream')
var buffer     = require('vinyl-buffer')
var browserify = require('browserify')
var watchify   = require('watchify')
var babel      = require('babelify')
var webserver  = require('gulp-webserver')
var sass       = require('gulp-sass')

var conf = {
  // JavaScript
  appName:  'demo.js',
  srcJs:    './app',
  destName: 'demo.js',
  destJs:   './demo',

  // SASS
  styleName: 'index.scss',
  srcSass:    './app',
  destSass:   './demo',  
}

function compile(watch) {
  var bundler = watchify(
    browserify(conf.srcJs + '/' + conf.appName, { debug: true })
      .transform(babel.configure({ presets: ['es2015', 'react'] }))
    )

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end') })
      .pipe(source(conf.destName))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(conf.destJs))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...')
      rebundle()
      console.log('->Done')
    })
  }

  rebundle()
}

function watch() {
  return compile(true)
}

// -----------------------------------------------
//
//------------------------------------------------
gulp.task('build', function() { return watch() })

// -----------------------------------------------
//
//------------------------------------------------
gulp.task('webserver', function() {
  gulp.src(conf.destJs)
    .pipe(webserver({
      livereload: true, 
      directoryListining: true, 
      open: true
    }))
})

// -----------------------------------------------
//
//------------------------------------------------
gulp.task('css', function() {
  return gulp.src(conf.srcSass + '/' + conf.styleName)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(conf.destSass))
})

gulp.task('watch_css', function() {
  gulp.watch(conf.srcSass + '/**/*.scss', ['css'])
})
// -----------------------------------------------
//
//------------------------------------------------
gulp.task('dev', ['build', 'webserver', 'watch_css'])

// -----------------------------------------------
//
//------------------------------------------------
gulp.task('default', ['dev'])