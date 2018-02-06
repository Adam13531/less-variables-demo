# less-variables-demo

A demo on how to share Less variables to JavaScript in a Webpack environment using CSS Modules without using any external module or modifying any configuration.

Resolving variables is also not an issue when using this method.

## Installation

Clone the repository and install the demo dependencies using

`yarn install`

Build the demo:

`yarn run build`

Open the `dist/index.html` file in your browser (you don't even have to serve it).

Resize your browser window.

## Details

The setup assume you're using a combination of Webpack loaders including less-loader, style-loader and css-loader (with the `modules` option set to true to enable CSS Modules).

When CSS Modules are enabled, we can use the [ICSS (Interoperable CSS) superset](https://github.com/css-modules/icss) which allow us to take advantage of the additional `:export` pseudo-selector.

Every symbols in this pseudo-selector are going to be exported to the consumer. This is the equivalent of `module.exports` in JavaScript.
