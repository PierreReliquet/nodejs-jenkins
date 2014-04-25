module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["report/*"],
        mochaTest: {
            jenkins: {
                src: ['test/*.js'],
                options: {
                    reporter: 'xunit',
                    quiet: true,
                    captureFile: 'report/test-reports.xml'
                }
            }
        }
    });

    grunt.registerTask("default", ["clean", "mochaTest"]);

};