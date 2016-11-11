#webpack-tutorial

This repo contains what was demonstrated on [Uppsala.js, November 3, 2016](http://www.meetup.com/Uppsalajs/events/234800307/).

Together we built a Javascript app and explored many parts of Webpack and how we can use Webpack to create production ready code as well as use it to help with our development process.

Tutorial explains:

* What is Webpack
* Webpack vs Gulp, Grunt, Browserify, Rollup, NPM Scripts
* How to create a production ready bundle
* How to do code splitting
* How to do dead code elimination
* How to do tree shaking to remove dead code
* How to do hot module replacement (HMR)
* How to do hot/live reload
* How to use ES6/ES.next/ES2015 code in production with Babel
* How to load images
* How to load style (css)
* ...and more

### Video and Slides

[![YouTube Screenshot](https://raw.githubusercontent.com/emiloberg/webpack-tutorial/master/docs/youtube-screenshot.png)](https://www.youtube.com/watch?v=eWmkBNBTbMM)

* The tutorial on YouTube: [Part 1 (presentation)](https://www.youtube.com/watch?v=C_ZtQClrVYw) and [part 2 (code-along)](https://www.youtube.com/watch?v=eWmkBNBTbMM)
* The [slides can be found at SlideShare](http://www.slideshare.net/emiloberg/webpack-tutorial-uppsala-js).

### Installation

#### 1. Install

```
# Clone this repo
git clone https://github.com/emiloberg/webpack-tutorial.git

# Install dependencies
npm install

# Run for development
npm run dev
# go to http://localhost:8080

# Run for production
npm run build
```

### Links

#### Things in the presentation

State of Javascript

* [http://stateofjs.com](http://stateofjs.com)

 Webpack

* [http://webpack.github.io](http://webpack.github.io)
* [http://webpack.github.io/docs/list-of-plugins.html](http://webpack.github.io/docs/list-of-plugins.html)
* [http://webpack.github.io/docs/list-of-loaders.html](http://webpack.github.io/docs/list-of-loaders.html)


Webpack Dev Server

* [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)


Plugins

* Extract Text
	* [https://github.com/webpack/extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)
* HTML Webpack 
	* [https://github.com/ampedandwired/html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
* UglifyJS
	* [https://webpack.github.io/docs/list-of-plugins.html](https://webpack.github.io/docs/list-of-plugins.html)
	* [https://github.com/mishoo/UglifyJS](https://github.com/mishoo/UglifyJS)
* Define
	* [https://webpack.github.io/docs/list-of-plugins.html](https://webpack.github.io/docs/list-of-plugins.html)

Loaders

* babel-loader
	* [https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
* url-loader
	* [https://github.com/webpack/url-loader](https://github.com/webpack/url-loader)
* file-loader
	* [https://github.com/webpack/file-loader](https://github.com/webpack/file-loader)
* style-loader
	* [https://github.com/webpack/style-loader](https://github.com/webpack/style-loader)
* css-loader
	* [https://github.com/webpack/css-loader](https://github.com/webpack/css-loader)

#### More things to read

* Difference Webpack and Webpack 2
	* [https://gist.github.com/sokra/27b24881210b56bbaff7](https://gist.github.com/sokra/27b24881210b56bbaff7)
* Code Splitting and React
	* [https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9 ](https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9 )
* Full tutorial on HMR 	
	* [http://andrewhfarmer.com/webpack-hmr-tutorial/](http://andrewhfarmer.com/webpack-hmr-tutorial/)
* More about MHR
	* [https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.m17ffe4km ](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.m17ffe4km )
* Webpack Video Course (pay)
	* [https://egghead.io/courses/using-webpack-for-production-javascript-applications ](https://egghead.io/courses/using-webpack-for-production-javascript-applications )


### Contact

Feel free to contact me:

* Twitter: [@emiloberg](https://twitter.com/emiloberg).
* Email: firstname.lastname@gmail.com or @[monator](http://www.monator.com/).com
* Phone: 0739-85 25 85
* Google Chat: Same as email

// Emil Oberg
