// GOAL:  add giphy functionality to search button, with input from checkboxes
// Utilize search endpoint - https://developers.giphy.com/docs/api/endpoint#search
// beta KEY: ?api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm
// use ?rating=pg - avoid obscene content
// ?limit=50 - integer limit for beta keys

// free beta key, not important to protect

// let artistGif;
// let searchBtnEl = document.querySelector('artist-search-btn');
// let searchInputEl = document.querySelector('search-bar');

// let gifDisplay = document.querySelector('gif-content');


const APIKEY = 'k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm';
let userInput = 'drake ';
// limit = # of results (max 50), rating = normal movie ratings (use g or pg)
let query = 'https://api.giphy.com/v1/gifs/search?q=' + userInput.trim() + '&api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm&limit=1&rating=pg';

function getGif() { 
    fetch(query)
    .then((response) => {
        return response.json();
    })
    .then((giphy) => {
        //gets URL for img tag
        console.log(giphy.data[0].embed_url)
        return giphy.data[0].embed_url;
        // .data[0].embed_url);
        // gifDisplay.style["background-image"] = "url('" + giphy.data[0].embed_url + "')"
        // artistGif = giphy.data[0].embed_url;

    })
}




// assigns user input to userInput for use in fetch req
// userInput = searchBtnEl.textContent;

// assign gif URL to div container
// artistGif.setAttribute('background-image', artistGif);

//brainstorm ideas for how to use gifs
// can generate up to 50 gifs per search:  display them all on page below card?
// utilize localStorage

