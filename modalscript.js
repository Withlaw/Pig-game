'use strict';

const btn = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeEl = document.querySelector('.close-modal');
const bodyEl = document.querySelector('body');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

for (let i = 0, n = btn.length; i < n; i++) {
  btn[i].addEventListener('click', openModal);
}

const closeModalEventListener = function (nameEL) {
  nameEL.addEventListener('click', closeModal);
};
closeModalEventListener(closeEl);
closeModalEventListener(overlayEl);

document.addEventListener('keydown', function (keyInfo) {
  if (keyInfo.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});
