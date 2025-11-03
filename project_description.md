# Movie Search App Using an API

## Objective
The goal of this project is to create a responsive web application that allows users to search for movies and view their details using a public movie database API, such as the OMDb or The Movie Database TMDb API.
### Users will be able to:
* Search for movies by title
* view movie posters, ratings, genres, and descriptions
* See detailed movie information on a dedicated page 

## Requirements
* **Frontend**: HTML, CSS, Javascript or React.js if preferred
* **API Integration**: OMDb API or TMDb API
* **Responsive Design**: Must adapt to both desktop and mobile screens 
* **Version Control**: GitHub repository with frequent commits
* **Design Tool**: Figma for wireframes and UI planning 
* **Hosting which is optional**: GitHub pages or netlify

## User Stories
1. As a user, I want to search for a movie by name so that i can quickly find the one I'm interested in.
2. As a user, I want to see a list of search results showing each movie's poster, title, and release year.
3. As a user, I want to click on a movie to view its full details, including synopsis, rating, cast, and runtime.
4. As a user, I want the website to look good and function properly on both my phone and computer.
5. As a user, I want to be able to return to the homepage easily after viewing movie details.

## Implementation Details
1. API Setup:
    * Register and get an API key from OMDb or TMDb.
    * Use fetch() or axios to call the API endpoints.
    * Parse the JSON response to display results dynamically.
2. Core Features:
    * **Search Bar**: Allows user input for movie titles.
    * **Movie Cards**: Show image, title, and year in a grid layout.
    * **Details Page**: Opens when a user clicks on a movie, diaplays extended info.
    * **Error Handling**: Display messages for invalid searches or missing results.
3. Responsive Design:
    * Use CSS Grid/Flexbox for layout.
    * Implement media queries for mobile and desktop views.
4. Optional Enhancements:
    * Add a "Favorites" feature using localstorage.
    * include filters for genre or release year.
    * Add a dark/light mode toggle

## Deliverables
* Functional movie search web app
* Source code on GitHub with README file
* Figma Wireframes (3 pages: Home, Search Results, Movie Details)
* Deployed version (Optional, via GitHub Pages or Netlify)
