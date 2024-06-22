import { getAllRecipies } from './api-recipies';
import { refs } from './refs';
import { renderRecipesList } from './render-functions';

export function onClickChangeTheme(e) {
  refs.bodyEl.classList.toggle('dark-theme');
}

export async function onDomContentLoaded(e) {
  const { recipes } = await getAllRecipies();
  renderRecipesList(recipes);
}
