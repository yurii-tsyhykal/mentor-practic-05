import { loadFromLS, saveToLS } from './localstorage.js';
import { refs } from './refs';

export function onLoadedDomTheme() {
  const key = 'theme';
  const checkTheme = loadFromLS(key) ?? 'light';
  saveToLS(key, checkTheme);
  refs.theme.innerHTML = `
    <div class="moon-container">
      <svg class="moon" height="30" width="30">
        <use href="/img/icons.svg#moon"></use>
      </svg>
    </div>
    <div class="sun-container">
      <svg class="sun" height="30" width="30">
        <use href="/img/icons.svg#sun"></use>
      </svg>
    </div>`;
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
