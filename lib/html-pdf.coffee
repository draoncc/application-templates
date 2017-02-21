`#!/usr/bin/env node
`
'use strict'

pdf = require 'html-pdf'
path = require 'path'
fs = require 'fs'

args = process.argv.slice 2

help = ->
  msg = [
    'Usage: html-pdf <source> <destination>'
  ].join '\n'
  console.log msg

compile = (src, dst) ->
  f = fs.readFileSync src, 'utf8'
  opt =
    width: '794px'
    height: '1122px'
    base: 'file://' + path.resolve src

  pdf.create(f, opt).toFile dst, (err, res) ->
    if err
      return console.log err

if args.length >=2
  compile args[0], args[1]
else
  help()
