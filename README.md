<<<<<<< HEAD
# DashboardApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
# dashboard-electron

A desktop application built with Electron, replicating the dashboard web application from Task 1
.
## Authentication

This application supports two authentication methods:

### 1. API Login
- Email: user@aemenersol.com
- Password: Test@123

### 2. Local Login (PouchDB)
If API login fails, the app will validate credentials against a local PouchDB.
- Email: local@test.com
- Password: Local@123

> **Note:** Dashboard data will not be displayed when logged in as a local user, as it requires a valid API token. Please use the API credentials above to view the full dashboard.
>>>>>>> 26cb2e620d90e888faca36e6114d6f6cefdaf3d9
