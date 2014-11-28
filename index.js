var through = require("through2"),
	copy_paste = require("copy-paste").silent()
	gutil = require("gulp-util");

module.exports = function (opt) {
	"use strict";
	var options = opt || {};
	function copyext(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			return callback(uglifyError('Streaming not supported'));
		}
		
		if (file.isBuffer()) {
			copy(String(file.contents));
			if(options.ext) {
				file.path = file.path.replace(/(\..*)$/, function($1, $2){
					if($2) {
						return options.ext + $2;
					}
				});
			}
			
			this.push(file);
		}

		return callback();
	}

	return through.obj(copyext);
};
