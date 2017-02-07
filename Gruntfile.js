module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

            files: ['Grunfile.js', 'src/**/*.js']
        },
        ngtemplates: {
            app: {
                cwd: 'src',
                src: 'app/**/*.html',
                dest: '.tmp/templates.js',
                options: {
                    usemin: 'js/app.min.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd/mm/yyyy") %> by <%= pkg.author %> */\n',
                mangle: {
                    except: ['vm']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint', 'karma', 'copy:html', 'useminPrepare', 'ngtemplates', 'concat', 'uglify', 'usemin']);
    grunt.registerTask('test', ['karma']);
};
