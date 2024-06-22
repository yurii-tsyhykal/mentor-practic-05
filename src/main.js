import { onClickChangeTheme, onDomContentLoaded } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDomContentLoaded);

refs.switchEl.addEventListener('click', onClickChangeTheme);
