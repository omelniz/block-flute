define([
	"backbone",
	"modules/finger/finger-view"
], function (Backbone, FingerView) {
	"use strict";

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

	return NoteView;
});