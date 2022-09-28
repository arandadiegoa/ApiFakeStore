import axios from "axios";

//Metodo para todos los productos
export const fetchAllProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
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
