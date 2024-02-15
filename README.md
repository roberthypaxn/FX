# FX__Speedy
## Overview:
The exigence/problem that the website seeks to solve is being able to find out the real-time
exchange rate of any currency at any moment from anywhere in the world where anyone can
access the internet for free.

## Audience:
The audience or the people this can help are those who happen to need this information when in
need of currency exchange, traders, forex exchange offices, and anyone interested.
The website will fetch data using an API from openexchangerates.org to get a live currency
update situation.

## Main functions:
The website will have several views, including the main view that will allow the user to match
two currencies for different countries, input the amount they would like to know about, and see
the results. The main view will also display several random currency exchange rates with their
details. There will also be a dynamic view where each currency is displayed against one
currency. E.g. all other currencies against the USD.

## Wireframes for mobile:
![Front page wireframe](https://github.com/roberthypaxn/FX__Speedy/assets/92440718/183d7458-598f-4ab8-82b9-1852673f93f7)



![Tickers Wireframe](https://github.com/roberthypaxn/FX__Speedy/assets/92440718/d9577f32-6dcc-458f-b87a-d64770ff0da2)

## Wireframes for larger screens:
![Front page wireframe for large screens](https://github.com/roberthypaxn/FX__Speedy/assets/92440718/502ba544-e8f7-4383-b269-2e65186d0727)



![Tickers wireframe for large screens](https://github.com/roberthypaxn/FX__Speedy/assets/92440718/ff6c0457-5626-42ca-877a-f51eeb026032)

## Data Sources:
I will use external APIs, namely from openexchangerates.org and exchangerate-api.com, I will
determine which one works best during construction. To keep the application seamless, I will use
localStorage.
## Initial Module list:
• The header and footer will be modularized.
• Since every currency can have its page showing all its exchange rates, there shall be a
boilerplate to fit in the data fetched from the API.
Colors/ Typography/ Specific element styling:
• Primary Color: #252323. This color will be the color of the logo and will be the most
defining color of the page, used on the header, the footer, and the buttons.
• Secondary Color: #f5f1ed. This color will act as a background and be contrasted with the
primary color where needed.
• Tertiary colors: #70798c, #a99985. On links and other places where the primary and
secondary color cannot be used, these two colors will be used to define the page and keep
its essence.
• The main font of the website will be monospace, backed by sans-serif.
• Curves will be used to make it aesthetically appealing.

## Schedule / Timeline of development:
• Create a home page for the application, with placeholders for cards and drop-down data.
• Revise the API’s data structure and feed it to the front page and program the results of a
search as needed.
• Modularize the header and footer and make the template for the grid of cards to receive
data from the API for each currency dynamically.
• Make the search bar.
