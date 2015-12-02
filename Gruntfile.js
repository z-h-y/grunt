
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				stripBanners: true,
				banner: '/* <%-pkg.name%>-<%-pkg.version%>.js <%- grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/test.js',
				dest: 'build/<%-pkg.name%>-<%-pkg.version%>.min.js'
			} 
		},
		jshint:{
			//test1: ['Gruntfile.js'],
			//test2: ['src/*.js'],
			build: ['Gruntfile.js', 'src/*.js'],
			options: {
				//jshintrc: '.jshintrc'
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			bulid: {
				files: ['src/*.js', 'src/*.css'],
				tasks: ['jshint', 'uglify'],
				options: { spawn: false}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint','uglify','watch']);
};