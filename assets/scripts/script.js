//Musixmatch API key: ad27421f1b1b34223a74c789cd5b9585
//DOCS: https://developer.musixmatch.com/documentation


//GCS API key: AIzaSyBGlCTzDBwNgNajShcFZS6eNIMSRLtsddY

//////////////////////////////////////////////////////////
//////////////   TO-DO   /////////////////////////////////
//////////////////////////////////////////////////////////

/*
include in head of HTML
<script async src="https://cse.google.com/cse.js?cx=e40401ab6122d4604">
</script>

div to include GCS into page content
customizable, see https://developers.google.com/custom-search/docs/element
<div class="gcse-search"></div>



*/

searchBar = document.querySelector('#searchBar');
button = document.querySelector('#button');

button.addEventListener("click", getArtistID);

//main function
function getArtistID(e) {
    e.preventDefault();
    userInput = searchBar.value.toLowerCase();
    userInput = userInput.replaceAll(' ','-')
    var requestURL = 'https://api.napster.com/v2.2/artists/'+userInput+'?&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
    fetch(requestURL) 
        .then(function (response) {
           return response.json();
        })
        .then(function(data) {
            var artistId = data.artists[0].id;
            similarArtists(artistId);
            topSongs(artistId);
            topAlbums(artistId);
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
            for(i=0;i<3;i++) {
                console.log(data.artists[i].name);
                //domHook.children[i].innerHTML = data.artists[i].name;
            }
        })
}

//spits out top 3 albums & a src link for the top album art;
function topAlbums(artistId) {
    var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/albums/top?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
    fetch(requestURL) 
        .then(function (response) {
           return response.json();
        })
        .then(function(data) {
            console.log(data)
            console.log(data.albums[0].id)
            albumId = data.albums[0].id;
            for(i=0;i<3;i++) {
             //   domHook.children[i].innerHTML = '#' + (i+1) + ':' + data.albums[i].name
             console.log(data.albums[i].name)
            }
            var requestURL = 'https://api.napster.com/v2.2/albums/'+albumId+'/images?apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
            fetch(requestURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    //what's logges here is the img src
                    console.log(data.images[0].url);
                })
        })
}

//spits out top 3 songs for artist
function topSongs(artistId) {
    var requestURL = 'https://api.napster.com/v2.2/artists/'+artistId+'/tracks/top?limit=5&apikey=Y2Q4NGE2MTMtMGI2Ni00ZGEwLWE3NWItNGFjMTMyYjg0NzYz'
    fetch(requestURL) 
        .then(function (response) {
           return response.json();
        })
        .then(function(data) {
            for(i=0;i<3;i++) {
             //   domhook.children[i].innerHTML = data.tracks[i].name 
             console.log(data.tracks[i].name);
            }
        })
};

