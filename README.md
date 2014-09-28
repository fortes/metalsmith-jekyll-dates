# metalsmith-jekyll-dates

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
