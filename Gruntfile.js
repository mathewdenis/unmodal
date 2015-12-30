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
          paths: ['assets/css']
        },
        files: {
          'src/css/unmodal.css': 'src/less/unmodal.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css'],
          compress: true
        },
        files: {
          'dist/unmodal.min.css': 'src/less/unmodal.less'
        }
      }
    },

    copy: {
      production: {
        files: [
          {expand: true, flatten: true, src: 'src/js/unmodal.js', dest: 'dist'},
          {expand: true, flatten: true, src: 'src/css/unmodal.css', dest: 'dist'}
        ]
      }
    },

    uglify: {
      production: {
        options: {
          banner:
          '/*!\n' +
           '* Unmodal -- jQuery modal plugin\n' +
           '* Version: <%= pkg.version %>\n' +
           '* https://github.com/wangchi/unmodal\n' +
           '*\n' +
           '* Copyright 2015 hiwangchi@gmail.com\n' +
           '* MIT License\n' +
           '*/\n'
        },
        files: {
          'dist/unmodal.min.js': ['src/js/unmodal.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/less/*.less'],
        tasks: ['less:development']
      }
    },

    browserSync: {
      development: {
        src: [
          'src/html/*.html',
          'src/css/*.css',
          'src/js/*.js'
        ],
        options: {
          port: '3000',
          watchTask: true,
          server: {
            baseDir: './'
          },
          open: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('server', ['browserSync:development', 'less:development', 'watch']);

  grunt.registerTask('build', ['less:production', 'copy:production', 'uglify:production']);
};
