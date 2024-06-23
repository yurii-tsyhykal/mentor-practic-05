import { onClickChangeTheme, onDomContentLoaded } from './js/handlers';
import { onRecipeClick } from './js/modal';
import { refs } from './js/refs';
import { onLoadedDomTheme } from './js/theme';

document.addEventListener('DOMContentLoaded', onLoadedDomTheme);
document.addEventListener('DOMContentLoaded', onDomContentLoaded);
document.addEventListener('click', onRecipeClick);

refs.switchEl.addEventListener('click', onClickChangeTheme);
