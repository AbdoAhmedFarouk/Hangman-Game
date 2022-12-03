const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArr = Array.from(letters);

let letterContainer = document.querySelector(".letters");

lettersArr.forEach((letter) => {
  let span = document.createElement("span");
  let spanLetters = document.createTextNode(letter);
  span.appendChild(spanLetters);
  span.className = "letter-box";
  letterContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "scala",
    "javascript",
    "go",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "up",
  ],
  characters: [
    "albert einstein",
    "hitckcock",
    "alexander",
    "cleopatra",
    "mahatma ghandi",
  ],
  countries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"],
};

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letter-guess");

let valueArr = Array.from(randomValueValue);

valueArr.forEach((word) => {
  let emptySpan = document.createElement("span");
  if (word === " ") {
    emptySpan.className = "has-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letter-guess span");

let wrongAttempts = 0;
let theDraw = document.querySelector(".shape");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // choosen word (valueArr)
    valueArr.forEach((letter, wordIndex) => {
      if (clickedLetter == letter) {
        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });

    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts == 8) {
        endGame();
        letterContainer.style.pointerEvents = "none";
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}
