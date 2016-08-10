[![Build Status](https://travis-ci.org/IAmAnubhavSaini/canvas-js.svg?branch=master)](https://travis-ci.org/IAmAnubhavSaini/canvas-js)

-----

# canvas-js

Library for easy HTML5 canvas development.

# APIs

## Circle

[jsfiddle](https://jsfiddle.net/jshacker/Lu3up6j0/) [older API](https://jsfiddle.net/jshacker/m218j45r/)

```
var circle = new Circle();

// context is 2D context of the canvas element of interest.
// pattern is fillStyle
// radius is a number
// at finally fills the circle at x, y co-ordinates.

circle.in(context).fillWith(pattern).of(radius).fillAt(x, y);

---

// context is 2D context of the canvas element of interest.
// pattern is {strokePattern: pattern|gradient|color, lineWidth: number}
// radius is a number
// at finally draws the circle (outline/perimeter) at x, y co-ordinates.

var options = { strokePattern: 'red', lineWidth: 3 };
circle.in(context).drawWith(options).of(radius).drawAt(x, y);

```

### NodeJS example

```

canvas-js (master) $ node
> var canvas = require('./src/canvas-js-lib')
undefined
> canvas
{ Circle: [Function: Circle] }
> var c = new canvas.Circle()
undefined
> c
{ startAngle: 0,
  endAngle: 6.283185307179586,
  antiClockwise: false }
> c.in('context')
{ startAngle: 0,
  endAngle: 6.283185307179586,
  antiClockwise: false,
  context: 'context' }
>

```

### Because chaining is awesome.

`in`, `*With`, `of` and `*At` return the circle object, thus chaining is possible.

# Including in project

```
npm install --save canvas-js

bower install canvas-js

```

# License

MIT &copy; Anubhav Saini 2016
