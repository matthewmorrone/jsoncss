# [JavaScript CSS Parser](http://glazman.org/JSCSSP/)

## Usage

<pre>
var CSSParser = require("jscssp").CSSParser;
var cssParser = new CSSParser;
cssParser.parse("h1 {color: red}")
-> {cssRules: 
  [{type: 1
    , parsedCssText: 'h1 {\n  color: red;\n}'
    , declarations: {type: 1000
      , property: 'color'
      , values: [{value: 'red'
        , type: 1
        , name: null
        , parentRule: null
        , parentStyleSheet: [Circular]
        }
      ]
      , valueText: 'red'
      , priority: false
      , parsedCssText: 'color: red;'
      , parentStyleSheet: null
      , parentRule: null
      }
    , mSelectorText: 'h1'
    , parentStyleSheet: [Circular]
    , parentRule: null
    , currentLine: 0
    }
  ]
, variables: {}
}
</pre>

## Installation (for Node.js)

    $ npm install jscssp

## Tests

    git submodule update --init
    open test/index.html

To see test results in the console run

    node test/*_test.js

## Analogs

  * [CSSOM.js](http://github.com/NV/CSSOM)
  * [Sheet.js](http://github.com/subtleGradient/Sheet.js)
  * [CodeMirror's CSS parser](http://codemirror.net/csstest.html)

## To-Do

	DONE parse 'inherit' value for shorthands and individual properties
	DONE parse escaped chars and unicode chars
	DONE parse 'list-style' and 'outline' shorthands
	- try to link to browser's CSS OM (not sure it's feasible)
	- serialization controls
	DONE keep track of individual values in declarations
	DONE - interactive demo page
	- documentation and web site
	DONE forgot parsing of boder-style shorthand
