'use strict';
//DOM MANIPULATION

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎆Correct Number!🎆';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //clicking without an input will generate 0, which is a falsy value
    //! not operator
    if (!guess) {
        //When there is no number entered
        //document.querySelector('.message').textContent = '❌Enter A Number❌';
        displayMessage('❌Enter A Number❌');

        //When player wins
    } else if (guess === secretNumber) {
        //When the number is equal to secret number
        displayMessage('🎆Correct Number!🎆');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#5edf37';

        document.querySelector('.number').style.width = '30rem';
        //setting the highscore. Check if highcore is bigger than score
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //if guess is wrong
    } else if (guess !== secretNumber) {
        //When guess is too high
        if (score > 1) {
            displayMessage(guess > secretNumber ? '🤯Too Big' : '😵Too Small!😵');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🌋You Lost!!🌋');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('❌Enter A Number❌');
    document.querySelector('.number').textContent = '?';
    //resets .guess input to blank
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#9cd2ed';
    document.querySelector('.number').style.width = '15rem';
});

//When guess is too low

/*else if (guess < secretNumber) {
   if (score > 1) {
       displayMessage('😵Too Small!😵');
       score--;
       document.querySelector('.score').textContent = score;
   } else {
       document.querySelector('.message').textContent = '🌋You Lost!!🌋';
       document.querySelector('.score').textContent = 0;
   }
   */