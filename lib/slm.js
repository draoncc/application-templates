#!/usr/bin/env node
;
'use strict';
var args, compile, fs, help, markdown, path, slm;

slm = require('slm');

markdown = require('slm-markdown');

path = require('path');

fs = require('fs');

args = process.argv.slice(2);

help = function() {
  var msg;
  msg = ['Usage: slm <source> <destination>'].join('\n');
  return console.log(msg);
};

compile = function(src, dst) {
  var f, fn, opt;
  f = fs.readFileSync(src, 'utf8');
  opt = {
    filename: src
  };
  markdown.register(slm.template);
  fn = slm.compile(f, opt);
  return fs.writeFile(dst, fn(), function(err) {
    if (err) {
      return console.log(err);
    }
    return console.log(src + " compiled to " + dst);
  });
};

if (args.length >= 2) {
  compile(args[0], args[1]);
} else {
  help();
}
