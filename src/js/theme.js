import { loadFromLS, saveToLS } from './localstorage.js';
import { refs } from './refs';

export function onLoadedDomTheme() {
  const key = 'theme';
  const checkTheme = loadFromLS(key) ?? 'light';
  saveToLS(key, checkTheme);
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.toggle('dark-theme');
    refs.modal.classList.toggle('dark-theme');
    refs.theme.innerHTML = `
      <svg class="moon" height="30" width="30">
        <use href="/img/icons.svg#moon"></use>
      </svg>`;
  }
}
