// const locations = [
//     [25.272234,51.421210],
//     [40.668083,-73.978557],
//     [49.166786,-122.801385],
//     [55.761226,37.594540],
//     [0.552119,35.306452],
//     [-16.696927,-49.265616],
//     [-12.015509,-77.084556],
//     [-0.173452,-78.476651],
//     [9.935848,-84.097897],
//     [14.851587,-91.523256],
//     [19.451904,-99.185354],
//     [43.725187,20.682714],
//     [47.066622,15.431666],
//     [45.775045,3.100527],
//     [40.231208,-3.763879],
//     [34.790922,10.757626],
//     [6.668074,-1.635519],
//     [14.879058,-15.874708],
//     [0.316390,32.567749],
//     [-1.951056,30.070275],
//     [18.772023,98.998754],
//     [15.105354,105.861119],
//     [11.547146,104.903693],
//     [25.031626,121.530959],
//     [34.130724,134.517785],
//     [35.198413,129.085509],
//     [3.212393,101.646219],
//     [1.293809,103.837003],
//     [-5.462038,122.601999],
//     [-37.808428,144.948607],
//     [-46.398375,168.375881],
//     [53.197116,50.156933],
//     [50.451966,30.521440],
//     [46.624390,14.312158],
//     [38.001498,23.722331],
//     [48.811937,9.201428],
//     [53.336864,-6.272377],
//     [52.470919,-1.896327],
//     [38.653047,-121.539730],
// ];

const locations = [//🇮🇳 India
    [27.173891, 78.042068],     // Taj Mahal
    [28.524428, 77.185455],     // Qutub Minar
    [28.5933, 77.2507],         // India Gate
//🇫🇷 France
    [48.858260, 2.294501],      // Eiffel Tower
    [48.873792, 2.295028],      // Arc de Triomphe
//🇮🇹 Italy
    [41.890251, 12.492373],     // Colosseum
    [43.723055, 10.396633],     // Leaning Tower of Pisa
    [41.902916, 12.453389],     // St. Peter's Basilica
//🇺🇸 USA
    [40.689249, -74.044500],    // Statue of Liberty
    [40.748817, -73.985428],    // Empire State Building
    [37.819929, -122.478255],   // Golden Gate Bridge
    [43.879102, -103.459067],   // Mount Rushmore
//🇬🇧 United Kingdom
    [51.500729, -0.124625],     // Big Ben
    [51.505456, -0.075356],     // Tower Bridge
    [51.178844, -1.826189],     // Stonehenge
//🇦🇪 UAE
    [25.197197, 55.274376],     // Burj Khalifa
    [24.412743, 54.474689],     // Sheikh Zayed Grand Mosque
//🇪🇸 Spain
    [41.403629, 2.174356],      // Sagrada Familia
    [40.415363, -3.714405],     // Royal Palace of Madrid
//🇧🇷 Brazil
    [-22.951916, -43.210487],   // Christ the Redeemer
//🇵🇪 Peru
    [-13.163141, -72.544963],   // Machu Picchu
//🇪🇬 Egypt
    [29.979175, 31.134358],     // Great Pyramid of Giza
    [29.975998, 31.137223],     // Great Sphinx
//🇯🇵 Japan
    [35.658581, 139.745438],    // Tokyo Tower
    [34.687315, 135.525856],    // Osaka Castle
    [35.714765, 139.796655],    // Senso-ji
//🇨🇳 China
    [40.431908, 116.570374],    // Great Wall of China
    [39.916345, 116.397155],    // Forbidden City
//🇦🇺 Australia
    [-33.856784, 151.215297],   // Sydney Opera House
    [-25.344428, 131.036882],   // Uluru
//🇸🇬 Singapore
    [1.286779, 103.854529],     // Merlion
    [1.283404, 103.860798],     // Marina Bay Sands
//🇲🇾 Malaysia
    [3.157851, 101.711668],     // Petronas Twin Towers
//🇹🇷 Turkey
    [41.008583, 28.980175],     // Hagia Sophia
    [41.005409, 28.976813],     // Blue Mosque
    [41.025588, 28.974115],     // Galata Tower
//🇬🇷 Greece
    [37.971532, 23.725749],     // Acropolis / Parthenon
//🇹🇭 Thailand
    [13.750000, 100.491300],    // Grand Palace Bangkok
    [13.746600, 100.493000],    // Wat Pho
//🇮🇩 Indonesia
    [-7.607874, 110.203751],    // Borobudur Temple
//🇰🇭 Cambodia
    [13.412469, 103.867018],    // Angkor Wat
//🇯🇴 Jordan
    [30.322076, 35.451525],     // Petra Treasury
//🇷🇺 Russia
    [55.752023, 37.617499],     // Red Square / Kremlin
//🇩🇪 Germany
    [52.516275, 13.377704],     // Brandenburg Gate
//🇳🇱 Netherlands
    [52.373074, 4.893237],      // Rijksmuseum
//🇨🇦 Canada
    [43.642566, -79.387057],    // CN Tower
//🇲🇽 Mexico
    [20.682975, -88.568649],    // Chichen Itza
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
let popupMessage;

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
    let randomX = Currentlocation[0] + (Math.random() * 5.5);
    let randomY = Currentlocation[1] + (Math.random() * 35.5);
    map.setView([randomX,randomY], 4);
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
        clickAudio.play()
        guessedLocation = [event.latlng.lat, event.latlng.lng];
        guessMarker = L.marker(guessedLocation).addTo(map);
        guessed = true;
        // guessLine = L.polyline([currentLocation, guessedLocation], {color:'red',weight: 3,dashArray: '5, 10' }).addTo(map);
        // L.popup().setLatLng(currentLocation).setContent(`<p>You Were:${distance}KM away</p>`).openOn(map);
        // scoreCal(Number(distance));
    }   
});


