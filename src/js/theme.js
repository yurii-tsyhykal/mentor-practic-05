import { refs } from './refs';

export function onLoadedDomTheme() {
  const checkTheme = loadFromLS('theme');
  if (checkTheme === 'dark') {
    refs.bodyEl.classList.toggle('dark-theme');
  }
}
