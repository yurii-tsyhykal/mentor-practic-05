import { getRecepieByID } from './api-recipies';
import { refs } from './refs';
import { renderRecipeByID } from './render-functions';

export async function onRecipeClick(e) {
  if (!e.target.closest('li')) return;
  refs.parcing.innerHTML = '';
  const id = e.target.closest('li').dataset.id;
  const res = await getRecepieByID(id);
  refs.backdrop.classList.remove('hidden');
  renderRecipeByID(res);
  refs.backdrop.addEventListener('click', e => {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('close-button' || e.key === 'Escape')
    ) {
      refs.backdrop.classList.add('hidden');
      refs.backdrop.removeEventListener;
    }
  });
  document.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      refs.backdrop.classList.add('hidden');
      refs.backdrop.removeEventListener;
    }
  });
}
