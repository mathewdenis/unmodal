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
          cleancss: true
        },
        files: {
          'dist/dialog.css': 'src/less/dialog.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/less/*.less'],
        tasks: 'less'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);
};