import { onClickChangeTheme, onDomContentLoaded } from './js/handlers';
import { refs } from './js/refs';
import { onLoadedDomTheme } from './js/theme';

document.addEventListener('DOMContentLoaded', onLoadedDomTheme);
document.addEventListener('DOMContentLoaded', onDomContentLoaded);
refs.switchEl.addEventListener('click', onClickChangeTheme);
