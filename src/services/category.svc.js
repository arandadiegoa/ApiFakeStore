import axios from "axios";

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

export const fetchCategoryProducts = async (name) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
