//DOM hooks
var searchContainerEl = document.querySelector(".search-bar-dropdown-container");
var historyDropdownEl = document.querySelector(".history-dropdown");
var historyListEl = document.querySelector(".history-list");
var submitButtonEl = document.querySelector(".artist-search-btn");
var clearButtonEl = document.querySelector(".clear-history-btn");

//if client has no history, set it to an empty array
var clientSearchHistory = JSON.parse(localStorage.getItem("m-search-hist")) || [];
localStorage.setItem("m-search-hist", JSON.stringify(clientSearchHistory));

function init() {

    // show/hide the dropdown on search bar focus/unfocus
    // only show the dropdown if the user has search history
    searchContainerEl.addEventListener("mouseenter", () => { if (clientSearchHistory.length > 0) { historyDropdownEl.classList.add("show-dd"); }});
    searchContainerEl.addEventListener("mouseleave", () => { historyDropdownEl.classList.remove("show-dd"); });
    refreshSearchHistoryElement();

}

// updates the search history UI
var refreshSearchHistoryElement = function () {

    // remove current dropdown elements
    while (historyListEl.firstChild) {
        historyListEl.removeChild(historyListEl.firstChild);
    }

    // grab history from storage and iterate through it
    clientSearchHistory = JSON.parse(localStorage.getItem("m-search-hist"))
    clientSearchHistory.forEach(item => {

        // create a list element with the history data and append it to dropdown parent
        // <li class="history-item">Weezer</li>
        var temp = document.createElement("li");
        temp.classList.add("history-item");
        temp.textContent = item;

        historyListEl.appendChild(temp);

        // if a history item is clicked, fill the search bar with its value
        // and simulate a click on search button. TODO: polish? seems scuffed
        temp.addEventListener("click", () => {
            searchContainerEl.children[0].value = temp.textContent;
            submitButtonEl.click();
        })
    });
}

// forces a string to be in title case
// var forceTitleCase = function (str) {
//     var arr = str.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length > 1) { arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase(); }
//         else { arr[i] = arr[i].toUpperCase(); }
//     }
//     return arr.join(" ");
// }

// update the search history with a new item AND update the UI
var addToSearchHistory = function (item) {

    // item = forceTitleCase(item);

    if (!clientSearchHistory.includes(item)) {
        if (clientSearchHistory.length < 4) {
            // if the history is not full, unshift
            clientSearchHistory.unshift(item);
        } else {
            // if the history is full, delete last item and unshift
            clientSearchHistory.pop();
            clientSearchHistory.unshift(item);
        }
    } else if (clientSearchHistory[0] != item) {
        clientSearchHistory.splice(clientSearchHistory.indexOf(item), 1);
        clientSearchHistory.unshift(item);
    }

    // update local storage with new search history and refresh the UI element
    localStorage.setItem("m-search-hist", JSON.stringify(clientSearchHistory));
    refreshSearchHistoryElement();
}

// FEATURE: Clear History

clearButtonEl.addEventListener("click", () => {
    //delete localStorage, then reload page to run init()
    localStorage.removeItem("m-search-hist");
    init();
})

init();