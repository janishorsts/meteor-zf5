Package.describe({
	summary: "Foundation 5 with Sass for Meteor"
});

Package.on_use(function (api) {
	api.use([
		'jquery'
	], 'client');

	api.add_files([
        'js/vendor/modernizr.js',
        'js/foundation.js'
	], 'client');
});