[![Build Status](https://travis-ci.org/IAmAnubhavSaini/canvas-js.svg?branch=master)](https://travis-ci.org/IAmAnubhavSaini/canvas-js) <img src="https://badge.fury.io/js/canvas-js.svg" /> <img src="https://david-dm.org/iamanubhavsaini/canvas-js.svg" /> <img src="https://david-dm.org/iamanubhavsaini/canvas-js/dev-status.svg" />

-----

[![NPM](https://nodei.co/npm/canvas-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/canvas-js/)

-----

# canvas-js

Library for easy HTML5 canvas development.


## Usage

```bash

    npm i -S canvas-js

    # or just grab required .js file

```

### Circle API

[jsfiddle](https://jsfiddle.net/jshacker/Lu3up6j0/) [older API](https://jsfiddle.net/jshacker/m218j45r/)

```javascript

  var circle = new Circle();
  // context is 2D context of the canvas element of interest.
  // pattern is fillStyle
  // radius is a number
  // at finally fills the circle at x, y co-ordinates.
  circle.in(context).fillWith(pattern).of(radius).fillAt(x, y);

```

```javascript

  var circle = new Circle();
  // context is 2D context of the canvas element of interest.
  // pattern is {strokePattern: pattern|gradient|color, lineWidth: number}
  // radius is a number
  // at finally draws the circle (outline/perimeter) at x, y co-ordinates.
  var options = { strokePattern: 'red', lineWidth: 3 };
  circle.in(context).drawWith(options).of(radius).drawAt(x, y);

```

### NodeJS example

```javascript

  var canvas = require('canvas-js-lib')

  canvas
  { Circle: [Function: Circle] }

  var c = new canvas.Circle()
  undefined

  c
  { startAngle: 0,
    endAngle: 6.283185307179586,
    antiClockwise: false }

  c.in('context')
  { startAngle: 0,
    endAngle: 6.283185307179586,
    antiClockwise: false,
    context: 'context' }
  >

```

## Chaining is awesome

`in`, `*With`, `of` and `*At` return the circle object, thus chaining is possible.


## License

MIT &copy; Anubhav Saini 2016 - 2018
