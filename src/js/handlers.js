import { getAllRecipies } from './api-recipies';
import { saveToLS } from './localstorage';
import { refs } from './refs';
import { renderRecipesList } from './render-functions';

export function onClickChangeTheme(e) {
  refs.bodyEl.classList.toggle('dark-theme');
  const themeColor = 'dark';
  const key = 'theme';
  if (refs.bodyEl.classList.contains('dark-theme')) {
    saveToLS(key, themeColor);
  }
}

export async function onDomContentLoaded(e) {
  const { recipes } = await getAllRecipies();
  renderRecipesList(recipes);
}
