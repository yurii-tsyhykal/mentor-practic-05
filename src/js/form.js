import { getRecepieByQuery } from './api-recipies';
import { renderRecipesList } from './render-functions';
import { refs } from './refs';

export async function findFood(e) {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  const { recipes } = await getRecepieByQuery(query);
  refs.recipes = recipes;
  if (recipes.length) {
    renderRecipesList(recipes);
  } else {
    refs.recipesList.innerHTML =
      '<h2 class="empty-result">No matches found</h2>';
  }
}
