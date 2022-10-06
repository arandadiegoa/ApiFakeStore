import { createSlice } from "@reduxjs/toolkit";

//Primero creamos el Slice
const productsCategorySlice = createSlice({
  name: "productsCategory",
  initialState: {
    productsList: [],
    isLoading: false,
    newProducts: [],
    currentPage: 1,
  },
  reducers: {
    setProducts(state, accion) {
      state.productsList = accion.payload;
    },
    setNewProducts(state, accion) {
      state.newProducts = accion.payload;
    },
    setCurrentPage(state, accion) {
      state.currentPage = 1;
    },
  },
});

//Agregramos las Accion del reducer
export const { setProducts, setNewProducts, setCurrentPage } =
  productsCategorySlice.actions;
//Armamos los selectores
export const selectProductsByCategoryState = (state) => state.products;

//Exportamos el homeSlice, luego lo agregamos al Store
export default productsCategorySlice.reducer;
