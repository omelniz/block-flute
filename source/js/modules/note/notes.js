define([
	"backbone",
	"modules/note/note-model"
], function (Backbone, NoteModel) {
	"use strict";

	var Notes = Backbone.Collection.extend({model: NoteModel});

	return Notes;
});