# VRAD - Vacation Rentals Around Denver

![vrad](/vrad.jpg)

### About
VRAD is an application allowing users to find Vacation Rentals Around Denver, similar to AirBnb. A user can Login with their name, email address & purpose for the rental(there is no Login authentication), and choose different areas around Denver where they would like to stay.  After selecting an area, a user can view all available listings for that area. User can open each listing and see additional information and pictures, and can also add or remove the listing from their :blue_heart:Favorites. After favoriting listings, user can click on the My Favorites button to see all the listings they are interested in.
This was a paired project during Module 3 at [Turing School of Software & Design](https://turing.io/).

### User Story
User should be able to:

#### 1. Login
<img width="1436" alt="1" src="https://user-images.githubusercontent.com/57964291/82497642-d8773e80-9aab-11ea-8d19-67a4f1225a72.png">

#### 2. See Welcome message, Favorite Listings, Logout button, Areas Listings
<img width="1436" alt="2" src="https://user-images.githubusercontent.com/57964291/82497650-dad99880-9aab-11ea-81d8-0c5e254ce208.png">

#### 3. Choose Area and see all Listings
<img width="1438" alt="3" src="https://user-images.githubusercontent.com/57964291/82497653-dca35c00-9aab-11ea-9826-e410a1912c45.png">

#### 4. Select Listing and see Listing details and image slider
<img width="1438" alt="4" src="https://user-images.githubusercontent.com/57964291/82497658-de6d1f80-9aab-11ea-8b2d-c63b5dfe9448.png">

#### 5. Add/Remove Listing from Favorite Listings
<img width="1434" alt="5" src="https://user-images.githubusercontent.com/57964291/82497664-e1681000-9aab-11ea-98f3-2b8b2ab7efd8.png">

### User Interaction 
![1](/1.gif)

### Built with
- React
- JavaScript
- CSS
- Fetch API
- Jest
- React Testing Library

### Main Files

- [All Components](https://github.com/edignot/VRAD/tree/master/src/components) | Each Component has it's own test and CSS styling file
  - [App Component](https://github.com/edignot/VRAD/blob/master/src/components/App/App.js) | React Routing 
    - [App Component Async Integration Testing](https://github.com/edignot/VRAD/blob/master/src/components/App/App.test.js)
- [Fetch API Network Calls](https://github.com/edignot/VRAD/blob/master/src/ApiFetch/ApiFetch.js)

### Learning Goals
- Keep state based components to a minimum and leverage more functional components.
- Use a modular architecture for App file structure.
- Think deeply about React Lifecycle Methods.
- Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
- Become familiar with routing and how to handle dynamic routes.
- Use propTypes for every component receiving props.
- Write tests for React components and some asynchronous functionality.

### Install
1. Clone this repo
1. Run `npm install` to get dependencies
1. Run `npm start` to start the webserver 
1. Open `localhost:3000` in your favorite browser

### Contributors
### [Edita Ignot](https://github.com/edignot) | [MY COMMITS](https://github.com/edignot/VRAD/commits/master?author=edignot&branch=master)
[Karl Nielsen](https://github.com/Karlfunhouse)

