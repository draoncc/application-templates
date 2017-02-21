`#!/usr/bin/env node
`
'use strict'

slm = require 'slm'
markdown = require 'slm-markdown'
path = require 'path'
fs = require 'fs'

args = process.argv.slice 2

help = ->
  msg = [
    'Usage: slm <source> <destination>'
  ].join '\n'
  console.log msg

compile = (src, dst) ->
  f = fs.readFileSync src, 'utf8'
  opt =
    filename: src

  markdown.register slm.template
  fn = slm.compile f, opt
  
  fs.writeFile dst, fn(), (err) ->
    if err
      return console.log err
    console.log src + " compiled to " + dst

if args.length >=2
  compile args[0], args[1]
else
  help()

