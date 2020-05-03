//Question 1

let question1 = (a, b) => a - b
console.log(question1(10, 5));

//Question 2
const question2Url = "https://api.rawg.io/api/games?genres=sports";

fetch(question2Url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        logNames(json);
    })
    .catch(function (error) {
        document.location.href = "error.html";
    });

function logNames(json) {
    const sportsGames = json.results;

    for (let i = 0; i < sportsGames.length; i++)
        console.log(sportsGames[i].name);
}

//Question 3

let sentence = "These cats are outrageous.";
let sentenceEdit = sentence.replace("cats", "giraffes")
console.log(sentenceEdit);

//Question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let userId;

if (params.has("userId") < 10) {
    document.location.href = "first.html";
} else if (params.has("userId") >= 10) {
    document.location.href = "second.html";
} else {
    document.location.href = "third.html";
}

//Question 5

const divContainer = document.querySelector(".container");
const button = document.querySelector(".btn");

divContainer.removeChild(button);
console.log(divContainer);

//Question 6

const listItem = document.createElement("li");
const listItemContent = document.createTextNode("Parrot");
listItem.className = "parrots";

listItem.appendChild(listItemContent);

listItemCow = document.querySelector(".cows");

listItemCow.appendChild(listItem);

//Question 7


const question7Url = "https://api.rawg.io/api/games/3801";

fetch(question7Url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        insertRating(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function insertRating(json) {
    const ratingContainer = document.querySelector(".rating");

    const gameRating = json.rating;

    ratingContainer.innerText = gameRating;
}