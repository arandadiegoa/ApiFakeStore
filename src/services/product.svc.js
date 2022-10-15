import axios from "axios";
import config from "./config.svc";

//Metodo para todos los productos

//Esta función es la que trae la data de la API. Recibe por parámetro una nueva url, si no la recibe, usa la url por default.
export const fetchAllProducts = async () => {
  try {
    const { data } = await axios.get(`${config.apiUrl}/products`);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

//Metodo para un solo producto por ID

export const getInfoProduct = async (id) => {
  try {
    const { data } = await axios.get(`${config.apiUrl}/products/${id}`);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
