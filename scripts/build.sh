#!/usr/bin/env bash

set -euxo pipefail

## These path are relative to the package.json file
mkdir -p dist
cp src/{Circle,Pencil,Square,Rectangle,Point2d,index}.js dist
