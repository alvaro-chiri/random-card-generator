/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  setInterval(randomCard, 10000);
};
function randomCard() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let randNum = Math.floor(Math.random() * numbers.length);
  document.querySelector(".cardValue").innerText = numbers[randNum];
  let randFace = Math.floor(Math.random() * suits.length);
  document.querySelector(".bottomFace").innerText = suits[randFace];
  document.querySelector(".topFace").innerText = suits[randFace];
  if (suits[randFace] == "♥" || suits[randFace] == "♦") {
    document.querySelector(".topFace").classList.add("red");
    document.querySelector(".bottomFace").classList.add("red");
  } else {
    document.querySelector(".topFace").classList.remove("red");
    document.querySelector(".bottomFace").classList.remove("red");
  }
}
