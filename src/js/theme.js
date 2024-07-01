import { loadFromLS, saveToLS } from './localstorage.js';
import { refs } from './refs';

export function onLoadedDomTheme() {
  const key = 'theme';
  const checkTheme = loadFromLS(key) ?? 'light';
  saveToLS(key, checkTheme);
  const sunBox = document.querySelector('.sun-container');
  const moonBox = document.querySelector('.moon-container');
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.add('dark-theme');
    refs.modal.classList.add('dark-theme');
    sunBox.classList.add('visually-hidden');
  } else {
    moonBox.classList.add('visually-hidden');
  }
}
