function registerTasks(grunt) {
    grunt.registerTask('default', ['jasmine']);
}
function loadTasks(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');
}
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: ['src/canvas-js-lib.js'],
                options: {
                    specs: 'tests/*.spec.js',
                    helpers: 'tests/*helper.js'
                }
            }
        }
    });
    loadTasks(grunt);
    registerTasks(grunt);
};
