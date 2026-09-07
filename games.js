const locations = [
    [25.272234,51.421210],
    [40.668083,-73.978557],
    [49.166786,-122.801385],
    [55.761226,37.594540],
    [0.552119,35.306452],
    [-16.696927,-49.265616],
    [-12.015509,-77.084556],
    [-0.173452,-78.476651],
    [9.935848,-84.097897],
    [14.851587,-91.523256],
    [19.451904,-99.185354],
    [43.725187,20.682714],
    [47.066622,15.431666],
    [45.775045,3.100527],
    [40.231208,-3.763879],
    [34.790922,10.757626],
    [6.668074,-1.635519],
    [14.879058,-15.874708],
    [0.316390,32.567749],
    [-1.951056,30.070275],
    [18.772023,98.998754],
    [15.105354,105.861119],
    [11.547146,104.903693],
    [25.031626,121.530959],
    [34.130724,134.517785],
    [35.198413,129.085509],
    [3.212393,101.646219],
    [1.293809,103.837003],
    [-5.462038,122.601999],
    [-37.808428,144.948607],
    [-46.398375,168.375881],
    [53.197116,50.156933],
    [50.451966,30.521440],
    [46.624390,14.312158],
    [38.001498,23.722331],
    [48.811937,9.201428],
    [53.336864,-6.272377],
    [52.470919,-1.896327],
    [38.653047,-121.539730],
];

let playLocations;
let currentRound = 1;


// test

const overlay = document.getElementById("scoreOverlay");
const nextRoundbtn = document.getElementById("nextRoundbtn");
const scoreReaction = document.getElementById("scoreReaction");
const scoreDistance = document.getElementById("scoreDistance");
const scoreAdd = document.getElementById("scoreAdd")
const resultScreen = document.getElementById("resultScreen")
const restartBtn = document.getElementById("restartBtn")

// Map sutff
let guessedLocation = null;
let guessed = false;
let conGuessed = false;

let guessMarker = null;
let guessLine = null;
let currentLocation = null;

const mapElement = document.querySelector(".map-view");
const scoreNumber = document.getElementById("scoreNumber")
const finalScore = document.getElementById("finalScore");
let score = 0;
const currentRoundElement = document.getElementById("currentRound")
const makeGuessBtn = document.getElementById("makeGuess");
let allRoundCompleted = false;


const map = L.map(mapElement);
const streetView = document.getElementById('street-view');

playLocations = fiveRandomLocation()


function getHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const rLat1 = (lat1 * Math.PI) / 180;
    const rLat2 = (lat2 * Math.PI) / 180;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(rLat1) * Math.cos(rLat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
              
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function fiveRandomLocation() {
    let location1;
    let location2;
    let location3;
    let location4;
    let location5;

    do {
        location1 = locations[Math.floor(Math.random() * locations.length)]
        location2 = locations[Math.floor(Math.random() * locations.length)]
        location3 = locations[Math.floor(Math.random() * locations.length)]
        location4 = locations[Math.floor(Math.random() * locations.length)]
        location5 = locations[Math.floor(Math.random() * locations.length)]
    }
    while(location1 === location2 || location1 === location3 || location1 === location4 || location1 === location5 || location2 === location3 || location2 === location4 || location2 === location5 || location3 === location4 || location3 === location5 || location4 === location5); 

    playLocations = [location1,location2,location3,location4,location5];
    console.log(playLocations)

    return playLocations;
}


function main() {
    guessed = false;
    currentLocation = playLocations[currentRound-1]
    getStreetView("AIzaSyC5671eu0WOtBBmFtrIjuTzgkhBsdF7Z3U",currentLocation)
    getMap(currentLocation)
}

function getStreetView(apikey,Currentlocation) {
    console.log(Currentlocation)
    const url = `https://www.google.com/maps/embed/v1/streetview?key=${apikey}&location=${Currentlocation[0]},${Currentlocation[1]}`
    streetView.setAttribute('src',url)
    return Currentlocation;
}

function getMap(Currentlocation) {
    map.setView(Currentlocation, 5);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
}

function scoreCal(distance) {
    const MAX_SCORE = 1000;
    const MAX_ALLOWED_DISTANCE = 5000;
    let roundScore = 0;

    if (distance <= 0) {
        roundScore = MAX_SCORE;
    } else if (distance < MAX_ALLOWED_DISTANCE) {
        let accuracy = (MAX_ALLOWED_DISTANCE - distance) / MAX_ALLOWED_DISTANCE;
        roundScore = Math.round(MAX_SCORE * accuracy);
    } else {
        roundScore = 0;
    }

    score += roundScore;
    scoreNumber.textContent = score;
    finalScore.textContent = "Score:"+score;
    return roundScore;
}


function getGuessDistance(location,guessedLocation) {
    const distance = getHaversineDistance(location[0],location[1],guessedLocation[0],guessedLocation[1])
    console.log(`Distance: ${distance.toFixed(2)} km`);
    return distance.toFixed(0);
}



map.on("click", function(event) {
    if (!conGuessed || currentRound>5) {
        if(guessed) {
            map.removeLayer(guessMarker);
            // map.removeLayer(guessLine);
        }
        guessedLocation = [event.latlng.lat, event.latlng.lng];
        guessMarker = L.marker(guessedLocation).addTo(map);
        guessed = true;
        // guessLine = L.polyline([currentLocation, guessedLocation], {color:'red',weight: 3,dashArray: '5, 10' }).addTo(map);
        // L.popup().setLatLng(currentLocation).setContent(`<p>You Were:${distance}KM away</p>`).openOn(map);
        // scoreCal(Number(distance));
    }   
});


makeGuessBtn.onclick = function () {
    if (!guessed) {
        alert("Please make a guess first!");
        return;
    }

    if (guessed) {
        var distance = getGuessDistance(currentLocation, guessedLocation);
        guessLine = L.polyline([currentLocation, guessedLocation], {color:'red',weight: 3,dashArray: '5, 10' }).addTo(map);
        L.popup().setLatLng(currentLocation).setContent(`<p>You Were:${distance}KM away</p>`).openOn(map);
        var score = scoreCal(Number(distance));
        makePopup("GREAT GUESS!",distance,score)
        conGuessed = true

    }
    if (currentRound <5) {
    currentRound++;
    currentRoundElement.textContent = "0"+currentRound;
    }
    else {
        allRoundCompleted = true;
        nextRoundbtn.textContent = "View Result" 
        nextRoundbtn.style.backgroundColor = "#19953e";
    }
}

// test

function makePopup(reaction,distance,score){
    overlay.style.display = "flex";
    scoreReaction.textContent = reaction;
    scoreDistance.textContent = distance + " Km";
    scoreAdd.textContent = "+"+score;

    }


nextRoundbtn.onclick = function() {
    overlay.style.display = "none";
    conGuessed = false;

    if(allRoundCompleted) {
        resultScreen.style.display = "flex"
    }
    else {
        main()
    }
    }

restartBtn.onclick = function () {
    resultScreen.style.display = "none"
    currentRound= 1;
    score= 0;
    guessed=false;
    conGuessed=false;
    guessedLocation=null;
    allRoundCompleted = false;
    clearMap();
    scoreNumber.textContent = score;
    currentRoundElement.textContent = "0" + currentRound;
    nextRoundbtn.textContent = "Next Round";
    nextRoundbtn.removeAttribute("style"); 
    overlay.style.display = "none";

    playLocations = fiveRandomLocation();
    main();
}

function clearMap() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });

    map.closePopup();
}

main()


