# EtsyClone

_The goal of this project is to use Angular to recreate the etsy website_
This is a two week project. Currently there is an array of mock-data as a placeholder for a database or API call.

# Components of website

## Navbar
The Main Navbar will include links to navigate to different pages within the site. It will also contain the **Drop-down Nav** component. Currently there is only one page. I use several repeater directives to loop through the categories/subcategories, and display them on the navbar.

### DropDownNav
 It will display sub-categories, which will filter which products are displayed, based on their category. Currently it displays three tiers of categories, but they do not change the products listed yet.

## Home Page
This page will be its own component, since it differs from the main layout of the other page components.
It will have a Hero banner, a **Product Row** component (which will contain highlighted **Product** Components).
Next it will have a sections for collections, gifts, blogs, and a lower banner. This component will be shown when the Main logo is clicked. On the bottom there will be a **Footer** component.

## Category Page
A category page will be the main repeating component for pages, since the layout is pretty similar in each.
It will include the following components:
* **SideBar**
* **Product List**
* **Product Row**
* **Footer**

### SideBar
This component will filter and sort the data fed into the **Product List** component.

### Product List
This component will import an array of objects, each of which form the model needed to compile the view for each **Product** component.
A repeater directive is used for this functionality. Eventually the amount of items per page will be limited, with pagination to load the next 50 or so at a time.

### Product Row
Similar to the Product List, this will take in a array of objects, which will be the model for a row of **Product** components. It differs from the **Product List** in that it contains recommended products, which will scroll horizontally.
##### Product
The Product Component will have an image, manufacturer, description, price, ranking, and the option to add badges (such as: free shipping, on sale, etc...)

#### Footer
The footer will display legal info and links to navigate to other sections.

## Setup
1. Clone this repository
2. Install dependencies: npm install
3. Start the Server: npm run start
4. The server page should open automatically. If not, enter this url into your browser: http://localhost:4200/

## Technologies Used
1. Angular
2. Sass

## MIT license (c) 2018 Matt Groberg.
