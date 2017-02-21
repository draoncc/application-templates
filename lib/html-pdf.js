#!/usr/bin/env node
;
'use strict';
var args, compile, fs, help, path, pdf;

pdf = require('html-pdf');

path = require('path');

fs = require('fs');

args = process.argv.slice(2);

help = function() {
  var msg;
  msg = ['Usage: html-pdf <source> <destination>'].join('\n');
  return console.log(msg);
};

compile = function(src, dst) {
  var f, opt;
  f = fs.readFileSync(src, 'utf8');
  opt = {
    width: '794px',
    height: '1122px',
    base: 'file://' + path.resolve(src)
  };
  return pdf.create(f, opt).toFile(dst, function(err, res) {
    if (err) {
      return console.log(err);
    }
  });
};

if (args.length >= 2) {
  compile(args[0], args[1]);
} else {
  help();
}
