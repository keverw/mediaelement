// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.7.0';

// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
	flash: [
		{version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a','audio/mpeg']}
		//,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
	]
};