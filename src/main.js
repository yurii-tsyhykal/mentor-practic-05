import { onClickChangeTheme } from './js/hendlers';
import { refs } from './js/refs';
import { initTheme } from './js/theme';
initTheme();

refs.switchEl.addEventListener('click', onClickChangeTheme);
