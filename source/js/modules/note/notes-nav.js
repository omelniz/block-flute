define([
	"backbone",
	"modules/note/notes-settings",
	"modules/note/note-view"
], function (Backbone, notes, NoteView) {
	"use strict";

	var NotesNav = Backbone.View.extend({

		className: "notesNav",
		tagName: "nav",

		initialize: function () {
			_.bindAll(this, 'changeNote');
			this.model.on("song:shuffle", this.render, this);
		},

		render: function () {
			this.$el.html($("<ul>", {"class": "notesNav__list"}));
			this.renderItem();

			return this;
		},

		renderItem: function () {
			var self = this;

			_.each(this.model.models, function (note, index) {
				var notesNavNoteLink = $("<a>", {
						"data-note": note.get("name"),
						"title": "Нажмите на ноту",
						"href": "#"
					}).text(note.get("ruName"));

				var $notesNavNote = $("<li>", {"class": "notesNav__note"}).html(notesNavNoteLink);

				$notesNavNote.on("click", self.changeNote);

				self.$el.find(".notesNav__list").append($notesNavNote);
			});
		},

		changeNote: function (e) {
			var noteName = $(e.target).data("note"),
				note = notes.get(noteName);

			this.showNote(note);
			this.renderActiveNote($(e.target).parent().index());

			return false;
		},

		renderActiveNote: function (index) {
			this.$el.find(".notesNav__note").removeClass("active").eq(index).addClass("active");
		},

		showNote: function (note) {
			var noteView = new NoteView({model: note});
		},

		showFirstNote: function () {
			this.showNote(this.model.at(0));
			this.renderActiveNote(0);
		},

		showNoteByIndex: function (index) {
			this.showNote(this.model.at(index));
			this.renderActiveNote(index);
		}
	});

	return NotesNav;
});