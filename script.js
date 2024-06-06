'use strict';

const markBtn = document.querySelector('.btn');
const cards = document.querySelectorAll('.notification__card');
const dots = document.querySelectorAll('.dot');
const count = document.querySelector('.count');

function markAllAsRead() {
  cards.forEach((card) => {
    card.classList.remove('notification__card--unread');
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  count.innerText = 0;
  markBtn.innerText = 'All notifications read';
  markBtn.style.cursor = 'default';
  markBtn.style.color = 'var(--clr-gray-5)';
}

markBtn.addEventListener('click', markAllAsRead);
