# Guess The Card

Welcome to my <a href="https://nazar0309.github.io/Guess-the-card/">homepage</a>

<img src="/assets/readme_images/responsive_img.png">

##  Contents

- [Site Overview](#site-overview)
- [Planning Stage](#planning-stage)
  - [Idea](#idea)
  - [Site Aims](#site-aims)
  - [Target Audience](#target-audience)
  - [Site Goals](#site-goals)
  - [How Will I Achieve My Goals](#how-will-i-achieve-my-goals)
- [Site Structure](#site-structure)
- [Wireframes](#wireframes)
- [Typography](#typography)
- [Color Scheme](#color-scheme)
- [Features](#features)
  - [Navigation Menu](#navigation-menu)
  - [Fiorente Restaurant Homepage](#fiorente-restaurant-homepage)
  - [Menu](#menu)
  - [Working Hours](#working-hours)
  - [Chefs](#chefs)
  - [Reservation](#reservation)
  - [About Us](#about-us)
  - [Contacts](#contacts)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Repository Problems](#repository-problems)
  - [Validation](#validation)
  - [Responsiveness Test](#responsiveness-test)
  - [Lighthouse](#lighthouse)
  - [Browser Compatibility](#browser-compatibility)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Honorable Mentions](#honorable-mentions)
- [General Reference](#general-reference)
- [Content](#content)

## Site Overview

Guess the Card is a fun and interactive memory card game. Players flip and match pairs of cards within a grid, choosing from multiple difficulty levels. The game tracks the time taken to complete each round and allows players to restart and try again.

## Planning Stage

### Idea
The idea behind **Guess the Card** is to create an engaging and challenging memory game where players flip and match pairs of cards. This game aims to entertain users of all ages while also improving their memory and concentration skills. 

### Site Aims
- To provide an interactive and fun memory game experience.
- To offer multiple difficulty levels to cater to different skill levels.
- To ensure the game is responsive and accessible on various devices.
- To track and display the player's time to add a competitive element.

### Target Audience
- **Casual Gamers**: Individuals looking for a quick and fun game to play in their free time.
- **Children and Families**: Kids can enjoy the game while improving their memory skills.
- **Puzzle Enthusiasts**: People who enjoy brain games and challenges.
- **Educators**: Teachers and parents can use the game as a fun educational tool.

### Site Goals
- **User Engagement**: To keep users engaged with an intuitive and interactive game interface.
- **Ease of Use**: To design a user-friendly site that is easy to navigate.
- **Accessibility**: To ensure the game is playable on various devices, including desktops, tablets, and smartphones.
- **Performance Tracking**: To incorporate a timer to track how quickly players complete the game.

### How Will I Achieve My Goals
- **Interactive Design**: Implement a visually appealing and interactive design using HTML, CSS, and JavaScript.
- **Responsive Layout**: Use responsive design principles and media queries to ensure the site works well on all devices.
- **Clear Instructions**: Provide clear instructions and intuitive gameplay to make it easy for users of all ages to play.
- **Performance Metrics**: Include a timer and result display to track and show the player's performance.

## Site Structure
- **Home Page**: Introduction to the game with a start button to choose the difficulty level.
- **Game Page**: The main game interface where users can play the memory game, see the timer, and restart the game.
- **Results Page**: Displays the player's time and offers options to restart or choose a new difficulty level.


## Wireframes

<h3>Desktop wireframes:</h3>
<img src="/assets/readme_images/first_wireframe.png"><img src="/assets/readme_images/second_wireframe.png"><img src="/assets/readme_images/third_wireframe.png">


<h3>Mobile wireframes:</h3>
<img src="/assets/readme_images/fourth_wireframe.png"><img src="/assets/readme_images/fifth_wireframe.png"><img src="/assets/readme_images/sixth_wireframe.png">




## Typography

For this website, I have utilized the following font:

- **Arial, Helvetica, sans-serif:** Defines a prioritized list of font families to be used. If Arial is available, it will be used first. If Arial is not available, Helvetica will be used. If neither Arial nor Helvetica are available, the browser will use any available sans-serif font. 

## Color Scheme

The main colors used throughout the website, along with their RGBA codes, are as follows:

- **#9B1003**: This dark red color was used for main buttons to choose difficulty with cards `rgb(155, 16, 3)`.
<img src="/assets/readme_images/first_color.png">

- **#980f04**: This another dark red color was used for background color in results container `rgb(152, 15, 4)`.
<img src="/assets/readme_images/second_color.png">

- **#ffffff**: This default white color was used for font `rgb(255, 255, 155)`.
<img src="/assets/readme_images/third_color.png">
These colors are carefully chosen to create a cohesive and visually appealing design scheme.





# Features

### Navigation Menu
- **Dynamic Difficulty Selection:** Users can choose the difficulty level of the game by selecting the number of cards they wish to play with. This allows for a customizable gaming experience.
<img src="/assets/readme_images/features_1.png">

### Game Section
- **Card Flip Animation:** Cards flip with a smooth animation when clicked, revealing the images underneath. This adds an engaging visual effect to the game.
- **Matching Logic:** The game includes logic to detect matching pairs of cards. Successfully matched pairs remain flipped, while unmatched pairs flip back over.
- **Restart Button:** A restart button allows users to reset the game at any time, enabling a fresh start without reloading the page.
- **Timer:** A built-in timer tracks the duration of the game, adding an element of challenge and allowing users to track their performance.
<img src="/assets/readme_images/features_2.png">

### Visual Design
- **Confetti Animation:** Upon successfully completing the game, a confetti animation is triggered to celebrate the achievement.
- **Responsive Design:** The website layout adjusts seamlessly across various device sizes, ensuring an optimal user experience on desktops, tablets, and mobile devices.
<img src="/assets/readme_images/features_3.png">




These features combine to provide an engaging, user-friendly, and visually appealing game experience on the "Guess the Card" website.


# Technologies Used

<a href="https://html.com/html5/">HTML5</a> - provides the content and structure for the website.<br>
<a href="https://en.wikipedia.org/wiki/CSS">CSS - provides the styling.</a><br>
<a href="https://code.visualstudio.com/">Visual Studio Code</a> - used to host and edit the website.<br>
<a href="https://github.com/">Github</a> - used to deploy the website.<br>
<a href="https://balsamiq.com/">Balsamiq</a> - used to create the wireframes.<br>
<a href="https://www.javascript.com/">JavaScript</a> - adds interactivity and functionality to the website, including game logic, animations, and dynamic content updates.<br>



# Testing


## Manual testing

Various testing methods were employed to ensure the functionality, responsiveness, and compatibility of the website.<br>

<img src="/assets/readme_images/Test_1.png">




## Main issues


<img src="/assets/readme_images/Test_2.png">



## Validation

### HTML validation via <a href="https://validator.w3.org/nu/">HTML-validator</a>

index.html:<br>
<img src="/assets/readme_images/html_validation.png">

### CSS validation via <a href="https://jigsaw.w3.org/css-validator/">CSS-validator</a>
style.css:<br>
<img src="/assets/readme_images/css_validation.png">

### Java Script validation via <a href="https://jshint.com/">JS Hint</a>
script.js:<br>
<img src="/assets/readme_images/js_validate1.png">
create_game.js:<br>
<img src="/assets/readme_images/js_validate2.png">
results.js:<br>
<img src="/assets/readme_images/js_validate3.png">
game_array.js:<br>
<img src="/assets/readme_images/js_validate4.png">


## Responsiveness Test

The website was tested on different devices and screen sizes to ensure a consistent and optimal user experience.

|          | Galaxy Fold | Pixel 7 | iPhone 14 Pro Max | iPad Air | iPad Pro | Display <1200px | Display >1200px |
|----------|-------------|---------|-------------------|----------|----------|-----------------|-----------------|
| Render   | pass        | pass    | pass              | pass     | pass     | pass            | pass            |
| Images   | pass        | pass    | pass              | pass     | pass     | pass            | pass            |
| Links    | pass        | pass    | pass              | pass     | pass     | pass            | pass            |

### Photos from Responsiveness Testing

Ipad Mini:<br>
<img src="/assets/readme_images/IpadMini.png">

Ipad Pro:<br>
<img src="/assets/readme_images/IpadPro.png">

Iphone X<br>
<img src="/assets/readme_images/IphoneX.png">

Iphone 5/5s<br>
<img src="/assets/readme_images/Iphone5.png">

Laptop L:<br>
<img src="/assets/readme_images/LaptopL.png">

2K Screens:<br>
<img src="/assets/readme_images/2K.png">







## Browser Compatibility

Fiorente Restaurant website was tested on the following browsers with no visible issues for the user:

1.Google Chrome<br>
2.Microsoft Edge<br>
3.Mozilla Firefox<br>

Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.<br>



# Deployment and local development

## How to deploy
The website was deployed on GitHub Pages following these steps:

1.Go to GitHub, navigate through Repository/settings/pages.<br>
2.Select "main branch" in the source tab and click save.<br>
3.The page should look like this, which includes the webpages address:<br>

<img src="/assets/read_me_images/deployment_readme.png">


## How to Fork and Clone a Project

### Forking a Project

1. **Sign in to GitHub**:
   - Ensure you are logged into your GitHub account.

2. **Navigate to the Repository**:
   - Go to the repository you want to fork. You can use the search bar at the top of the GitHub homepage to find the repository.

3. **Fork the Repository**:
   - Click the "Fork" button in the top-right corner of the repository page.
   - GitHub will create a copy of the repository in your account.

### Cloning a Project

1. **Navigate to Your Forked Repository**:
   - Go to your GitHub profile and navigate to the forked repository.

2. **Get the Repository URL**:
   - Click the "Code" button on the repository page.
   - Copy the URL from the HTTPS tab. It should look something like `https://github.com/your-username/repository.git`.

3. **Open Your Terminal**:
   - Open your terminal or command prompt.

4. **Run the Git Clone Command**:
   ```bash
   git clone <repository-url>

   Replace <repository-url> with the URL you copied. For example:
   git clone https://github.com/your-username/repository.git
   Navigate to the Cloned Repository:
Once the cloning process is complete, navigate to the repository folder:
cd repository
Replace repository with the name of the cloned repository.




Difference between clone and fork: "Forking creates your own copy of a repository in a remote location (for example, GitHub). Your own copy means that you will be able to contribute changes to your copy of the repository without affecting the original repository. Cloning makes a local copy of a repository, not your own copy." <a href="https://www.educative.io/answers/what-is-the-difference-between-forking-and-cloning-in-git">Full explanation</a><br>





# General Reference

I created header similar way as we did in Love Running project. I have changed location of navigation, style and other little things.<br>
For creating this readme, I have used example readme files from our group in Slack, where we have examples of first projects.<br>
I used some help from YouTube tutorials as well.<br>
For photos, I have used <a href="https://www.figma.com/">Figma</a> app for design.<br>
Also I used to check <a href="https://www.behance.net/">Behance</a> website for inspiration and to choose topic for my first site.<br>

# Credits

Content
Font came from <a href="https://fonts.google.com/">Google Fonts </a>.<br>
Icons came from <a href="https://fontawesome.com/">Font Awesome</a>.<br>
Colors were created with <a href="https://rgbacolorpicker.com/">rgbacolorpicker</a>.<br>
The color palette was created with <a href="https://coolors.co/gradient-palette/ffffff-f5f5f5?number=2">Colors</a>.<br>
For creating the wireframes, I used <a href="https://balsamiq.com/wireframes/">Balsamiq</a>.<br>
For rezizing the images, I used the tool <a href="https://www.reduceimages.com/">Reduceimages</a>.<br>
The responsive image was created with <a href="https://ui.dev/amiresponsive">Amiresponsive</a>.<br>