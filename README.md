Work in progress...

# layout.attrs
An experiment in composable attributes for building UI with flexbox in mind.
Inspired by [Angular Material](https://material.angularjs.org/latest/#/layout/grid)
& [Polymer](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html)
layout modules.

## A simple example

Use the attributes like this:

```html
<div layout row reverse align-items="center">
  <div flex>flex foo</div>
  <div layout column>
    <div flex grow="2" shrink="2">flex bar</div>
    <div>no flex baz</div>
  </div>
  <div>no flex.</div>
</div>

```

## Experiments with responsive layouts

Currently generating ideas for layouts that adjust with media queries:

```html
<div layout mobile="column" desktop="row">
  <div>nav</div>
  <div flex>content</div>
  <div>other</div>
</div>
```

## See it in action

Reiterated, this is a work in project and likely pretty volatile.  That said,
there is a demo/flex.html file that can be viewed to see a number of the features
in action.  Suggested `python -m SimpleHTTPServer` or some other file server run
from the root directory.
