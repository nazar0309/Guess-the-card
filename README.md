# Fiorente Restaurant

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

Fiorente Restaurant is a website that showcases the offerings and ambiance of a fictional Italian luxury dining establishment. It provides information about the restaurant's menu, working hours, chefs, reservation options, and contact details.

## Planning Stage

### Idea

The idea behind Fiorente Restaurant is to create an online platform that entices visitors with the allure of fine Italian cuisine and luxury dining experiences.

### Site Aims

- To attract potential customers by presenting an enticing menu and appealing visuals.
- To provide essential information such as working hours, reservation options, and contact details.
- To showcase the expertise of the restaurant's chefs and the quality of its culinary offerings.

### Target Audience

The target audience includes food enthusiasts, individuals interested in fine dining experiences, tourists visiting the area, and local residents seeking upscale dining options.

### Site Goals

- Increase brand awareness for Fiorente Restaurant.
- Drive online reservations and inquiries.
- Showcase the restaurant's unique ambiance and culinary offerings.

### How Will I Achieve My Goals

- By creating a visually appealing website with high-quality images and engaging content.
- By ensuring easy navigation and accessibility of essential information.
- By implementing online reservation functionality and contact forms to facilitate communication with potential customers.

## Site Structure

The website consists of the following sections:
- Home
- Menu
- Working Hours
- Chefs
- Reservation
- About Us
- Contacts

## Wireframes

<h3>Desktop wireframes:</h3>
<img src="/assets/read_me_images/wireframe_1.png"><img src="/assets/read_me_images/wireframe_2.png"><img src="/assets/read_me_images/wireframe_3.png">


<h3>Mobile wireframes:</h3>
<img src="/assets/read_me_images/wireframe_4.png"><img src="/assets/read_me_images/wireframe_5.png"><img src="/assets/read_me_images/wireframe_6.png">




## Typography

For this website, I have utilized the following fonts:

- **Vollkorn SC**: This font is primarily used for headings and titles. It offers a sophisticated and elegant appearance, enhancing the overall aesthetic of the website.

- **Cormorant Garamond**: This font is employed for body text and paragraphs. It provides readability and a classic feel to the content, ensuring a pleasant reading experience for users.

Additionally, Font Awesome has been integrated into the website to incorporate icons and enhance visual elements.

## Color Scheme

The main colors used throughout the website, along with their RGBA codes, are as follows:

- **#2E2E34**: This dark gray color serves as the background for most sections of the website. Its RGBA code is `rgba(46, 46, 52, 1)`.
<img src="/assets/read_me_images/color_scheme_1.png">

- **#6F5748**: A warm brownish color used for accents, such as borders and certain text elements. Its RGBA code is `rgba(111, 87, 72, 1)`.
<img src="/assets/read_me_images/color_scheme_2.png">

- **#E9E9E9**: A light gray color used for text and other elements to provide contrast against the dark background. Its RGBA code is `rgba(233, 233, 233, 1)`.
<img src="/assets/read_me_images/color_scheme_3.png">
These colors are carefully chosen to create a cohesive and visually appealing design scheme.



# Features 

### Navigation Menu

A responsive navigation menu allows users to easily navigate between different sections of the website.

Burger-Icon nav-bar:
<img src="/assets/read_me_images/nav_bar_1.png"><br>
Burger-Icon nav-bar with navigation links open:
<img src="/assets/read_me_images/nav_bar_2.png"><br>
Expanded Nav-bar:
<img src="/assets/read_me_images/nav_bar_3.png"><br>


### Fiorente Restaurant Homepage

The homepage features a stunning hero image, welcoming visitors to the restaurant and setting the tone for the dining experience.
<img src="/assets/read_me_images/homepage_readme.png">


### Menu

The menu section showcases the restaurant's culinary offerings, including appetizers, entrees, desserts, and beverages.
<img src="/assets/read_me_images/menu_section_1.png">
<img src="/assets/read_me_images/menu_section_2.png">
<img src="/assets/read_me_images/menu_section_3.png">
<img src="/assets/read_me_images/menu_section_4.png">




