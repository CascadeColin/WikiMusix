// GOAL:  add giphy functionality to search button, with input from checkboxes
// Utilize search endpoint - https://developers.giphy.com/docs/api/endpoint#search
// beta KEY: ?api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm
// use ?rating=pg - avoid obscene content
// ?limit=50 - integer limit for beta keys

// free beta key, not important to protect
const APIKEY = 'k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm';
let artistGif;
let searchBtnEl = document.querySelector('artist-search-btn');
let searchInputEl = document.querySelector('search-bar');
let gifDisplay = document.querySelector('gif-content');
//user generated in .search-bar
let userInput = '';
// limit = # of results (max 50), rating = normal movie ratings (use g or pg)
let query = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm&limit=1&rating=pg';

fetch(query)
.then((response) => {
    return response.json();
})
.then((giphy) => {
    //gets URL for img tag
    console.log(giphy.data[0].embed_url);
    artistGif = giphy.data[0].embed_url;
})

// assigns user input to userInput for use in fetch req
userInput = searchBtnEl.textContent;

// assign gif URL to div container
artistGif.setAttribute('background-image', artistGif);

//brainstorm ideas for how to use gifs
// can generate up to 50 gifs per search:  display them all on page below card?
// 