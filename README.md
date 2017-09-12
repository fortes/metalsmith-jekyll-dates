# metalsmith-jekyll-dates [![build status](https://travis-ci.org/fortes/metalsmith-jekyll-dates.svg?branch=master)](https://travis-ci.org/fortes/metalsmith-jekyll-dates/)

Adds `date` and `slug` metadata to files that have Jekyll-style filenames.

## Example

Before:

```js
{
  "2000-10-15-my-post.md": {
    contents: new Buffer('...')
  }
}
```

After

```js
{
  "2000-10-15-my-post.md": {
    date: "Sun Oct 15 2000 12:00:00 GMT-0700 (PDT)",
    slug: "my-post"
    contents: new Buffer('...')
  }
}
```

## See Also

If this doesn't do what you want it to, look at:

* [Metalsmith Date in Filename](https://github.com/sanx/metalsmith-date-in-filename): Seems to be a superset of this plugin, was released after this plugin.
* [Metalsmith Mallet](https://github.com/aigarsdz/metalsmith-mallet)
