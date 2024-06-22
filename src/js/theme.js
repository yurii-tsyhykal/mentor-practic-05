import { refs } from './refs';

export function initTheme() {
  const checkTheme = loadFromLS('theme');
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.toggle('dark-theme');
  }
}