### Working Hours

This section provides information about the restaurant's operating hours for different menus.
<img src="/assets/read_me_images/working_hours.png">


### Chefs

Profiles of the restaurant's chefs, highlighting their expertise and culinary specialties.
<img src="/assets/read_me_images/chefs_readme.png">


### Reservation

An online reservation form allows users to book a table directly from the website.
<img src="/assets/read_me_images/reservation_readme.png">

### About Us

Information about the history, philosophy, and values of Fiorente Restaurant.
<img src="/assets/read_me_images/about_us_1.png">
<img src="/assets/read_me_images/about_us_2.png">


### Contacts

Contact details, including address, phone number, email, and social media links.
<img src="/assets/read_me_images/contacts_readme.png">

# Technologies Used

<a href="https://html.com/html5/">HTML5</a> - provides the content and structure for the website.<br>
<a href="https://en.wikipedia.org/wiki/CSS">CSS - provides the styling.</a><br>
<a href="https://code.visualstudio.com/">Visual Studio Code</a> - used to host and edit the website.<br>
<a href="https://github.com/">Github</a> - used to deploy the website.<br>
<a href="https://balsamiq.com/">Balsamiq</a> - used to create the wireframes.<br>

# Testing


## Manual testing

Various testing methods were employed to ensure the functionality, responsiveness, and compatibility of the website.<br>
Each page was tested manually to check if every refference in navigation highlights correct way.<br> Also I have checked if the reservation form works and submits data to the server.<br> According to navigation, links transfer us to the correct path on each page.



## Main issues

One of th biggest mistake was that I was using em for font size. It caused lots of issues with my code, mostly with responsive design.<br>
Then my mentor Mitko reccomended me to use absolute units of measurement. I tried pixels and the problem was solved.<br>
Also I was wondering how to make 2 round lines around the menu link in the header. Using google chrome, i have founded transform-rotate method and used it.<br>


## Validation

### HTML validation via <a href="https://validator.w3.org/nu/">HTML-validator</a>

index.html:<br>
<img src="/assets/read_me_images/validation_3.png">
menu.html:<br>
<img src="/assets/read_me_images/validation_2.png">
aboutus.html:<br>
<img src="/assets/read_me_images/validation_1.png">

### CSS validation via <a href="https://jigsaw.w3.org/css-validator/">CSS-validator</a>
style.css:<br>
<img src="/assets/read_me_images/css_validation.png">

## Responsiveness Test

The website was tested on different devices and screen sizes to ensure a consistent and optimal user experience.

|          | Galaxy Fold | Pixel 7 | iPhone 14 Pro Max | iPad Air | iPad Pro | Display <1200px | Display >1200px |
|----------|-------------|---------|-------------------|----------|----------|-----------------|-----------------|
| Render   | pass        | pass    | pass              | pass     | pass     | pass            | pass            |
| Images   | pass        | pass    | pass              | pass     | pass     | pass            | pass            |
| Links    | pass        | pass    | pass              | pass     | pass     | pass            | pass            |

### Photos from Responsiveness Testing

Ipad Mini:<br>
<img src="/assets/read_me_images/ipad_mini_test.png">

Ipad Pro:<br>
<img src="/assets/read_me_images/ipad_pro_test.png">

Iphone 12 Pro:<br>
<img src="/assets/read_me_images/iphone_12_pro_test.png">

Iphone SE:<br>
<img src="/assets/read_me_images/iphone_se_test.png">

Laptop L:<br>
<img src="/assets/read_me_images/laptop_L_test.png">

2K Screens:<br>
<img src="/assets/read_me_images/2k_screen_test.png">







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


## How to fork a project
Information on how to fork a project: Information on how to fork a project: <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo">Fork the project</a><br>


## How to clone a project
Information on how to clone a project: <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository">Clone the project</a><br>


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