// GOAL:  add giphy functionality to search button, with input from checkboxes
// Utilize search endpoint - https://developers.giphy.com/docs/api/endpoint#search
// beta KEY: ?api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm
// use ?rating=pg - avoid obscene content
// ?limit=50 - integer limit for beta keys

let searchBtn = document.querySelector('artist-search-btn');
const APIKEY = 'k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm';
let userInput = 'drake';
let query = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm&limit=50&rating=pg';

fetch(query)
.then((response) => {
    return response.json();
})
.then((giphy) => {
    console.log(giphy);
})