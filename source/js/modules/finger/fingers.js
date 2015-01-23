define([
	"backbone",
	"modules/finger/finger-model"
], function (Backbone, FingerModel) {
	"use strict";

	var Fingers = Backbone.Collection.extend({
		model: FingerModel
	});

	return Fingers;
});