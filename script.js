'use strict';
//stable variable
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let guessNumber;
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const background = document.querySelector('body');
const scoreMessage = document.querySelector('.score');
const highScoreMessage = document.querySelector('.highscore');

const changeDisplayText = function (element, textcontent) {
  element.textContent = textcontent;
};

function checkNum() {
  guessNumber = Number(guess.value);

  if (score > 1) {
    if (guessNumber > 0 && guessNumber < 21) {
      score--;
      scoreMessage.textContent = score;
      if (guessNumber === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        message.textContent = 'Correct!';
        background.style.backgroundColor = '#60b347';
        if (highScore < score) {
          highScore = score;
          highScoreMessage.textContent = highScore;
        }
      } else {
        guessNumber > secretNumber
          ? (message.textContent = 'High')
          : (message.textContent = 'Low');
      }
    } else {
      message.textContent = 'No number';
    }
  } else {
    message.textContent = 'You lose T.T';
    changeDisplayText(scoreMessage, '0');
  }
}

function againBTN() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  background.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  guess.value = '';
  message.textContent = 'Start guessing..';
  score = 20;
  scoreMessage.textContent = '20';
}

check.addEventListener('click', checkNum);
again.addEventListener('click', againBTN);
