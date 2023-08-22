# 11 ModuleChallenge NoteTaker sambailey

Northwestern Bootcamp challenge week 11

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

# Table of Contents

- [11 ModuleChallenge NoteTaker sambailey](#11-modulechallenge-notetaker-sambailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Installation, usage instructions and known issue](#installation-usage-instructions-and-known-issue)
  - [Testing](#testing)
  - [Video walkthroughs](#video-walkthroughs)
  - [Screen captures](#screen-captures)
  - [Credits and notes for the graders](#credits-and-notes-for-the-graders)

## Project description

The intent of this project was to build a note taker application using JavaScript, Node.js and Express.js. and learn build deployment using Heroku.

## Application functionality

When the application is run in a browser, users can create, view, edit, and delete notes.

## Technology used

The application was built using [node.js, v20.5.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications, [express.js 4.18.2](https://expressjs.com/), a fast, _allegedly_ un-opinionated, minimalist web framework for Node.js and [the uuidv4 package](https://www.npmjs.com/package/uuidv4) to create uuids for the notes.

## Installation, usage instructions and known issue

<details>
<summary> Expand for installation and usage instructions</summary>

Users or contributors can run the application locally or in a hosted environment: 

1.  **Clone the repository, run the application locally**

    • Run the application by entering `node index.js` in the `terminal` and follow the prompts

    • Clone the repository: `git clone git@github.com:thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey.git`

    • Install required frameworks, dependencies and packages by opening a terminal instance and running `npm install`

    • In the `terminal`, run `node server.js`, then open a browser and point the url to `localhost:8080`

    • Press `control+c` to close the application

2.  **Run the hosted application**
        The note taker application is deployed and hosted using Heroku. Simply point a browser at: https://modulechallenge11-note-taker-ff941a52a963.herokuapp.com/

3. **Usage instructions**
    
    After the application is running in a browser, either locally or hosted

    *Create a new note*
    1. Press "Get Started" button
    2. Enter a title and text for the note (both are required)
    3. Press the Save icon in the upper right corner of the application window

    Expected behavior: The note will be saved and displayed in the list on the right of the screen.

    *Adding a new note*
    1. Press the "+" button in the upper right corner of the application window
    2. Enter a title and text for the note (both are required)
    3. Press the "Save" button in the upper right corner of the application window

    Expected behavior: The note will be saved and displayed in the list on the left of the screen.

    *Edit a saved note*
    1. Select the note in the right side of the application window
    2. Enter a new title or text for the note 
    3. Press the "Save" button in the upper right corner of the application window

    Expected behavior: The edited note will be saved and displayed in the list on the left of the screen.

    *Delete a saved note*
    1. Press the "trash can" icon on the right side of the application window
    
    Expected behavior: The note will be deleted from the application's database and the window will be refreshed.

    *Known issues*
    • When editing an existing note, the "write" icon does not appear in the upper right corner of the application window. This issue is cosmetic, notes can still be edited by placing the cursor in the title or text fields and pressing the "save" icon. This issue needs be investigated, I need to more closely examine the starter code for the front-end, and addressed in the 1.v1 release of the application.

    • After editing a note, the original text will display in the main window. I believe I need to add a `e.stopPropagation();` method to resolve this issue. It will be addressed in the 1.v1 release of the application.
xw
    </details>

## Testing

The 1.0 version of this application does not have any unit tests.

## Video walkthroughs

Please see [this video](https://drive.google.com/file/d/1efinYow4UgIfIJYJ8JEltp5H_yH8F5zN/view?usp=sharing) for a demonstration of installing the application, running locally and using the application.

Please see [this video](https://drive.google.com/file/d/1J5AXEQ3iRWJfFXKKlO6MYijpoWjyNK8_/view?usp=sharing) for a demonstration of running the application [deployed and hosted in Heroku](https://modulechallenge11-note-taker-ff941a52a963.herokuapp.com/).

## Screen captures

A [screen capture](https://github.com/thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey/blob/9dcc2ace7e8cddd990c483469cfba45e9a9d121f/screencaptures/defaultstate.png)of the application after launch with a default note.

A [screen capture]() of the application after a new notes have been added to the database.

A [screen capture]() of the application after the a note has been deleted from the database.

## Credits and notes for the graders

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) for her exceptional investments to ensure our cohort is able to understand and learn the concepts taught during this coursework. Our teaching assistants, especially Jess, at TA who is subbing in this week, for your review of this assignment.  _Thank-you._

Grading team: I appreciate that I have almost as many commits as lines of new code written!
