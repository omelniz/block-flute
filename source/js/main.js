var FingerModel = Backbone.Model.extend({});

var Fingers = Backbone.Collection.extend({
	model: FingerModel,
	get: function (id, options) {
		if (id == null) return void 0;

		var finger = _.clone(this._byId[id.id != null ? id.id : id]),
			options = options || {};

		if (options.half) {
			finger.set('half', true);
		}

		return finger;
	}
});

var fingers = new Fingers([
	{id: 1, place: {x: 396, y: -30}},
	{id: 2, place: {x: 434, y: 38}},
	{id: 3, place: {x: 499, y: 38}},
	{id: 4, place: {x: 564, y: 42}},
	{id: 5, place: {x: 633, y: 37}},
	{id: 6, place: {x: 699, y: 37}},
	{id: 7, place: {x: 765, y: 36}},
	{id: 8, place: {x: 846, y: 22}}
]);

var NoteModel = Backbone.Model.extend({
	defaults: {
		duration: 300
	},
	idAttribute: "name"
});

var Notes = Backbone.Collection.extend({model: NoteModel});

var notes = new Notes([
	{
		name: "do",
		ruName: "До",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(6),
			fingers.get(7),
			fingers.get(8),
		]
	},
	{
		name: "re",
		ruName: "Ре",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(6),
			fingers.get(7),
		]
	},
	{
		name: "mi",
		ruName: "Ми",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(6),
		]
	},
	{
		name: "fa",
		ruName: "Фа",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(7),
			fingers.get(8),
		]
	},
	{
		name: "sol",
		ruName: "Соль",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
		]
	},
	{
		name: "lya",
		ruName: "Ля",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
		]
	},
	{
		name: "si",
		ruName: "Си",
		fingers: [
			fingers.get(1),
			fingers.get(2),
		]
	},
	{
		name: "do-dies",
		ruName: "До ↑",
		fingers: [
			fingers.get(1, {half: true}),
			fingers.get(3)
		]
	},
	{
		name: "re-dies",
		ruName: "Ре ↑",
		fingers: [
			fingers.get(3)
		]
	},
	{
		name: "mi-dies",
		ruName: "Ми ↑",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(6)
		]
	},
	{
		name: "fa-dies",
		ruName: "Фа ↑",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
			fingers.get(5),
			fingers.get(7),
			fingers.get(8),
		]
	},
	{
		name: "sol-dies",
		ruName: "Соль ↑",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
			fingers.get(4),
		]
	},
	{
		name: "lya-dies",
		ruName: "Ля ↑",
		fingers: [
			fingers.get(1),
			fingers.get(2),
			fingers.get(3),
		]
	},
	{
		name: "si-dies",
		ruName: "Си ↑",
		fingers: [
			fingers.get(1),
			fingers.get(2),
		]
	}
]);

debugger;

var Song = Backbone.Collection.extend({model: NoteModel});

var defaultSong = new Song([
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

var FingerView = Backbone.View.extend({

	className: "fingerPlace",

	render: function () {
		this.$el.html(this.model.get("id"));
		this.setPosition(this.model.get("place"));

		return this;
	},

	setPosition: function (place) {
		this.$el.css({
			"top":  place.y + "px",
			"left":	place.x + "px"
		});
	}
});

var NoteView = Backbone.View.extend({

	el: "#blockFlute",

	initialize: function () {
		this.render();
	},

	render: function () {
		this.reset();
		this.renderFingers();
	},

	renderFingers: function () {
		var self = this;

		_.each(this.model.get("fingers"), function (finger, index) {
			var fingerView = new FingerView({model: finger});
			self.$el.append(fingerView.render().el);
		});
	},

	reset: function () {
		this.$el.find(".fingerPlace").remove();
	}
});

var NotesNav = Backbone.View.extend({

	className: "notesNav",
	tagName: "nav",

	initialize: function () {
		_.bindAll(this);
		this.model.on("song:shuffle", this.render, this);

		$(".notesNav__note a").live("click", this.changeNote);
	},

	render: function () {
		this.$el.html(this.make("ul", {"class": "notesNav__list"}));
		this.renderItem();

		return this;
	},

	renderItem: function () {
		var self = this;

		_.each(this.model.models, function (note, index) {
			var notesNavNoteLink = self.make("a", {
				"data-note": note.get("name"),
				"title": "Нажмите на ноту",
				"href": "#"
			}, note.get("ruName"));

			var notesNavNote = self.make("li", {"class": "notesNav__note"}, notesNavNoteLink);

			self.$el.find(".notesNav__list").append(notesNavNote);
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

var Player = Backbone.View.extend({

	_timeout: null,
	_currentNote: 0,
	repeat: true,

	initialize: function () {
		_.bindAll(this);

		this._song = this.options.song;

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

var player = new Player({song: defaultSong});