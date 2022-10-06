import axios from "axios";

//Metodo para todos los productos

const initUrl = `https://fakestoreapi.com/products`;

//Esta función es la que trae la data de la API. Recibe por parámetro una nueva url, si no la recibe, usa la url por default.
export const fetchAllProducts = async (url = initUrl) => {
  try {
    const { data } = await axios.get(url);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

//Metodo para un solo producto por ID

export const getInfoProduct = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
