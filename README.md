# EtsyClone

_The goal of this project is to use Angular to recreate the etsy website_
This is a two week project. This project uses a live database, and includes two main routes (the home page, which is loaded initially, and the product page, which has an additional parameter in the route for category of products). Although I have a product detail component and route set up, this is still not complete.

To view a deployed version of this project with a real time database, <a href="https://etsy-clone-ae507.firebaseapp.com/">click here</a>

# Components of website

## Navbar
The Main Navbar will include links to navigate to different pages within the site. It will also contain the **Drop-down Nav** component. Currently only the main nav categories will render products in that category. I use several repeater directives to loop through the categories/subcategories, and display them on the navbar.

### DropDownNav
 It will display sub-categories, which will filter which products are displayed, based on their category. Currently it displays three tiers of categories, but they do not change the products listed yet.

## Home Page
This page will be its own component, since it differs from the main layout of the other page components.
It will have a Hero banner, a **Product List** component (which will contain highlighted **Product** Components).
Next it will have a sections for collections, gifts, blogs, and a lower banner. This component will be shown when the Main logo is clicked. On the bottom there will be a **Footer** component.

## Category Page
A category page will be the main repeating component for pages, since the layout is pretty similar in each.
It will include the following components:
* **SideBar**
* **Product List**
* **Product Row**
* **Footer**

### SideBar
This component will filter and sort the data fed into the **Product List** component. Currently it is not completed, but a placeholder is located where it would go.

### Product List
This component will import an array of objects, each of which form the model needed to compile the view for each **Product** component.
A repeater directive is used for this functionality. Eventually the amount of items per page will be limited, with pagination to load the next 50 or so at a time.

##### Product
The Product Component will have an image, manufacturer, description, price, ranking, and the option to add badges (such as: free shipping, on sale, etc...). Products conditionally render based on the page selected in the main navbar.

Eventually there will also be a stars component, which will render star icons based on the ranking in the database. Currently only the number of stars is listed.

#### Footer
The footer will display legal info and links to navigate to other sections.

## Setup
_If the deployed version is not working, or you would like to set up the project locally on your computer_
1. Clone this repository
2. Install dependencies: npm install
3. Create a database on Firebase, then cd into the src directory of the cloned repo and run this command: touch api-keys.ts (for security reasons this file is not tracked by git).
4. In your project overview page, click the icon to add an app, then click the </> icon.
5. Copy the values config object, and past them into the apikeys.ts file.
6. Your file should look like this:

export const masterFirebaseConfig = {
    apiKey: "YOUR INFO",
    authDomain: "YOUR INFO",
    databaseURL: "YOUR INFO",
    projectId: "YOUR INFO",
    storageBucket: "YOUR INFO",
    messagingSenderId: "YOUR INFO"
  };

7. Start the Server: npm run start
4. The server page should open automatically. If not, enter this url into your browser: http://localhost:4200/

## Technologies Used
1. Angular
2. Sass
3. Firebase

## MIT license (c) 2018 Matt Groberg.
