# lnkr
=============

[![Build Status][travis-img]][travis-url]
[![Test Coverage][coveralls-img]][coveralls-url]
[![Code Climate][codeclimate-img]][codeclimate-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![License][license-img]][license-url]

The utility allows to create and manage several versions (editions) of some file or directory and simply substitute it and quick change substitutions like nvm allows to deal with several versions of node engine.

# Not implemented even anything here yet. Just todo notes for now.


## Instalation
```bash
npm i -g lnkr
```


## Usage
```bash
# Init lnkr for filename
linker init <filename>

# Add first edition (or version or substition)
linker <filename> add <filename-source-1> [as <tag-1>]

# Add second edition
#linker <filename> add <filename-source-2> [as <tag-2>]

# Switching between edititoins
linker filename use <tag-1>
linker filename use <tag-2>

# Add third edition from same name from git 
# (Sort of alias to git checkout branch -- filename_path)
linker filename add --git <git branch or commit>

# Reset all lnkr stuff, restore to initial state of filename
linker filename reset

# Show all editions
linker filename list

# Hide temporary lnkr dir (Actualy it moves from ./.lnkr to ~/.lnkr)
linker hide
# Move lnkr stuff back from ~/.lnkr to ./.lnkr
linker unhide
```


## License

  [MIT](LICENSE)
  
  
[travis-img]: https://travis-ci.org/yarikos/lnkr.svg?branch=master
[travis-url]: https://travis-ci.org/yarikos/lnkr
[downloads-img]: https://img.shields.io/npm/dm/lnkr.svg
[downloads-url]: https://npmjs.org/package/lnkr
[license-img]: https://img.shields.io/npm/l/lnkr.svg
[license-url]: LICENSE
[coveralls-img]: https://img.shields.io/coveralls/yarikos/lnkr.svg
[coveralls-url]: https://coveralls.io/r/yarikos/lnkr
[codeclimate-img]: https://img.shields.io/codeclimate/github/yarikos/lnkr.svg
[codeclimate-url]: https://codeclimate.com/github/yarikos/lnkr
[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/yarikos/lnkr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
