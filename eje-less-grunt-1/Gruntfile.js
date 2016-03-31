module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/operations.min.js'
      }
    },
    less:{
      development:{
        options:{
          paths:['src/less/']
        },
        files:{
          'dist/css/styles.min.css':'src/less/styles.less'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
