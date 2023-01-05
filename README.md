# The Schenectady Minutes
[Project Board](https://trello.com/b/4SxKRsYm/take-home-challenge) | [Wireframe and Architecture](https://miro.com/app/board/uXjVP1pSnrQ=/) | [Time Log](https://docs.google.com/spreadsheets/d/1sUKcc47ER7Kk--6nNqp-bDU6rWDw5E0zG5zQJjlmPR8/edit?usp=sharing)

## Overview
This app allows a user to preview all the top stories of the day as set by the NYTimes. A user can either filter the topic of articles they are viewing and / or select an article preview to view it's details

![2023-01-05 13 57 31](https://user-images.githubusercontent.com/103966650/210880723-b836966f-7549-4dbd-a14f-6f3b7f9d2863.gif)

## Project Context
This project was a take-home challenge assigned by the Turing School of Software and Design. It was completed from design to deployment in approximately 9 hours utilizing the NYTimes API, React, React Router, and Cypress

Read the full challenge requirements [here](https://mod4.turing.edu/projects/take_home/)

## Design
The process began with a thorough planning phase including Component Architecture, User Stories, and a basic Wireframe
- Component architecture was based on the desire to maintain a constant page header, with the article preview container dynamically changing to the article detailed view based on the article selected.
- The fetch call to the API was chosen to live in the App component, though an independent apiCalls.js file was used for the sake of modular architecture
- The wireframe was intentionally kept bare-bones for the sake of time

## Build
The coding process too approximately 8 of the 9 hours, and was guided using a Project Board with corresponding user stories and acceptance criteria
### Wins
- The use of dynamic variables to display information specific to the user's choices
- The initial plan was to take the original array of articles provided by the API and filter through them and render only the articles that pertained to a specific topic as set by the user. I instead chose to use the varied endpoints as provided by the API to instead refetch a new set of articles from the user-specified topic.
- Debugging issues caused by the use of a utilities.js file

### Challenges
- Dynamic Routing: if I were to do the project over, instead of creating a new id property for each article preview that would then be used for the dynamic routing, I would instead use a property already inherent in the dataset as provided by the API. 

