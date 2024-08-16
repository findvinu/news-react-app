News React App

Description
---------------
This project is a React application that displays news articles with infinite scrolling and date range filtering. It uses Material UI for components, Axios for data fetching, and Day.js for date manipulation.

Prerequisites
-----------------
Node.js (version 18 or higher)
npm or Yarn (package manager)

Installation
-------------
1 - clone the repository: 
    https://github.com/findvinu/news-react-app.git

2 - Navigate into the project directory: 
    cd news-react-app

3 - Install dependencies:
    npm install
    # or
    yarn install

Usage
-------
1 - Start the development server:
    npm run dev
    # or
    yarn dev

2 - Open your browser and go to:
    http://localhost:5173/news-react-app


Features
--------
Infinite Scrolling: Automatically loads more articles as you scroll to the bottom of the page.
Date Range Filter: Allows users to filter articles by selecting a start and end date.

Components
-----------
App: The main component that handles fetching data, scrolling, and filtering.
NewsCard: Displays individual news articles.
Layout: Provides the layout structure for the application.
DateRangeFilter: Allows users to filter articles based on a selected date range.