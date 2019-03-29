# EtsyClone

_The goal of this project is to use Angular to recreate the etsy website_

**Headers in bold will be components**

# Components

## Navbar
The Main Navbar will include links to navigate to different pages within the site. It will also contain the Drop-down Nav component. Currently there is only one page.

### DropDownNav
 It will display sub-categories, which will filter which products are displayed, based on their category. Currently it displays three tiers of categories, but they do not change the products listed yet.

## Home Page
This page will be its own component, since it differs from the main layout of the other page components.
It will have a Hero banner, a Product Row component (which will contain highlighted Product Components).
Next it will have a sections for collections, gifts, blogs, and a lower banner. This component will be shown when the Main logo is clicked.
#### Product Row
##### Product
* Collections
* Gifts
* Blogs
* FootBanner
#### Footer

### Category Page
#### SideBar
#### Product List
##### Product
#### Product Row
Recently Viewed products
#### Footer

#Angular CLI notes:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
