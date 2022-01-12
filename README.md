# DASHBOARD tickets (aka Cism)

This dashboard loads data from a server via XHR requests and is able to visualize data in under 1 second. We really focused on the speed of visualization. This is why users enjoy using our dashboards at work to review company KPIs day by day. The usage of the dashboard is self explaining - so enduser training is not needed to understand the navigation path.

The dashboard is able to read saved report output from [IBM Cognos (aka IBM Analytics)](https://www.ibm.com/products/cognos-analytics). Which comes in handy as this dashboard uses the IBM Cognos REST API to just fetch the data and avoids to load the IBM Cognos Portal files reducing overhead to a minimum by focusing on speed and performance to visualize the raw data. Fetching data from [REST APIs](https://www.ibm.com/support/knowledgecenter/SSEP7J_11.1.0/com.ibm.swg.ba.cognos.ca_api.doc/swagger_ca.json) is of course not limited to IBM Cognos. We would be happy to know from which services or servers you load the dashboard data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

Please see the [PDF file in documentation folder](documentation/documentation-en.pdf) for details on how to adapt the dashboard data and skinning to your needs.

Check the [Live Demo on github.io pages](https://amvara-consulting.github.io/dashboard_tickets.github.io/#/)

## Installing

Run `npm install` to install all the needed packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Front

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Docker

Run `docker-compose up -d` on this project folder, all will be setup and CISM will be available at 0.0.0.0:9000

## Update / Recompiling latest changes in Git (Hot Update)

Just run `docker exec cism_front /code/update.sh` in amvara2 server, files will be updated in live.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

