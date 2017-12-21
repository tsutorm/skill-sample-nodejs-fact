'use strict';

const fs = require('fs');
const path = require('path');

const intents = {};

fs.readdirSync('intents').forEach((file) => {
  const name = file.replace('.js', '');
  intents[name] = require(`./${path.join('intents', file)}`);
});

module.exports = intents;
