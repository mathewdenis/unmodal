'use strict';

module.exports = function (grunt) {
  var paths = {
    less: 'src/less/',
    dist: 'dist/'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assets/css'],
          compress: false
        },
        files: {
          'src/css/unmodal.css': 'src/less/unmodal.less'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: 'src/js/unmodal.js', dest: 'src/js'}
        ]
      }
    },

    watch: {
      scripts: {
        files: ['src/less/*.less'],
        tasks: ['less']
      }
    },

    browserSync: {
      bsFiles: {
        src: [
          'src/html/*.html',
          'src/css/*.css',
          'src/js/*.js'
        ],
        options: {
          port: '3000',
          watchTask: true,
          server: {
            // proxy: 'server.js'
            baseDir: './'
          },
          open: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('server', ['browserSync', 'less', 'watch']);
};
