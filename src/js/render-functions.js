import { refs } from './refs';

refs.recipesList = document.querySelector('.recipes');

function recipeTamplate({ image, name, difficulty, cuisine }) {
  return `<li class="recipe-item">
    <img
        class="recipe-image"
        src=${image}
        alt=${name}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${name}</p>
        <p class="recipe-cuisine">Cuisine: ${cuisine}</p>
        <p class="recipe-difficulty">Difficulty: ${difficulty}</p>
    </div>;`
};

export function recipeTamplateList(data) {
  const arr = data.recipes;
  return arr.map(recipeTamplate).join('');
};