# projects related to DOM

## project link

[Click here]()

# solution code

# project 1 (Color changer)

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# project 2 (BMI Calculator)

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give valid height ${height}`;
  } else if ((weight === "") | (weight < 0) || isNaN(weight)) {
    result.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

# Project 3 (Digital clock)

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); (for console printing)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

# Project 4 (Number guessing game)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlots = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowORhigh = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGame(guess);
  });
}

function validateGame(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a value more than 1");
  } else if (guess > 100) {
    alert("please enter  a value less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlots.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowORhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlots.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```
