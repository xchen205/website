function init(){
  if(window.location.pathname == "/webdev_project3/apiuserpage.html"){
    //cat variables
    const catButton = document.getElementById("cat-button");
    const catClearButton = document.getElementById("cat-clear-button");
    //color buttons
    //const colorButton = document.getElementById("color-button");
    //const paletteButton = document.getElementById("palette-button");
    //const colorClearButton = document.getElementById("color-clear-button");
    //cat buttons
    //catButton.addEventListener("onclick", getDogFact);
    //catClearButton.addEventListener("onclick", removeCatFact);
    //color buttons
    //colorButton.addEventListener("onclick", getColourLoversColor);
    //paletteButton.addEventListener("onclick", getColourLoversPalette);
    //colorClearButton.addEventListener("onclick", removeColourLoversPalette());
    getDogPic();
    getDogFact();
    google.maps.event.addDomListener(window, 'load', initMap);
  }
}

window.addEventListener("load", init);

//cors error
function getColourLoversColor(){
  //uses ColourLovers API
  fetch("https://www.colourlovers.com/api/colors/random?format=json", {
    method: 'GET',
    headers: { 
    'Access-Control-Allow-Origin': "xchen205.github.io/webdev_project3/apiuserpage.html",
    'Content-Type': 'application/json'
    //"Access-Control-Allow-Headers": *; 
    }
  }).then((response) => {
    if(!response.ok){
      throw new Error(`${response.status}`);
    }
    window.alert("test");
    return response.text();
  }).then((text) => {
    document.getElementById("color-pic").src = text.imageUrl; //.toString().replace("http", "https");
    document.getElementById("color-pic").alt = "a color";
  }).catch((error) => {
    console.log(`${error} on function getColourLoversColor()`);
    document.getElementById("color-pic").src = "./images/server.png";
  })
}


//cors error
function getColourLoversPalette(){
  //uses ColourLovers API
  fetch("https://www.colourlovers.com/api/palettes/random?format=json").then((response) => {
    if(!response.ok){
      throw new Error(`${response.status}`);
    }
    return response.text();
  }).then((text) => {
    document.getElementById("color-pic").src = image.imageUrl;
    document.getElementById("color-pic").alt = "a set of colors";
  }).catch((error) => {
    console.log(`${error} on function getColourLoversPalette()`);
    document.getElementById("color-pic").src = "./images/server.png";
  })
}

//works!! \o/
function getDogPic(){
  //uses ColourLovers API
  fetch("https://random.dog/woof.json").then((response) => {
    if(!response.ok){
      throw new Error(`${response.status}`);
    }
    return response.text();
  }).then((text) => {
    document.getElementById("color-pic").src = JSON.parse(text).url;
    document.getElementById("color-pic").alt = "a dog!";
  }).catch((error) => {
    console.log(`${error} on function getDogPic()`);
    document.getElementById("color-pic").src = "./images/server.png";
  })
}

//http error 503
function getCatFact(){
  //uses Daily Cat Facts API
  fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1").then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text;
  }).then((text) => {
    document.getElementById("cat-text").innerHTML = text;
  }).catch((error) => {
    document.getElementById("cat-text").innerHTML = `No fact for you: ${error}`;
  })
}

//works!! \o/
function getDogFact(){
  //uses Dog Facts API
  fetch("https://dog-api.kinduff.com/api/facts?number=1").then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  }).then((text) => {
    document.getElementById("cat-text").innerHTML = JSON.parse(text).facts;
  }).catch((error) => {
    document.getElementById("cat-text").innerHTML = `No fact for you: ${error}`;
  })
}

function removeCatFact(){
  document.getElementById("cat-text").innerHTML = "";
}

function removeColourLoversPalette(){
  document.getElementById("color-pic").src = "";
}

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0.000, lng: 0.000},
      zoom: 8
    });
}

