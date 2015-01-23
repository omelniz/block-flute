module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({

        // Sass (начало)
        sass: {
            dev: {
                files: {
                    'css/screen.css': 'sass/screen.sass'
                },
                options: {
                    compass: true,
                    style: 'expanded',
                    trace: true,
                    sourceMap: false
                }
            },
            prod: {
                files: {
                    'distr/css/screen.min.css': 'sass/screen.sass'
                },
                options: {
                    compass: true,
                    style: 'compressed',
                    sourceMap: false
                }
            }
        },
        // Sass (конец)

        // Autoprefixer (начало)
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            devScreenFile: {
                src:  'css/screen.css',
                dest: 'css/screen.css'
            },
            prodScreenFile: {
                src:  'distr/css/screen.min.css',
                dest: 'distr/css/screen.min.css'
            }
        },
        // Autoprefixer (конец)

        // Watch (начало)
        watch: {
            sass: {
                files: ['sass/**/*.sass', 'sass/**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer:devScreenFile']
            }
        },
        // Watch (конец)

        // Requirejs (начало)
        requirejs: {
            prod: {
                options: {
                    baseUrl: "js",
                    mainConfigFile: "js/common/config/require.config.js",
                    name: "init",
                    out: "distr/js/main.build.js",
                    preserveLicenseComments: false
                }
            }
        }
        // Requirejs (конец)
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('development', ['watch:sass']);
    grunt.registerTask('build-developer', ['sass:dev', 'autoprefixer:devScreenFile']);
    grunt.registerTask('build-production', ['sass:prod', 'autoprefixer:prodScreenFile', 'requirejs:prod']);
};
