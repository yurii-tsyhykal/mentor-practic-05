import { onClickChangeTheme, onDomContentLoaded } from './js/handlers';
import { onRecipeClick } from './js/modal';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDomContentLoaded);
document.addEventListener('click', onRecipeClick);

refs.switchEl.addEventListener('click', onClickChangeTheme);
