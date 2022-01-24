const mix = require('laravel-mix');
const path = require("path");

mix.webpackConfig({
	module: {
		rules: [
			// Add support for Vue ref sugar (let ref = $ref())
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					reactivityTransform: true,
				},
			},
			// Add support for <style lang="postcss"> blocks
			{
				test: /\.(postcss)$/,
				use: ["vue-style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader"],
			},
		],
	},
});

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

// Vue js
mix.js('resources/vendor/SkeletonAdmin/js/app.js', 'public/vendor/SkeletonAdmin/js')
    .vue({version: 3})
    .sourceMaps()
    .version();
const tailwindcss = require('tailwindcss')

mix.sass('resources/vendor/SkeletonAdmin/sass/app.scss', 'public/vendor/SkeletonAdmin/css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('tailwind.config.js') ],
});
