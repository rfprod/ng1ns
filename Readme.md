## AngularJS application starter kit (NG1NS)

A starter kit for standalone AngularJS application

### Requirements

* NodeJS

#### Project structure

* `./app` - application
  * `./app/components` - viewless components and respective unit-tests
  * `./app/css` - stylesheets (scss files are compiled to application css bundle)
  * `./app/fonts` - vendor fonts
   * `./app/js` - bundled application components, and vendor scripts
  * `./app/img` - images
  * `./app/views` - view components and respective unit-test
* `./e2e-tests` - protractor configuration and scenarios

### Quickstart

just start it

```
npm start
```

### Installation

```
npm install
```

### Startup

**development mode** (installs dependencies, runs `gulp` default task)

```
npm start
```

**production mode** (installs dependencies, runs `http-server`)

```
npm run production-start
```

### Testing

#### Unit

continuous

```
npm test
```

single run

```
npm run test-single-run
```

#### End to End

```
npm run protractor
```
