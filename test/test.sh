#!/bin/bash

./node_modules/esformatter/bin/esformatter -i lib/**/*.js
./node_modules/mocha/bin/_mocha