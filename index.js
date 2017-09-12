var path = require('path');

var JEKYLL_FILENAME_REGEXP = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.(.+)$/;

module.exports = function(options) {
  /**
   * @param {Object} files
   * @param {Metalsmith} metalsmith
   * @param {Function} done
   */
  return function(files, metalsmith, done) {
    var file, match, date, slug;

    for (file in files) {
      match = path.basename(file).match(JEKYLL_FILENAME_REGEXP);

      // Ignore non-Jekyll-style filenames
      if (!match) {
        continue;
      }

      if (!('date' in files[file])) {
        files[file].date = new Date(match[1], match[2] - 1, match[3], 12);
      }

      if (!('slug' in files[file])) {
        files[file].slug = match[4];
      }
    }

    done();
  };
};
