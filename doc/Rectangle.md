# Using Rectangle

## Examples

### #1

```typescript

import {Rectangle} from 'canvas-js'

const canvas = document.querySelector('canvas#canvas')
const context = canvas.getContext('2d')
const rectangle = new Rectangle(context, 100, 200)

/* Draw a rectangle
 * of sides 100, 200
 * at {10, 20} point
 */
rectangle.drawAt(new Point2d(10, 20))
    
```
