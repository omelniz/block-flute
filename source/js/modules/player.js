define([
	"backbone",
	"modules/note/notes-nav"
], function (Backbone, NotesNav) {
	"use strict";

	var Player = Backbone.View.extend({

		_timeout: null,
		_currentNote: 0,
		repeat: true,

		initialize: function (options) {
			this._song = options.song;

			this.notesNav = new NotesNav({model: this._song});

			$("#a-eduStart").on("click", this.play);
			$("#a-shuffleNotes").on("click", this.shuffle);

			this.render();
		},

		render: function () {
			$("#mainContent").prepend(this.notesNav.render().el);
			this.notesNav.showFirstNote();
		},

		shuffle: function () {
			this.pause();

			var shuffleNotesSong = this._song.shuffle();
			this._song.reset();
			this._song.add(shuffleNotesSong);

			this._song.trigger("song:shuffle");

			return false;
		},

		getCurrentNote: function () {
			if (this.repeat) {

			}
			return this._currentNote;
		},

		play: function () {
			if (this._lengthSong == this._currentNote) {
				this._currentNote = 0;
			}

			var self = this;

			this._timeout = setTimeout(function () {
				self.notesNav.showNoteByIndex(self._currentNote);
				self._currentNote += 1;
				self.play();
			}, 3000);
		},

		pause: function () {
			if (this._timeout !== null) {
				clearTimeout(this._timeout);
			}
		},

		setSong: function (newSong) {
			this._song = newSong;
		}
	});

	return Player;
});