Work in progress...

# layout.attrs
An experiment in composable attributes for building UI with flexbox.
Inspired by [Angular Material](https://material.angularjs.org/latest/#/layout/grid)
& [Polymer](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html)
layout modules.

## Usage

In your ntml include the `dist/layout.attrs.css` or `dist.layout.attrs.min.css` file,
or individual modules from the `dist/modules` directory.

## A simple example

Use the attributes like this:

```html
<div layout row reverse align-items="center">
  <div flex>flex foo</div>
  <div layout row mobile="column" tablet="column">
    <div flex resize="2 2">flex bar</div>
    <div flex scrollable>
      lorem ipsum......
    </div>
  </div>
  <div>no flex.</div>
  <div conceal="mobile tablet">Hidden on mobile and tablet</div>
</div>

```

## More examples

The simplest layout:

```html
<div layout mobile="column" desktop="row">
  <div>nav</div>
  <div flex>content</div>
  <div>other</div>
</div>
```

Reversing:

```html
<div layout row wrap reverse>
  <div>1</div><div>2</div><div>3</div>
</div>
```

Ordering

```html
<div layout row>
  <div order="3">1.</div>
  <div order="1">2.</div>
  <div order="2">3.</div>
</div>
```

Adjusting the grow, shrink, and resize properties:

```html
<div layout>
  <div flex grow="5">grow="5"</div>
  <div flex grow="7">grow="7"</div>
  <div flex grow="1">grow="1"</div>
</div>

<div layout>
  <div flex shrink="5">shrink="5"</div>
  <div flex shrink="7">shrink="7"</div>
  <div flex shrink="1">shrink="1"</div>
</div>
```

Resize is a rollup of both grow and shrink:

```html
<div layout>
      <div flex resize="5 3">resize="5 3"</div>
      <div flex resize="7 3">resize="7 3"</div>
      <div flex resize="1 7">resize="1 7"</div>
</div>

```

Axis is a roll-up of justify-items, justify-content, align-content.  Basically,
This means:

- first what to do along the main axis
- second what to do along the cross axis
- third, what to do with extra space in cross axis.

```html
<div layout axis="start space-between center">
  <div>1.</div>
  <div>2.</div>
  <div>3.</div>
</div>

```


Device attrs changing orientation (media queries):

```html
<div layout mobile="column" desktop="row">
  <div>nav</div>
  <div flex>content</div>
  <div conceal="mobile tablet">other</div>
</div>
```
* conceal will hide elements for devices declared


Alternatively, size attrs changing orientation (media queries):

```html
<div layout sm="column" lg="row">
  <div>nav</div>
  <div flex>content</div>
  <div conceal="lg xl">other</div>
</div>
```
* conceal will hide elements for sizes declared

## Some other utils

Fit is a util that causes a child element to match the parent:

```html
<div layout>
  <div fit>Same size</div>
</div>
```

Relative and absolute positioning:

```html
    <div relative style="width: 200px; height: 200px">
      <div absolute top left>tl</div>
      <div absolute top right>tr</div>
      <div absolute bottom left>bl</div>
      <div absolute bottom right>br</div>
    </div>
```

Additional miscellaneous attrs, fairly self explanatory:

```html
<div height-max>
  <div>toolbar...</div>
  <div scrollable>
    <p truncate break-word>This is a bunch of text....</p>
  </div>
</div>
```

## See it in action

As stated in the beginning, this is a work in project and likely pretty volatile.
That said, there is a demo/flex.html file that can be viewed to see a number of
the features in action.  Suggested `python -m SimpleHTTPServer` or some other file
server run from the root directory.
