# Angular JSON Schema Form Bootstrap 4 Seed App

This example app shows how to generate a Bootstrap 4 form from a JSON Schema using Angular JSON Schema Form.

The app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

To create this app yourself, make sure you have [Node](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), and [Angular CLI](https://cli.angular.io/) installed, then enter the following commands in your terminal:
```shell
ng new ng-jsf-bootstrap4-seed
cd ng-jsf-bootstrap4-seed
npm install @angular/cdk
npm install @angular/material
npm install angular2-json-schema-form
```

IMPORTANT NOTE ABOUT PEER DEPENDANCIES: The current version of Angular JSON Schema Form requires Angular Material as a peer dependency. This will be fixed in a future version, which will offer separate installers for each framework. But until that happens, even if you don't intend to use Material Design framework, you will need to install @angular/material and @angular/cdk through NPM for your project to build correctly.

Then edit the following files:

* src/index.html — load external Bootstrap JavaScript and CSS
* src/app/app.module.ts — load Angular JSON Schema Form module
* src/app/app.component.ts — set schema and data variables to configure form
* src/app/app.component.html — display form with `<json-schema-form>` tag

## Development server

Run `ng serve`, then navigate to `http://localhost:4200/` to see the form.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on Angular JSON Schema Form, see the [Angular JSON Schema Form README](https://github.com/dschnelldavis/angular2-json-schema-form/blob/master/README.md).

To get more help on Bootstrap 4, see the [Bootstrap 4 documentation](http://getbootstrap.com/docs/3.3/).

To get more help on the Angular CLI enter `ng help` in your terminal, or see the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
