// Initialize
requirejs([
	"modules/player",

	// Songs
	"songs/default"
],
function (Player, defaultSong) {
    "use strict";

	var player = new Player({song: defaultSong});
});

