import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/recipes';

export async function getAllRecipies() {
  const { data } = await axios('');
  return data;
}

export async function getRecepieByID(id) {
  const { data } = await axios(`/${id}`);
  return data;
}
