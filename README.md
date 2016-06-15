# React Website Starter

Isomorphic React static website starter. Optimized for speed and SEO.

Check also [react-webapp-starter][react-webapp-starter].

# Technologies
* React
* Webpack
* Babel
* Sass
* Browsersync

# Features

* Babel compiler + ES2015 and React presets
* React + React Router setup
* Webpack dev server + Browsersync
* Hot Module Replacement
* Sass compiler
* Normalize.css
* Autoprefixer via PostCSS
* Static website generation (isomorphic React)
* Assets minification + bundling
* Google Universal Analytics
* Folder structure + best practices
* React Dev Tools ready

# Setup

`Fork` and/or `clone` this repository. After `npm install`, perform the following:

* In `webpack.config.js`, replace the `appName` value by yours
* In `app/index.html.ejs`, replace the `<title>` value by yours
* In `app/Template.jsx`, replace `ga.initialize('UA-000000-01')` with your Google Universal Analytics ID
* Replace `app/favicon.ico` by yours

# Run

To launch the project in _development_ mode, type `npm start`. To test on multiple synced browsers,
use the _external_ IP address in the console (ex: `External: http://172.20.206.64:8000/`).
This also works with any other device on the same network (smartphones, tablets, etc).

To generate the _production_ distributable package, type `npm run-script dist`.

# Conventions

* Naming convention for JSX components and their associated Sass file is PascalCase (React community convention)
* JSX components with related Sass file placed alongside for easier dev/maintenance and dead code elimination
as files that are not required are not bundled
* Single quotes in JS and Sass, double quotes for HTML in JSX files (React community convention)

# Design decisions

* React as the main technology as it can be used for many purposes: websites, web apps
(see [react-webapp-starter][react-webapp-starter]) and mobile apps. _Learn once, write anywhere_.
* Isomorphic website for best UX (1st page load speed) and SEO (static pre-render).
* Static pre-render so no backend required. Can be hosted on Amazon S3, NGINX, shared hosting etc.
* Webpack as it's pretty much the de facto choice in the React community and much more powerful out of the box than Browserify.
* ES2015 via Babel. No brainer.
* Sass as it's still the best CSS preprocessor and simpler than a custom PostCSS configuration.
* Only essential libraries for speed optimization. So jQuery, Lodash, Moment etc were left out and can be installed later when necessary.
* No app/vendor bundle split, which leads to fewer HTTP requests as static websites usually have little custom JS and few dependencies.
* To understand the project design more in depth, have a look at the [commits history][commits-history] which contains clear, small commits related
to a single feature at a time.

# Remarks

* When adding a new page, update the routes array of `StaticSiteGeneratorPlugin` in `webpack.config.js`.
* In `app/App.jsx`, leave `import './App.scss'` at the top as base styles (such as Normalize.css) have to be imported first.
* Don't put global styles in `app/theme.scss`, which is meant to be imported by components. Global styles go in `app/App.scss`
which is imported once at application startup.
* If the development web server port (8000) conflicts with another already opened on your machine, you can change the configuration in `webpack.config.js`.

[react-webapp-starter]: https://github.com/thibautvs/react-webapp-starter
[commits-history]: https://github.com/thibautvs/react-website-starter/commits/master
