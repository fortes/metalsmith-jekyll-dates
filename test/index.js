var assert = require('assert'),
    plugin = require('../src/index')({});

var files = {
  'ignored.md': {contents: new Buffer('Ignore')},
  '2000-10-15-my-post.md': {contents: new Buffer('Ignore')},
  '2000-10-15-overwrite.md': {
    date: 'foo',
    slug: 'bar',
    contents: new Buffer('Ignore')
  },
  '2000-10-15-no-extension': {contents: new Buffer('Ignore')}
};

plugin(files, {}, function() {
  // Not a filename match
  assert(!('date' in files['ignored.md']), 'No date for non-matching file');
  assert(
    !('date' in files['2000-10-15-no-extension']),
    'No date for file without extension'
  );

  // Filename match
  assert.equal(
    files['2000-10-15-my-post.md'].date.toDateString(),
    'Sun Oct 15 2000',
    'Correct date extracted'
  );
  assert.equal(
    files['2000-10-15-my-post.md'].slug,
    'my-post',
    'Slug extracted'
  );

  // Don't clobber existing data
  assert.equal(
    files['2000-10-15-overwrite.md'].date,
    'foo',
    'Original date preserved'
  );
  assert.equal(
    files['2000-10-15-overwrite.md'].slug,
    'bar',
    'Original slug preserved'
  );

  console.log('All tests passed.')
});
