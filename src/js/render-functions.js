import { refs } from './refs';

export function renderRecipesList(recipes) {
  const markup = recipes
    .map(
      ({ id, image, name, difficulty, cuisine }) =>
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
    </div>`
    )
    .join('');
  refs.recipesList.insertAdjacentHTML('beforeend', markup);
}

export function renderRecipeByID({
  name,
  difficulty,
  cuisine,
  caloriesPerServing,
  image,
  ingredients,
  instructions,
  prepTimeMinutes,
  cookTimeMinutes,
}) {
  const markup = `<h2 class="food-name"><b>Name:</b> ${name}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${cuisine}</p>
              <p class="difficulty"><b>Difficulty:</b> ${difficulty}</p>
              <p class="ingredients"><b>Inredients:</b> ${ingredients}</p>
              <p class="instructions"><b>Instructions:</b> ${instructions}</p>
              <p class="prep-time"><b>Preparation time:</b> ${prepTimeMinutes} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${cookTimeMinutes} minutes</p>
              <p class="calories"><b>Calories:</b> ${caloriesPerServing}</p>
            </div>
            <img class="large-image" src="${image}" alt="Food image" />
          </div>`;
  refs.parcing.insertAdjacentHTML('beforeend', markup);
}
