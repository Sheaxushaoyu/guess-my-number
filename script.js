'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 no number!';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉 correct number!';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > number && guess <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😞you lost the game!';
    }
  } else if (guess < number && guess >= 1) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😞you lost the game!';
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'out of range';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😞you lost the game!';
    }
  }
});
