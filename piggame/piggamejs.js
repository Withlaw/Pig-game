'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

//initiative info
// const score = 0;
// const nowPlayer = [true, false];
const setting = {
  score: 0,
  nowPlaying: 0,
  nowPlayer: [player0El, player1El],
  currentPlayer: [current0El, current1El],
  scorePlayer: [score0El, score1El],
};
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//functions
//승리
function winner() {
  setting.nowPlayer[setting.nowPlaying].classList.add('player--winner');
  diceEl.classList.add('hidden');
  btnRollEl.classList.add('hidden');
  btnHoldEl.classList.add('hidden');
}

//현재 플레이어 구분하기
function playerChange() {
  setting.score = 0;
  // diceEl.classList.add('hidden');

  setting.currentPlayer[setting.nowPlaying].textContent = setting.score;

  ////리팩토링
  if (!setting.nowPlaying) {
    setting.nowPlaying = 1;
  } else {
    setting.nowPlaying = 0;
  }
  // setting.nowPlaying = !setting.nowPlaying ? 1 : 0;
  ////
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//주사위 버튼

btnRollEl.addEventListener('click', function () {
  const diceNum = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `piggame/dice-${diceNum}.png`;

  //2. 주사위 숫자 만큼 현재 점수 올리기
  if (diceNum !== 4) {
    setting.score += diceNum;
    // console.log('now :', setting.nowPlaying, typeof setting.nowPlaying);
    setting.currentPlayer[setting.nowPlaying].textContent = setting.score;
  } else {
    playerChange();
  }
});

//홀드 버튼
btnHoldEl.addEventListener('click', function () {
  let scoreDisplay = +setting.scorePlayer[setting.nowPlaying].textContent;
  scoreDisplay += setting.score;
  setting.scorePlayer[setting.nowPlaying].textContent = scoreDisplay;

  if (scoreDisplay >= 20) {
    winner();
  } else {
    playerChange();
  }
});

//새 게임 버튼
btnNewEl.addEventListener('click', function () {
  setting.nowPlayer[setting.nowPlaying].classList.remove('player--winner');
  diceEl.classList.add('hidden');
  btnRollEl.classList.remove('hidden');
  btnHoldEl.classList.remove('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  //// 클래스 초기화할때 반복문이용해보기!!

  playerChange();
});
