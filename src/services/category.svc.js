import axios from "axios";
import config from "./config.svc";

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${config.apiUrl}/products/categories`);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

export const fetchCategoryProducts = async (name) => {
  try {
    const { data } = await axios.get(
      `${config.apiUrl}/products/category/${name}`
    );
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
