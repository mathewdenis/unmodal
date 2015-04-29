module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    paths: ['test/css'],
                    // cleancss: true,
                    modifyVars: {
                        imgPath: '"http://www.walkerbe.com/static/images/"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'dist/css/style.css': 'src/less/index.less'
                }
            }
        },

        csslint: {
            build: {
                src: ['dist/css/*.css']
            }
        },
        cssmin: {
            //options: {
            //    banner: '/*! <%= grunt.template.today("yyyy-mm-dd H:M:s") %> @WalkerBe */'
            //},

            style: {
                src: 'dist/css/style.css',
                dest: 'dist/css/style.min.css'
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: 'default'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin', 'watch']);

};