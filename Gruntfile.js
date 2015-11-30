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
          'dist/dialog.css': 'src/less/dialog.less'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: 'src/js/dialog.js', dest: 'dist'}
        ]
      }
    },

    watch: {
      scripts: {
        files: ['src/less/*.less', 'src/js/*.js'],
        tasks: ['less', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'copy', 'watch']);
};