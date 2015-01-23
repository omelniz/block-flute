define([
	"backbone",
	"modules/note/notes",
	"modules/finger/fingers-settings"
], function (Backbone, Notes, fingers) {
	"use strict";

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

	return notes;

});