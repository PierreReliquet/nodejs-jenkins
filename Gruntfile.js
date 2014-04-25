module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["test-reports.xml"],
        mochaTest: {
            jenkins: {
                src: ['*.js'],
                options: {
                    reporter: 'xunit',
                    quiet: true,
                    captureFile: 'test-reports.xml'
                }
            }
        }
    });

    grunt.registerTask("default", ["clean", "mochaTest"]);

};