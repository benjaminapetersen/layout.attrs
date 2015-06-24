module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/attr-helpers.css': 'src/attr-helpers.scss',
                    'dist/attr-flex-layout.css': 'src/attr-flex-layout.scss',
                    'dist/attr-positioning.css': 'src/attr-positioning.scss',
                    'dist/class-helpers.css': 'src/class-helpers.scss',
                    'dist/social.css' : 'src/social.scss',
                    'dist/experiments.css' : 'src/experiments.scss',
                    'dist/typography.css' : 'src/typography.scss',
                    'dist/sketch.css' : 'src/sketch.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            attrs_helpers: {
                src: 'dist/attr-helpers.css',
                dest: 'dist/attr-helpers.css'
            },
            attr_flex_layout : {
                src: 'dist/attr-flex-layout.css',
                dest: 'dist/attr-flex-layout.css'
            },
            classes_base: {
                src: 'dist/class-helpers.css',
                dest: 'dist/class-helpers.css'
            },
            // shadows and things
            experiments: {
                src: 'dist/experiments.css',
                dest: 'dist/experiments.css'
            }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'dist/',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/',
              ext: '.min.css'
            }]
          }
        },
        watch: {
          scripts: {
            files: 'src/*',
            tasks: ['default'],
            options: {
                interrupt: true,
                debounceDelay: 250
            }
          }
        }

    });

    // 1. build the sass into css files
    // 2. autoprefix those files
    // 3. minify those files
    // - provide output at each level rather than overwriting
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);

};