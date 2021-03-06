# CodeDoor education platform

This project is a platform to help refugees to learn to code.
Our first goal is to provide a list of free online courses and then to support exchanges via a community platform.
A few volunteers will help students by analyzing the progress of the student and propose improvements.



This application is based on react starterkit, which provides a prepared development environment based on [gulp](https://github.com/gulpjs/gulp), [Sass](http://sass-lang.com/guide) and [webpack](https://github.com/webpack/webpack). The internal data flow is handled with  [alt](https://github.com/goatslacker/alt) and the routing is managed with the [React-Router](https://github.com/rackt/react-router).

## Requirements

* nodejs / npm
* gulp

## Getting started

Install all dependencies.

```
$ npm install
```


## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 3000.
You can define a port with `$ gulp --port 3333`.

```
$ gulp
```

## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```


## Javascript

Javascript entry file: `app/scripts/main.js` <br />

**Alt**

We are using alt, which is an implementation of the [Flux Architecture](http://facebook.github.io/flux/docs/overview.html). If you want to read more about alt, check out the readme of the [alt git repo](https://github.com/goatslacker/alt).

**React-Router**

The routing is done with the [react-router](https://github.com/rackt/react-router). It's especially great for SPA's. We would recommend to read the [guide](https://github.com/rackt/react-router/blob/master/docs/guides/overview.md) to get an overview of the router features.

**ES6 with babel**

We are working with the webpack [babel loader](https://github.com/babel/babel-loader) in order to load our .js/.jsx files. Babel allows you to use ES6 features like class, arrow functions and [much more](https://babeljs.io/docs/compare/).



## CSS

CSS entry file: `app/styles/main.scss`<br />

**Sass**

As you can see we are using Sass to preprocess our .scss files. If you didn't work with a css preprocessor before the [Sass page](http://sass-lang.com/guide) is a good starting point to get to know what Sass can do for you.<br /><br />
If you want to use third-party CSS you just include it via `@import 'path/to/your/third-party-styles.css'` at the top of the main.cscc file.


## Webpack Hints

You can find the webpack configuration in the [webpack.config.js file](./webpack.config.js).
We use the babel-loader in order to load .jsx and .js files via webpack. If it's possible install all your dependencies with NPM. Packages installed with NPM can be used like this:

```language-javascript

var moduleXYZ = require('moduleXYZ');

```
You can find all loaders in this [list](http://webpack.github.io/docs/list-of-loaders.html).
