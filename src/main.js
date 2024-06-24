import { filterRecipesList } from './js/filter';
import { findFood } from './js/form';
import {
  onClickChangeTheme,
  onDomContentLoaded,
  onFilterActivate,
} from './js/handlers';
import { onRecipeClick } from './js/modal';
import { refs } from './js/refs';
import { onLoadedDomTheme } from './js/theme';

document.addEventListener('DOMContentLoaded', onLoadedDomTheme);
document.addEventListener('DOMContentLoaded', onDomContentLoaded);
document.addEventListener('click', onRecipeClick);
refs.form.addEventListener('submit', findFood);
refs.switchEl.addEventListener('click', onClickChangeTheme);
refs.applyFilter.addEventListener('change', onFilterActivate);
