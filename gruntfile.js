module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          dist: {
            files: {
              'public/app.js': ['client/bootstrap.js']
            },
            options: {
              shim: {
                    jquery: {
                        path: 'bower_components/jquery/jquery.js',
                        exports: '$'
                    },
                    underscore: {
                        path: 'bower_components/underscore/underscore.js',
                        exports: '_'
                    },
                    backbone: {
                        path: 'bower_components/backbone/backbone.js',
                        exports: 'Backbone',
                        depends: {
                            underscore: 'underscore'
                        }
                    },
                    'backbone.marionette': {
                        path: 'bower_components/backbone.marionette/lib/backbone.marionette.js',
                        exports: 'Marionette',
                        depends: {
                            jquery: '$',
                            backbone: 'Backbone',
                            underscore: '_'
                        }
                      }
                  },
              transform: ['hbsfy'],
              aliasMappings: [
                  {
                    cwd: 'client',
                    src: ['*.js'],
                    dest: 'lib',
                  }
                ],
              alias: ["./client/homeLayout.js:HomeLayout"],
              debug: true
            }
          },
          specs: {
            src: ['specs/*.js'],
            dest: 'jasmine/specs_bundle.js',
            options: {
              external: ['client/*.js']
            }
          }
        },
        nodemon: {
            dev: {}
        },
        watch: {
          browserify: {
            files: ["client/*.js", "client/*.hbs", "specs/*.js"],
            tasks: ['browserify']
          }
        },
        shell: {
            mongo: {
                command: '/usr/bin/mongodb/bin/mongod'
            }
        },
        concurrent: {
            target1: ['watch','nodemon','shell'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['browserify','concurrent:target1']);
    //grunt.registerTask('default', ['browserify','shell','nodemon','watch']);

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
}
