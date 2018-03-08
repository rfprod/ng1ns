# AngularJS application starter kit (NG1NS)

![build](https://travis-ci.org/rfprod/ng1ns.svg?branch=master)

## Requirements

- [`Node.js`](https://nodejs.org/)
- [`NPM`](https://nodejs.org/)
- [`Git`](https://git-scm.com/)

### Project structure

* `./app` - application
  * `./app/components` - viewless components and respective unit-tests
  * `./app/css` - stylesheets (scss files are compiled to application css bundle)
  * `./app/fonts` - vendor fonts
  * `./app/js` - bundled application components, and vendor scripts
  * `./app/img` - images
  * `./app/views` - view components and respective unit-test
* `./e2e-tests` - protractor configuration and scenarios

### Global dependencies

```
sudo npm install -g gulp-cli
```

### Quickstart

```
npm start
```

### Installation

```
npm install
```

### Testing

#### Unit

continuous

```
npm run test-continous
```

single run

```
npm run test-single-run
```

#### End to End

```
npm run protractor
```

#### All tests (unit + e2e)

```
npm test
```

## Licenses

* [`Ng1NS`](LICENSE)
