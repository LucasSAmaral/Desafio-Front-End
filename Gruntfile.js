module.exports = function(grunt) {
    
    "use strict"

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: "**/*.scss",
                tasks: "sass"
            },
            html: {
                files: "**/*.html"
            },
        },

        sass: {
            dist: {
                files: {
                    "build/css/application.css": "src/scss/style.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("dev", ["connect", "watch"]);
};