var img = "";
var objectDetector = "";

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    var canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function modelLoaded() {
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}