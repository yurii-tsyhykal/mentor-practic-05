import { refs } from './refs';
import { loadFromLS, saveToLS } from './localstorage';

export function onClickChangeTheme(e) {
  refs.bodyEl.classList.toggle('dark-theme');
  const themeColor = 'dark';
  const key = 'theme';
  if (refs.bodyEl.classList.contains('dark-theme')) {
    saveToLS(key, themeColor);
  }
}