makeGuessBtn.onclick = function () {
    guessAudio.play()
    if (!guessed) {
        alert("Please make a guess first!");
        return;
    }

    if (guessed) {
        var distance = getGuessDistance(currentLocation, guessedLocation);
        guessLine = L.polyline([currentLocation, guessedLocation], {color:'red',weight: 3,dashArray: '5, 10' }).addTo(map);
        L.popup().setLatLng(currentLocation).setContent(`<p>You Were:${distance}KM away</p>`).openOn(map);
        var score = scoreCal(Number(distance));
        if (distance <= 10) {
            popupMessage = "PERFECT!";
        } else if (distance <= 100) {
            popupMessage = "AMAZING!";
        } else if (distance <= 500) {
            popupMessage = "GREAT GUESS!";
        } else if (distance <= 1000) {
            popupMessage = "NOT BAD!";
        } else if (distance <= 1500) {
            popupMessage = "CLOSE ENOUGH!";
        } else {
            popupMessage = "WAY OFF!";
        }
        guessedAudio.play()
        makePopup(popupMessage, distance, score);
        // makePopup("GREAT GUESS!",distance,score)
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

// Audio control

const audioIcon =  document.getElementById("audioIcon");
const bgAudio = document.getElementById("bgAudio");
const clickAudio = document.getElementById("clickAudio");
const guessAudio = document.getElementById("guessAudio");
const guessedAudio = document.getElementById("guessedAudio");

let isMuted = false;

audioIcon.onclick = function () {
    if(!isMuted) {
        bgAudio.pause();
        isMuted = true;
        audioIcon.innerHTML = `
            <path d="M5 12H10L17 6V26L10 20H5V12Z" fill="currentColor"/>
            <path d="M21 11L27 21" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
            <path d="M27 11L21 21" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
        `;
        audioIcon.audio
        }
    else {
        bgAudio.play()
        isMuted = false;
        audioIcon.innerHTML = `
            <path d="M5 12H10L17 6V26L10 20H5V12Z" fill="currentColor"/>
            <path d="M21 11V21" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
            <path d="M25 8V24" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
        `;
    }
}



main()


