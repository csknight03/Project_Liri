// write the code you need to grab the data from keys.js
var keys = require("./keys.js");
var request = require("request"); 
// Twitter vars
var Twitter = require('twitter'); // this is how we import the twitter package
var twitterKey = require('./keys.js');
var T = new Twitter(twitterKey);
// spotify vars
var Spotify = require('node-spotify-api'); // this is how we import the twitter package
var spotifyKey = require('./keys.js');
var S = new Spotify(spotifyKey);
// Then store the keys in a variable

// //Make it so liri.js can take in one of the following commands:

var commands = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];

//  my - tweets
if (commands === "my - tweets") {

    var params = {

        q: '@UofU03',

        count: 20

    } // this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it

    T.get('search/tweets', params, searchedData); // get is the function to search the tweet which three paramaters 'search/tweets', params and a callback function.

    function searchedData(err, data, response) {
        if (err) {

            console.log("Something went wrong!");

        }

        else {

            console.log("It worked!");

        }

        console.log(data);

    }
} 
//  spotify - this - song
else if (commands === "spotify - this - song") {
    
    S.search({
    type: 'track',
    query: a
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});
} 
//  movie - this
else if (commands === "movie - this") {


    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[i];

        }

        else {

            movieName += nodeArgs[i];

        }
    }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Release Year: " + JSON.parse(body).Year);
        }
    });

}
//  do -what - it - says
else if (commands === "do -what - it - says") {
    
    console.log(a2 * b2);
}

// What Each Command Should Do:

// node liri.js spotify - this - song '<song name here>'

//     2. This will show the following information about the song in your terminal / bash window  

//      Artist(s)
//      The song 's name
//      A preview link of the song from Spotify
//      The album that the song is from

// If no song is provided then your program willdefault to "The Sign" by Ace of Base

//      3. node liri.js movie - this '<movie name here>'

// This will output the following information to your terminal / bash window:

//     Title of the movie.*Year the movie came out.*IMDB Rating of the movie.*Rotten Tomatoes Rating of the movie.*Country where the movie was produced.*Language of the movie.*Plot of the movie.*Actors in the movie.

// If the user doesn't type a movie in, the program will output data for the movie 'Mr.Nobody.'If you haven't watched "Mr. Nobody,"then you should: http: //www.imdb.com/title/tt0485947/
// It's on Netflix!


// ================================================================================================



// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//     id: < your spotify client id > ,
//     secret: < your spotify client secret >
// });

// spotify.search({
//     type: 'track',
//     query: 'All the Small Things'
// }, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(data);
// });
// ===============================================================================================
