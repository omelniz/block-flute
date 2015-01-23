define([
	"backbone"
], function (Backbone) {
	"use strict";

	var NoteModel = Backbone.Model.extend({
		defaults: {
			duration: 300
		},
		idAttribute: "name"
	});

	return NoteModel;
});