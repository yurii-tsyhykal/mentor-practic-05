export function filterRecipesList(condition, recipes) {
  const filtered = [];
  recipes.forEach(recipe => {
    if (condition.includes(recipe.difficulty)) {
      filtered.push(recipe);
    }
  });
  return filtered;
}
