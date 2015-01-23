define([
	"backbone",
	"modules/note/note-model"
], function (Backbone, NoteModel) {
	"use strict";

	var Song = Backbone.Collection.extend({model: NoteModel});

	return Song;
});