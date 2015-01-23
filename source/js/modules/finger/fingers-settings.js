define([
	"backbone",
	"modules/finger/fingers"
], function (Backbone, Fingers) {
	"use strict";

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

	return fingers;
});