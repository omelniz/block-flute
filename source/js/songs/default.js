define([
	"backbone",
	"modules/song",
	"modules/note/notes-settings"
], function (Backbone, Song, notes) {
	"use strict";

	var song = new Song([
		notes.get("do"),
		notes.get("re"),
		notes.get("mi"),
		notes.get("fa"),
		notes.get("sol"),
		notes.get("lya"),
		notes.get("si"),
		notes.get("do-dies"),
		notes.get("re-dies"),
		notes.get("mi-dies"),
		notes.get("fa-dies"),
		notes.get("sol-dies"),
		notes.get("lya-dies"),
		notes.get("si-dies")
	]);

	return song;
});