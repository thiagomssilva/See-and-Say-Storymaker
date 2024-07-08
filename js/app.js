// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables -------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var textToSpeak = "";

var nounArray = [
  "cat",
  "dog",
  "bird",
  "fish",
  "elephant",
  "mom",
  "dad",
  "auntie",
];
var verbArray = ["jumps", "runs", "flies", "swims", "walks", "eat"];
var adjectiveArray = ["quick", "lazy", "happy", "sad", "bright"];
var secondNounArray = ["tree", "car", "house", "river", "mountain"];
var placeArray = ["park", "beach", "city", "village", "forest"];

var nounButton = document.getElementById("nounButton");
var verbButton = document.getElementById("verbButton");
var adjectiveButton = document.getElementById("adjectiveButton");
var secondNounButton = document.getElementById("secondNounButton");
var placeButton = document.getElementById("placeButton");
var speakButton = document.getElementById("speakButton");
var randomStoryButton = document.getElementById("randomStoryButton");
var resetButton = document.getElementById("resetButton");
var storyOutput = document.getElementById("storyOutput");

/* Functions -------------------------------------------------- */
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function speakNow(string) {
  var utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

function updateStoryOutput() {
  storyOutput.innerText = textToSpeak;
}

/* Event Listeners -------------------------------------------------- */
nounButton.onclick = function () {
  textToSpeak += " " + getRandomWord(nounArray);
  updateStoryOutput();
};

verbButton.onclick = function () {
  textToSpeak += " " + getRandomWord(verbArray);
  updateStoryOutput();
};

adjectiveButton.onclick = function () {
  textToSpeak += " " + getRandomWord(adjectiveArray);
  updateStoryOutput();
};

secondNounButton.onclick = function () {
  textToSpeak += " " + getRandomWord(secondNounArray);
  updateStoryOutput();
};

placeButton.onclick = function () {
  textToSpeak += " " + getRandomWord(placeArray);
  updateStoryOutput();
};

speakButton.onclick = function () {
  speakNow(textToSpeak);
};

randomStoryButton.onclick = function () {
  textToSpeak = `${getRandomWord(nounArray)} ${getRandomWord(
    verbArray
  )} ${getRandomWord(adjectiveArray)} ${getRandomWord(
    secondNounArray
  )} ${getRandomWord(placeArray)}`;
  updateStoryOutput();
  speakNow(textToSpeak);
};

resetButton.onclick = function () {
  textToSpeak = "";
  updateStoryOutput();
};
