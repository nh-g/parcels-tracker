# Package tracker

A simple web app that displays a list of orders (or parcels) with some details that customers need to know like order status, ETAs, pickup locations, etc.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and supports major mobile and desktop browsers/layouts.

## How to Start - Available Scripts

Firstly start by downloading zip or cloning this repository.
```
git clone https://github.com/nh-g/parcels-tracker.git
```

In the project directory, you can run:
```
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
<br/>

## Consideration for further scale

Due to 5 hour time limit requirement of the assignment, there are several user experience steps was considered to be skipped(.i.e login authentication).<br/>

The style is thus kept very simple and minimalism so that the design can be easily adapted if being added to other projects. Considering the dominant usage as an app on small devices (mobile phone, tablet), the design was chosen to small screen responsively driven.

In the future, I plan to add some functions like:
<li> view interactive map of parcels; using React Google Map API</li>
<li> display last update in form of time ago; using React Time Ago API </li>
<li> users can choose to sort parcels by eta or order status</li>
<li> switching language interface</li>
<li> manually add parcel to track</li>
<br/>

## Dependencies

The app makes use of these packages:
### React
<li>react</li>
<li>react-dom</li>
<li>react-scripts</li>
<br/>

### Navigational components
<li>react-router-dom</li>
<br/>

### Global state management
<li>recoil</li>
<br/>

### Icons
<li>@fortawesome/free-regular-svg-icons</li>
<li>@fortawesome/free-solid-svg-icons</li>
<li>@fortawesome/react-fontawesome</li>
<br/>

### Testings 
react-testing-library

