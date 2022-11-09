# 07 Project One: WikiMusix

## Table of Contents

- [Description](#Description)
- [Technology](#Technology)
- [License](#license)
- [Badges](#badges)

## Description

OUTLINE:   

localStorage:  when users search for an artist the name is stored in localStorage.  When a user clicks the search input, a dropdown list appears and calls localStorage data to populate a list of previously searched artists.  If the user selects an item from the dropdown, the search will continue as normal.  

Screenshot of deployeed application:
![Name](link)

## Technology

Team coordination and planning was achieved using Github, Slack, and Zoom.  Github was utilized primarily for version control.  However, we also used Github Projects to create a kanban board.  This allowed us to know the overall project's status at any given time, and also update it in real time.  Github Pages was also our method of deploying our completed website.

For APIs, we chose to utilize Napster and Giphy after an extensive search.  Unfortunately, we had to change our project plans more than once due to technical limititations.  Ultimately, we decided to use Napster API as a database for musical information.  Using a custom search feature, we created a music search engine based upon the data contained in Napster API.  Everyone enjoys memes, so we decided to utilize Giphy API as a way to give users a meme for each artist that they search.  The functionality is implemented in a similar manner to the Napster API but is called in a different fetch request.  We also restricted the GIFs by rating to G or PG, as we do not want to host obscene content on our website.

We chose to use Tailwind as our CSS framework.  This is a framework that is growing in popularity and is thus going to be useful to know in the future.  Using Tailwind allowed us to quickly style containers and cards on our website so that we could focus on the beefier parts of the project.  We also incorporated the font Dosis from Google Fonts.  This was chosen because it is a nice blend of readability mixed with artistic flair, while also being somewhat minimalist.

## License

MIT License

Copyright (c) 2022 CascadeColin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)

ADD MORE
