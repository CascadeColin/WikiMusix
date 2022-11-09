var searchBar = document.querySelector('.search-bar');
var button = document.querySelector('.artist-search-btn');

var cardContainer = document.querySelector(".card-container");
var cardCollection = document.querySelectorAll(".song-card");
var cardHeaderCollection = document.querySelectorAll(".artist-name");
var cardBlurbCollection = document.querySelectorAll(".blurb");
var cardGifCollection = document.querySelectorAll(".gif-content");

button.addEventListener("click", getArtistID);

state = 1

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
            var artistId = data.artists[0].id;
            // for (i=0;i<3;i++) {
                // document.querySelector('#header'+state).innerHTML = data.artists[0].name;
            // }
            // state++;
            console.log(data);
            similarArtists(artistId);
            // topSongs(artistId);
            // topAlbums(artistId);
        })
}

//spits out top 3(#based off (i<3)) similar artists
function similarArtists(artistId) {
    var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/similar?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(i=0;i<5;i++) {
                let name = data.artists[i].name;
                let blurb = data.artists[i].blurbs[0];
                let gifURL = "url('" + getGif(name) + "')";
                //domHook.children[i].innerHTML = data.artists[i].name;
                cardHeaderCollection[i].textContent = name;
                cardBlurbCollection[i].textContent = blurb;
                cardGifCollection[i].style.backgroundImage = gifURL;
            }
            console.log(data);
        })
}

















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

