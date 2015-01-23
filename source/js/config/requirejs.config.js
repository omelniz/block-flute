// Requirejs config
requirejs.config({

	baseUrl: "js",

	deps: ["init"],

	paths: {

		// Libs
		"jquery":       "components/jquery/dist/jquery",
		"underscore":   "components/underscore/underscore",
		"backbone":     "components/backbone/backbone",
	},

	shim: {
		"jquery": {
			exports: "$"
		},
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		}
	}
});