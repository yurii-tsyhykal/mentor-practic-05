import { loadFromLS } from './localstorage';
import { refs } from './refs';

export function onLoadedDomTheme() {
  const checkTheme = loadFromLS('theme');
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.toggle('dark-theme');
    refs.modal.classList.toggle('dark-theme');
    refs.theme.innerHTML = `
      <svg class="moon" height="30" width="30">
        <use href="./img/icons.svg#moon"></use>
      </svg>`;
  }
}
