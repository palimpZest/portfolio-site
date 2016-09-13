module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        name: '1200_xlarge',
                        width: 1200,
                        suffix: '_2x',
                        quality: 60
                        },{
                        name: '900_xlarge',
                        width: 900,
                        suffix: '_1x',
                        quality: 60
                        },{
                        name: '1000_large',
                        width: 1000,
                        suffix: '_2x',
                        quality: 60
                        },{
                        name: '800_large',
                        width: 800,
                        suffix: '_1x',
                        quality: 60
                        },{
                        name: '600_medium',
                        width: 600,
                        quality: 60
                        },{
                        name: '400_small',
                        width: 400,
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,PNG}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            }
        },
        jshint: {
            all: [
                'Gruntfile.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['jshint', 'responsive_images']);


};
