# Changes

## v8.0.0 - 2021-06-17

- Added Pencil
- Removed a TypeScript related bug, exporting types separately now.

## v7.1.0 - 2021-06-16

- Added Rectangle API (mimics Square)
- Removed jasmine from devD
- Removed travisCI, bower, grunt related files.

## v7

- Change in Circle API
- Updated tests
- Change in the way we think about the code.
    - We do not want to change a created  object.
    - We want to create new objects if we need the internal values to be changed.
- Change in Point2d
    - Change of structure.
    - The values of x and y cannot be changed after a point has been created.
- Change in Square


# v6.2.0 - 2021-06-08

- Documentation added in doc/ directory

# V6.1.0 - 2021-06-08

- Readme update

# V6 - 2021-06-08

- Major API change 

## V5 - 2021-06-7

- Basically the same as 2.3.0
- Moved `Circle` to Circle.js
- Updated the test accordingly.
- index.js still exports {Circle}
