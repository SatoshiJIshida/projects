#!/bin/bash

# Must already have node installed
# Install app dependencies
npm install npm@latest -g --silent
npm install react-scripts -g --silent
npm install http-server -g --silent

# Launch server
http-server
