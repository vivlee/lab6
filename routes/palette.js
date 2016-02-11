var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var colors = palettes[Math.floor(palettes.length * Math.random())];
	res.json(colors);
}