const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
   // .sass('resources/sass/app.scss', 'public/css');
mix.combine(['node_modules/bootstrap/dist/css/bootstrap.css','public/assets/app/blog/blog.css'],
	'public/assets/app/common/css/style.css');
mix.combine(['public/assets/app/js/jquery.slim.min.js',
	'public/assets/app/js/popper.min.js',
	'node_modules/bootstrap/dist/bootstrap.min.js',
	'public/assets/app/js/holder.min.js'],'public/assets/app/common/js/style.js');
mix.sass('node_modules/font-awesome/scss/font-awesome.scss','public/assets/app/css/font.css');