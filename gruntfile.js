module.exports = function(grunt) {

  require('dotenv').config();
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['sass','cssmin','es6transpiler:dist','uglify','replace','clean']); //'header','clean'
  grunt.registerTask('serve', ['sass','cssmin','es6transpiler','copy','connect','open','watch']);
  grunt.registerTask('publish', ['build','shell:git_add','shell:git_commit','shell:git_push','shell:npm_version','shell:npm_publish','shell:surge']);

  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          //'scss/style.css' : 'scss/style.scss',
          'scss/demo.css' : 'scss/demo.scss',
          'scss/bubb.css' : 'scss/bubb.scss'
        }
      }
    },
    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['*.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },
    es6transpiler: {
      dist: {
          files: {
              'js/scrip_transpiled.js': 'js/script.js'
          }
      }
    },
    uglify: {
      js: {
        files: {
          'dist/bubb.min.js': ['js/scrip_transpiled.js']
        }
      }
    },
    copy: {
      main: {
        files: [{
          src: 'js/scrip_transpiled.js',
          dest: 'dist/bubb.min.js'
        },
        {
          src: 'scss/demo.css',
          dest: 'dist/demo.min.css'
        },
        {
          src: 'scss/bubb.css',
          dest: 'dist/bubb.min.css'
        },
        {
          src: 'html/index.html',
          dest: 'dist/index.html'
        }]
      }
    },
    replace: {
      default: {
        options: {
          patterns: [
            {
              match: /<.+\sdelete\s.*\/.+>/g,
              replacement: ''
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['html/index.html'], dest: 'dist'}
        ]
      }
    },
    header: {
        dist: {
            options: {
                text: '/* by frdnrdb '+new Date().toISOString()+' */'
            },
            files: {
                'dist/demo.min.css': 'dist/demo.min.css',
                'dist/bubb.min.css': 'dist/bubb.min.css',
                'dist/bubb.min.js': 'dist/bubb.min.js'
            }
        }
    },
    clean: ['scss/style.css', 'scss/demo.css', 'scss/bubb.css', 'js/scrip_transpiled.js'],
    watch: {
      source: {
        files: ['scss/*.scss','html/index.html','js/script.js'],
        tasks: ['sass','es6transpiler','copy','clean'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 5000,
          hostname: 'localhost',
          base: 'dist'
        }
      }
    },
    open : {
      main: {
        path: 'http://localhost:5000',
        app: grunt.option('safari') ? 'Safari' : 'Google Chrome'
      }
    },
    shell: {
  		git_add: {
  			command: 'git add .'
  		},
      git_commit: {
  			command: 'git commit -m \'patch\''
  		},
      git_push: {
  			command: 'git push https://<%= process.env.GIT_USER %>:<%= process.env.GIT_PASS %>@github.com/frdnrdb/bubb.git master'
  		},
      npm_version: {
  			command: 'npm version patch'
  		},
      npm_publish: {
  			command: 'npm publish'
  		},
      surge: {
  			command: 'surge'
  		}
  	}
  });

};
