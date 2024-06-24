import { getAllRecipies } from './api-recipies';
import { filterRecipesList } from './filter';
import { saveToLS } from './localstorage';
import { refs } from './refs';
import { renderRecipesList } from './render-functions';

export function onClickChangeTheme(e) {
  refs.bodyEl.classList.toggle('dark-theme');
  refs.modal.classList.toggle('dark-theme');
  if (refs.bodyEl.classList.contains('dark-theme')) {
    saveToLS('theme', 'dark');
    refs.theme.innerHTML = `
      <svg class="moon" height="30" width="30">
        <use href="./img/icons.svg#moon"></use>
      </svg>`;
  } else {
    saveToLS('theme', 'white');
    refs.theme.innerHTML = `
      <svg class="sun" height="30" width="30">
        <use href="./img/icons.svg#sun"></use>
      </svg>`;
  }
}

export async function onDomContentLoaded(e) {
  const { recipes } = await getAllRecipies();
  refs.recipes = recipes;
  renderRecipesList(recipes);
}

export function onFilterActivate(e) {
  e.preventDefault();
  const elements = e.target.form;
  const condition = [];
  for (const element of elements) {
    if (element.checked) {
      condition.push(element.value);
    }
  }
  if (!condition.length) return renderRecipesList(refs.recipes);
  const filtered = filterRecipesList(condition, refs.recipes);
  if (filtered.length) {
    renderRecipesList(filtered);
  } else {
    refs.recipesList.innerHTML =
      '<h2 class="empty-result">No matches found</h2>';
  }
}
