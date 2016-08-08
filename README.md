[![Build Status](https://travis-ci.org/IAmAnubhavSaini/canvas-js.svg?branch=master)](https://travis-ci.org/IAmAnubhavSaini/canvas-js) [![Build Status](https://drone.io/github.com/IAmAnubhavSaini/canvas-js/status.png)](https://drone.io/github.com/IAmAnubhavSaini/canvas-js/latest)

-----

# canvas-js

Library for easy HTML5 canvas development.

# APIs

## Circle

[jsfiddle](https://jsfiddle.net/jshacker/m218j45r/)

```
var circle = new Circle();

// context is 2D context of the canvas element of interest.
// pattern is fillStyle
// radius is a number
// at finally fills the circle at x, y co-ordinates.

circle.in(context).with(pattern).of(radius).at(x, y);

```

### Because chaining is awesome.

`in`, `with`, `of` and `at` return the circle object, thus chaining is possible.

# License

MIT &copy; Anubhav Saini 2016
