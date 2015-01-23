define([
	"backbone"
], function (Backbone) {
	"use strict";

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

	return FingerView;
});