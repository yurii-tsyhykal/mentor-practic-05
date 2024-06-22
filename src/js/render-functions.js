import { refs } from './refs';

export function renderRecipesList(recipes) {
    const markup = recipes.map(({ id, image, name, difficulty, cuisine }) =>
    `<li class="recipe-item" data-id='${id}'>
    <img
        class="recipe-image"
        src=${image}
        alt=${name}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${name}</p>
        <p class="recipe-cuisine">Cuisine: ${cuisine}</p>
        <p class="recipe-difficulty">Difficulty: ${difficulty}</p>
    </div>;`).join('');
    refs.recipesList.insertAdjacentHTML('beforeend', markup);
};