'use strict';

var pkg = require('./package.json');
var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var runSequence = require('run-sequence');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var browserify = require('browserify');
var watchify = require('watchify');
var collapser = require('bundle-collapser/plugin');
var markedify = require('markedify');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
  src: {
    docs: {
      js: 'docs/app.js',
      i: 'docs/assets/i/*',
      less: 'docs/docs.less'
    },
    build: 'src/AMUIReact.js'
  },
  dist: {
    docs: './dist/docs',
    build: './dist',
    lib: './lib'
  }
};

var buildDate = $.util.date(Date.now(), 'isoDateTime');
var banner = [
  '/*! <%= pkg.title %> v<%= pkg.version %>',
  'by Amaze UI Team',
  '(c) ' + $.util.date(Date.now(), 'UTC:yyyy') + ' AllMobilize, Inc.',
  'Licensed under <%= pkg.license %>',
  buildDate + ' */\n'
].join(' | ');
var buildBanner = '/*! build: ' + buildDate + ' */';

var handleError = function(err) {
  $.util.log(err.message);
  this.emit('end');
};

gulp.task('build', function() {
  return browserify({
    entries: [paths.src.build],
    standalone: 'AMUIReact'
  }).transform('browserify-shim', {global: true}) // put shim first!
    .transform('reactify')
    .plugin(collapser)
    .plugin('browserify-derequire')
    .bundle()
    .on('error', handleError)
    .pipe(source('amazeui.react.js'))
    .pipe(buffer())
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest(paths.dist.build))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest(paths.dist.build))
    .pipe($.size({showFiles: true, title: 'minified'}))
    .pipe($.size({showFiles: true, gzip: true, title: 'gzipped'}));
});

gulp.task('docs:less', function() {
  return gulp.src('docs/docs.less')
    .pipe($.less())
    .on('error', handleError)
    .pipe($.autoprefixer())
    .pipe(gulp.dest(paths.dist.docs + '/css'))
    .pipe($.csso())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.header(buildBanner))
    .pipe(gulp.dest(paths.dist.docs + '/css'));
});

// add custom browserify options here
var b = watchify(browserify({
  cache: {},
  packageCache: {},
  entries: ['./docs/app.js'],
  // debug: true,
  extensions: ['.md'],
  transform: [markedify, 'reactify', 'brfs', 'envify']
}));

isProduction && b.plugin(collapser);

var docBundle = function() {
  var s = (
    b.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe($.replace('__VERSION__', pkg.version))
      .pipe(gulp.dest(paths.dist.docs))
      .pipe($.size({
        showFiles: true,
        title: 'Docs bundle'
      }))
  );

  return !isProduction ? s : s.pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.header(buildBanner))
    .pipe(gulp.dest(paths.dist.docs))
    .pipe($.size({
      showFiles: true,
      title: 'Docs bundle minified'
    }))
    .pipe($.size({
      showFiles: true,
      gzip: true,
      title: 'Docs bundle gzipped'
    }));
};

gulp.task('docs:js', docBundle);
b.on('update', docBundle).on('log', $.util.log); // output build logs

gulp.task('docs:copy:ui', function() {
  return gulp.src(['node_modules/amazeui/dist/**/*', '!**/*js', '!**/*flat*'])
    .pipe(gulp.dest(paths.dist.docs));
});

gulp.task('docs:copy:html', function() {
  return gulp.src('./docs/index.html')
    .pipe($.replace(/{{assets.'(.+)'.{0,1}(|min)}}/g, function(match, $1, $2) {
      var file = $1;

      if ($2 && isProduction) {
        var extname = path.extname($1);

        file = $1.replace(extname, '.') + $2 + extname;
      }
      // return isProduction ? '/react/' + file : file;
      return isProduction ? 'http://s.amazeui.org/assets/react/' + file : file;
    }))
    .pipe($.replace(/<script id="stat">[\s\S]*<\/script>/g, function(match) {
      return isProduction ? match : '';
    }))
    .pipe($.replace(/__UICDN__/g, function(match, $1) {
      return isProduction ? 'http://cdn.amazeui.org/amazeui/2.4.0/' : '';
    }))
    .pipe(gulp.dest(paths.dist.docs));
});

