---
layout: about
title: About the Project
permalink: /about/
---

<h1>Abstract</h1>

The horror video game genre, shaped by a male-dominated industry, has historically centralized masculine perspectives in both creation and representation. Women and the LGBTQ+ community are underrepresented both in production roles as developers and designers, and also in game content, where playable characters often portray characters through harmful tropes, such as sexualization and female monstrosity. While horror has been examined in film and literature studies, horror video games are underexplored as cultural artifacts. This project builds on an earlier phase of work on a constructed dataset horror_games_feminist_themes where keywords were web-scraped from Wikipedia’s Category: Horror video games tree to identify possible recurring feminist themes. This project now aims to refine and transform the dataset into a public-facing website that visualizes and interprets patterns that emerge from the dataset, making them visible and analyzable.

<h1>Methods</h1>

Data was collected through a process that began with a Wikipedia web scrape using Python, BeautifulSoup, and wikipediaapi to gather all pages and subcategories within the Category:Horror_video_games. Data such as the game’s title, URL, and category were extracted to compile a curated list of games featuring female characters. A classifier was then built using control phrases and/or keywords to identify games featuring female characters and potential feminist themes. Data collection is ongoing and continues to be reviewed using both computational and manual methods.