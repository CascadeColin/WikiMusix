var searchBar = document.querySelector('.search-bar');
var button = document.querySelector('.artist-search-btn');

var cardContainer = document.querySelector(".card-container");
var cardCollection = document.querySelectorAll(".song-card");
var cardHeaderCollection = document.querySelectorAll(".artist-name");
var cardBlurbCollection = document.querySelectorAll(".blurb");
var cardGifCollection = document.querySelectorAll(".gif-content");

button.addEventListener("click", getArtistID);

//main function
function getArtistID(e) {
    e.preventDefault();

    //format user input for api call
    userInput = searchBar.value.toLowerCase();
    userInput = userInput.replaceAll(' ','-')

    //concatenate req URL
    var requestURL = 'https://api.napster.com/v2.2/artists/'+userInput+'?&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'

    //call API
    fetch(requestURL) 
        .then(function (response) {
           return response.json();
        })
        .then(function(data) {
            //set variable to name of first artist in search results
            var artistId = data.artists[0].id;
            //get similar artists using id
            similarArtists(artistId);
        })
}

//spits out top 5(#based off (i<5)) similar artists
function similarArtists(artistId) {
    var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/similar?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            //iterate through the first 5 similar artists
            // CHANGED TO 1 DUE TO GIPHY API LIMITS
            for(i=0;i<5;i++) {
                //get data for the ith artist
                let name = data.artists[i].name;
                let blurb = data.artists[i].blurbs[0];
                let gifQueryInput = name.toLowerCase().replaceAll(' ','-');
                //get a gif of the artist
                let gifURL = "url('" + getGif(gifQueryInput) + "')";
                
                //update ith card with ith artist info
                cardHeaderCollection[i].textContent = name;
                cardBlurbCollection[i].textContent = blurb;
                cardGifCollection[i].style.backgroundImage = gifURL;
            }
        })
}



function getGif(name) { 

    let query = 'https://api.giphy.com/v1/gifs/search?q=' + name + '&api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm&limit=1&rating=pg';

    // fetch(query)
    // .then((response) => {
    //     return response.json();
    // })
    // .then((giphy) => {
    //     //gets URL for img tag
    //     console.log(giphy);
    //     console.log(giphy.data[0].url);
    //     return giphy.data[0].url;
    // })

    return "https://media2.giphy.com/media/U23WekMlGy6cImpMim/giphy.gif?cid=0a15940c15f3x16vjjgqtov3byb1mkfx1vfwumfoe1ogzp9m&rid=giphy.gif&ct=g";
}





// sorry matt i can tell you worked really hard ont these and they work great and are beautiful
// but since we're just using the name and blurb we dont actually need them i feel bad bro </3

// //spits out top 3 albums & a src link for the top album art; Actively fills first three children based off state and 
// function topAlbums(artistId) {
//     var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/albums/top?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
//     fetch(requestURL) 
//         .then(function (response) {
//            return response.json();
//         })
//         .then(function(data) {
//             console.log(data)
//             console.log(data.albums[0].id)
//             albumId = data.albums[0].id;
//             for(i=0;i<3;i++) {
//              document.querySelector('#songList'+(state-1)).children[i].innerHTML = data.albums[i].name
//              console.log(data.albums[i].name)
//             }
//             var requestURL = 'https://api.napster.com/v2.2/albums/'+albumId+'/images?apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
//             fetch(requestURL)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (data) {
//                     //what's logges here is the img src
//                     console.log(data.images[0].url);
//                 })
//         })
// }

// //spits out top 3 songs for artist
// function topSongs(artistId) {
//     var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/tracks/top?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
//     fetch(requestURL) 
//         .then(function (response) {
//            return response.json();
//         })
//         .then(function(data) {
//             for(i=0;i<3;i++) {
//              //   domhook.children[i].innerHTML = data.tracks[i].name 
//              console.log(data.tracks[i].name);
//             }
//         })
// };