[
    {
        "type": "gif",
        "id": "U23WekMlGy6cImpMim",
        "url": "https://giphy.com/gifs/Friends-friends-tv-the-one-where-rachel-tells-U23WekMlGy6cImpMim",
        "slug": "Friends-friends-tv-the-one-where-rachel-tells-U23WekMlGy6cImpMim",
        "bitly_gif_url": "https://gph.is/g/E3lYozl",
        "bitly_url": "https://gph.is/g/E3lYozl",
        "embed_url": "https://giphy.com/embed/U23WekMlGy6cImpMim",
        "username": "friends",
        "source": "",
        "title": "Fake Surprised Season 8 GIF by Friends",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-06-27 18:32:13",
        "trending_datetime": "2021-05-03 17:00:16",
        "images": {
            "original": {
                "height": "400",
                "width": "480",
                "size": "4144688",
                "url": "",
                "mp4_size": "744843",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.mp4&ct=g",
                "webp_size": "1487390",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.webp&ct=g",
                "frames": "43",
                "hash": "6c2d4384fdc41f52f1865e804e2567c5"
            },
            "downsized": {
                "height": "301",
                "width": "361",
                "size": "1792949",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-downsized.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-downsized.gif&ct=g"
            },
            "downsized_large": {
                "height": "400",
                "width": "480",
                "size": "4144688",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.gif&ct=g"
            },
            "downsized_medium": {
                "height": "400",
                "width": "480",
                "size": "4144688",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.gif&ct=g"
            },
            "downsized_small": {
                "height": "186",
                "width": "223",
                "mp4_size": "78214",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-downsized-small.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-downsized-small.mp4&ct=g"
            },
            "downsized_still": {
                "height": "301",
                "width": "361",
                "size": "41451",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-downsized_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-downsized_s.gif&ct=g"
            },
            "fixed_height": {
                "height": "200",
                "width": "240",
                "size": "999098",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200.gif&ct=g",
                "mp4_size": "177966",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200.mp4&ct=g",
                "webp_size": "540162",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200.webp&ct=g"
            },
            "fixed_height_downsampled": {
                "height": "200",
                "width": "240",
                "size": "156910",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200_d.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200_d.gif&ct=g",
                "webp_size": "94658",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200_d.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200_d.webp&ct=g"
            },
            "fixed_height_small": {
                "height": "100",
                "width": "120",
                "size": "311497",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100.gif&ct=g",
                "mp4_size": "58848",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100.mp4&ct=g",
                "webp_size": "201264",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100.webp&ct=g"
            },
            "fixed_height_small_still": {
                "height": "100",
                "width": "120",
                "size": "9299",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100_s.gif&ct=g"
            },
            "fixed_height_still": {
                "height": "200",
                "width": "240",
                "size": "24331",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200_s.gif&ct=g"
            },
            "fixed_width": {
                "height": "167",
                "width": "200",
                "size": "723576",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w.gif&ct=g",
                "mp4_size": "137554",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w.mp4&ct=g",
                "webp_size": "429430",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w.webp&ct=g"
            },
            "fixed_width_downsampled": {
                "height": "167",
                "width": "200",
                "size": "130125",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w_d.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w_d.gif&ct=g",
                "webp_size": "72290",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w_d.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w_d.webp&ct=g"
            },
            "fixed_width_small": {
                "height": "84",
                "width": "100",
                "size": "221432",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100w.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100w.gif&ct=g",
                "mp4_size": "45548",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100w.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100w.mp4&ct=g",
                "webp_size": "157532",
                "webp": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100w.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100w.webp&ct=g"
            },
            "fixed_width_small_still": {
                "height": "84",
                "width": "100",
                "size": "6836",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/100w_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=100w_s.gif&ct=g"
            },
            "fixed_width_still": {
                "height": "167",
                "width": "200",
                "size": "18508",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/200w_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=200w_s.gif&ct=g"
            },
            "looping": {
                "mp4_size": "4477590",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-loop.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-loop.mp4&ct=g"
            },
            "original_still": {
                "height": "400",
                "width": "480",
                "size": "116255",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy_s.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy_s.gif&ct=g"
            },
            "original_mp4": {
                "height": "400",
                "width": "480",
                "mp4_size": "744843",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.mp4&ct=g"
            },
            "preview": {
                "height": "188",
                "width": "225",
                "mp4_size": "37660",
                "mp4": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-preview.mp4?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-preview.mp4&ct=g"
            },
            "preview_gif": {
                "height": "67",
                "width": "80",
                "size": "48882",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-preview.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-preview.gif&ct=g"
            },
            "preview_webp": {
                "height": "100",
                "width": "120",
                "size": "46964",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy-preview.webp?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy-preview.webp&ct=g"
            },
            "480w_still": {
                "height": "400",
                "width": "480",
                "size": "4144688",
                "url": "https://media2.giphy.com/media/U23WekMlGy6cImpMim/480w_s.jpg?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=480w_s.jpg&ct=g"
            }
        },
        "user": {
            "avatar_url": "https://media0.giphy.com/avatars/Friends/kumNrkmJnWZN.jpg",
            "banner_image": "https://media0.giphy.com/headers/Friends/HTkcts0ZvEVA.jpg",
            "banner_url": "https://media0.giphy.com/headers/Friends/HTkcts0ZvEVA.jpg",
            "profile_url": "https://giphy.com/friends/",
            "username": "friends",
            "display_name": "Friends",
            "description": "",
            "instagram_url": "",
            "website_url": "",
            "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPVUyM1dla01sR3k2Y0ltcE1pbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTBhMTU5NDBjMTVmM3gxNnZqamdxdG92M2J5YjFta2Z4MXZmd3VtZm9lMW9nenA5bSZjdD1n",
        "analytics": {
            "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVUyM1dla01sR3k2Y0ltcE1pbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTBhMTU5NDBjMTVmM3gxNnZqamdxdG92M2J5YjFta2Z4MXZmd3VtZm9lMW9nenA5bSZjdD1n&action_type=SEEN"
            },
            "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVUyM1dla01sR3k2Y0ltcE1pbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTBhMTU5NDBjMTVmM3gxNnZqamdxdG92M2J5YjFta2Z4MXZmd3VtZm9lMW9nenA5bSZjdD1n&action_type=CLICK"
            },
            "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVUyM1dla01sR3k2Y0ltcE1pbSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTBhMTU5NDBjMTVmM3gxNnZqamdxdG92M2J5YjFta2Z4MXZmd3VtZm9lMW9nenA5bSZjdD1n&action_type=SENT"
            }
        }
    }
]