import { refs } from './refs';

refs.recipesList = document.querySelector('.recipes');

function recipeTamplate({ image, name, difficulty, cuisine }) {
  return `<li class="recipe-item">
    <img
        class="recipe-image"
        src=${image}
        alt=${name}
    />
    <div class="recipe-text">
        <p class="recipe-name">Name: ${name}</p>
        <p class="recipe-cuisine">Cuisine: ${cuisine}</p>
        <p class="recipe-difficulty">Difficulty: ${difficulty}</p>
    </div>;`
};

export function recipeTamplatesList(data) {
  const arr = data.hits;
  return arr.map(recipeTamplate).join('');
};