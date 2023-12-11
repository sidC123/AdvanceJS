// Create a random number from 1 - 100;
// Create a player auth token
// Target all the required HTML elements
// Imagine a count system, count will either increase or decrease by creating variable.
// Setting the counter value to 1.
// Think of validations string,, NaN, num<1, num>100

// if player is authenticated:
// 1. Convert and store the user guess
// 2. Create a function to check the userGuess and validate
// 3. If guess does not matches with randomNumber




















let randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);
let playerAuth = true;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let body = document.querySelector('body');

let guessCount = 1;
let resetButton;

if (playerAuth) {
    guessSubmit.addEventListener('click', function (e) {
        let guessedNum = Number(guessField.value);
        guessField.focus();
        console.log("user guess:", guessedNum);
        checkGuess(guessedNum);
    });
}

function checkGuess(userGuess) {
    if (isNaN(userGuess)) {
        alert('PLease enter a valid number');
    } else if (userGuess < 1) {
        alert('PLease enter a number more than 1');
    } else if (userGuess > 100) {
        alert('PLease enter a  number less than 100');
    } else if (userGuess === randomNumber) {
        if (guessCount === 1) {
            guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += userGuess + ' ';
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        body.style.background = "url('./7crore.gif')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "100% 100vh";

        setGameOver();
    } else if (guessCount === 10) {
        guesses.textContent += userGuess + ' ';
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        if (guessCount === 1) {
            guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += userGuess + ' ';

        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    body.style.background = "#696969";
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    // resetParas.forEach((p) => {
    //     p.textContent = '';
    // })

    resetButton.remove();

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'inherit';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}