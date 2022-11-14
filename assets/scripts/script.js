var searchBar = document.querySelector('.search-bar');
var button = document.querySelector('.artist-search-btn');
var historyDropdownEl = document.querySelector(".history-dropdown");

var cardContainer = document.querySelector(".card-container");
var cardCollection = document.querySelectorAll(".song-card");
var cardHeaderCollection = document.querySelectorAll(".artist-name");
var cardBlurbCollection = document.querySelectorAll(".blurb");
var cardGifCollection = document.querySelectorAll(".gif-content");

button.addEventListener("click", getArtistID);

//main function
function getArtistID(e) {
    e.preventDefault();
    
    //reset animation and placeholder text in case last search failed
    button.style.animation = "";
    searchBar.setAttribute("placeholder", "Search any artist...");
    historyDropdownEl.classList.remove("show-dd");

    //format user input for api call
    userInput = searchBar.value.toLowerCase();
    userInput = userInput.replaceAll(' ','-')

    //concatenate req URL
    var requestURL = 'https://api.napster.com/v2.2/artists/'+userInput+'?&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'

    //call API
    fetch(requestURL).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
        }).then(function(data) {

            if (data.artists.length < 1) {
                artistNotFound();
                return;
            }

            addToSearchHistory(data.artists[0].name);
            //set variable to name of first artist in search results
            var artistId = data.artists[0].id;
            //get similar artists using id
            similarArtists(artistId);
        }).catch(error => {
            searchBar.value = "";
            if (error.status === 400) {
                searchBar.setAttribute("placeholder", "No input, try again...");
            }
            button.style.animation = "btn-invalid 0.5s ease-out 1";
        })
}

//spits out top 5(#based off (i<5)) similar artists
function similarArtists(artistId) {
    var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/similar?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'

    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(async function(data) {

            console.log(data);

            if (data.artists.length < 5) {
                artistNotFound();
                return;                
            }

            //iterate through the first 5 similar artists
            // CHANGED TO 1 DUE TO GIPHY API LIMITS
            for(i=0;i<5;i++) {
                //get data for the ith artist
                let name = data.artists[i].name;
                let blurb = data.artists[i].blurbs[0];
                let gifQueryInput = name.toLowerCase().replaceAll(' ','-');

                var response = await fetch('https://api.giphy.com/v1/gifs/search?q=' + gifQueryInput + '&api_key=k7ib5hd5qzn7oJfBjJsdPcK1mCKE1mZm&limit=1&rating=pg')
                
                var gifJSON = await response.json();

                // //gets URL for img tag
                // console.log(gifJSON);
                let gifURL = gifJSON.data[0].images.downsized_large.url;
                // console.log(gifURL);

                //update ith card with ith artist info
                cardHeaderCollection[i].textContent = name;
                cardBlurbCollection[i].textContent = blurb;
                cardGifCollection[i].style.backgroundImage = "url('" + gifURL + "')";
                // cardGifCollection[i].style.backgroundImage = "url('https://media3.giphy.com/media/LmC8GSARPDatSC6J8X/giphy.gif?cid=0a15940cui9389ix24h8ns15siltc6l93uprqdd2fzzagq2g&rid=giphy.gif&ct=g')";

            }

            // show all cards and remove text from search bar
            cardContainer.classList.remove("hide");
            searchBar.value = "";

        })
}

function artistNotFound() {
    searchBar.value = "";
    searchBar.setAttribute("placeholder", "Not found in database, try again...");
    button.style.animation = "btn-invalid 0.5s ease-out 1";
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