gulp.task('docs:copy:i', function() {
  return gulp.src(paths.src.docs.i)
    .pipe(gulp.dest(path.join(paths.dist.docs, 'i')));
});

gulp.task('docs:copy', ['docs:copy:ui', 'docs:copy:html', 'docs:copy:i']);

gulp.task('docs', ['docs:less', 'docs:js', 'docs:copy']);

// upload docs assets to Qiniu
gulp.task('docs:qn', function() {
  gulp.src('dist/docs/**/*')
    .pipe($.qndn.upload({
      prefix: 'assets/react',
      qn: {
        accessKey: process.env.qnAK,
        secretKey: process.env.qnSK,
        bucket: process.env.qnBucketUIS,
        domain: process.env.qnDomainUIS
      }
    }));
});

gulp.task('dev', ['docs'], function() {
  browserSync({
    notify: false,
    logPrefix: 'AMR',
    server: {
      baseDir: 'dist/docs'
    }
  });

  gulp.watch('docs/**/*.less', ['docs:less']);
  gulp.watch(paths.src.docs.i, ['docs:copy:i']);
  gulp.watch(paths.src.docs.html, ['docs:copy:html']);
  gulp.watch(['dist/**/*'], reload);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('npm:clean', function(cb) {
  del([
    paths.dist.lib,
    paths.dist.build
  ], cb);
});

gulp.task('npm:jsx', function() {
  return gulp.src(['src/**/*.js', '!src/__tests__/*.js'])
    .pipe($.if(function(file) {
      return file.path.indexOf('AMUIReact.js') > -1;
    }, $.replace('__VERSION__', pkg.version)))
    .pipe($.react())
    .pipe(gulp.dest(paths.dist.lib));
});

gulp.task('npm:publish', function(done) {
  require('child_process')
    .spawn('npm', ['publish'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('release:tag', function(done) {
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  $.git.tag(v, message, function(err) {
    if (err) {
      throw err;
    }
    $.git.push('origin', 'master', function(error) {
      if (error) {
        throw error;
      }
      done();
    });
  });
});

// Publish to npm
gulp.task('npm', function(cb) {
  runSequence(
    'npm:clean',
    ['npm:jsx', 'build'],
    'npm:publish',
    cb);
});

gulp.task('zip', function() {
  return gulp.src('dist/*.js')
    .pipe($.zip('AmazeUIReact-' + pkg.version + '.zip'))
    .pipe(gulp.dest(paths.dist.build));
});

gulp.task('release', function(cb) {
  runSequence('npm', 'realese:tag', cb);
});

// Examples server
gulp.task('examples', function() {
  var app = browserSync({
    files: 'examples/**/*',
    notify: false,
    logPrefix: 'AMR',
    server: {
      baseDir: ['examples'],
      routes: {
        '/lib': 'node_modules'
      },
      middleware: [
        function(req, res, next) {
          if (path.extname(req.url) === '.js' &&
            req.url.indexOf('/lib/') === -1) {
            return browserify({
              entries: path.join(__dirname, 'examples', req.url),
            }).transform('browserify-shim', {global: true})
              .transform('reactify')
              .bundle(function(err, src) {
              res.setHeader('Content-Type', 'application/javascript');
              res.end(src.toString());
            });
          }
          next();
        },
        function(req, res, next) {
          if (path.extname(req.url) === '.less') {
            var file = path.join(__dirname, 'examples', req.url);
            var src = require('fs').readFileSync(file).toString();

            return require('less').render(src, {
              compress: false,
              paths: ['./', path.dirname(file)]
            }).then(function(result) {
              res.setHeader('Content-Type', 'text/css');
              res.end(result.css);
            }, function(err) {
              console.log(err.message);
            });
          }
          next();
        }
      ]
    }
  });

  gulp.watch('examples/**/*', app.reload);
});

gulp.task('default', ['dev', 'build', 'watch']);
