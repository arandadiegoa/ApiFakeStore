import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCategoryProducts } from "../services/category.svc";
import { fetchAllProducts } from "../services/product.svc";

//Primero creamos el Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    isLoading: false,
    newProducts: [],
    currentPage: 1,
    limit: 6,
    cantPage: 1,
  },
  reducers: {
    setCurrentPage(state, accion) {
      state.currentPage = 1;
    },
    setNewProducts(state, accion) {
      state.newProducts = accion.payload;
    },
    reset(state, accion) {
      state.newProducts = state.productsList.slice(0, state.limit);
      state.currentPage = 1;
    },
    incrementPage(state, accion) {
      state.currentPage = state.currentPage + 1;
      if (state.currentPage <= state.cantPage) {
        state.newProducts = state.productsList.slice(
          state.limit * state.currentPage - state.limit,
          state.limit * state.currentPage
        );
      }
    },
    decrementPage(state, accion) {
      state.currentPage = state.currentPage - 1;
      if (state.currentPage > 0) {
        state.newProducts = state.productsList.slice(
          state.limit * state.currentPage - state.limit,
          state.limit * state.currentPage
        );
      }
    },
  },
  extraReducers: (builder) => {
    //addMatcher ->Funciona porque las acciones son iguales
    builder.addMatcher(
      isAnyOf(getProducts.fulfilled, getProductsByCategory.fulfilled),
      (state, accion) => {
        //Cuando la funcion GetCategories tenga exito, que ejecute esto
        state.productsList = accion.payload;
        state.newProducts = accion.payload.slice(0, state.limit);
        state.cantPage = Math.ceil(state.productsList.length / state.limit);
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(getProducts.pending, getProductsByCategory.pending),
      (state, accion) => {
        state.isLoading = true;
      }
    );
    /*   PARA UNO SOLO
      builder.addCase(getProductsByCategory.fulfilled, (state, accion) => {
      //Cuando la funcion GetCategories tenga exito, que ejecute esto
      state.productsList = accion.payload;
      state.newProducts = accion.payload.slice(0, state.limit);
      state.isLoading = false;
    }),
      builder.addCase(getProductsByCategory.pending, (state, accion) => {
        state.isLoading = true;
      }); */
  },
});

//Accion Asincrona
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    //_ se pone para decir que no uso el primer parametro. Pero es necesario pasar el segundo
    const res = await fetchAllProducts(); //llama a la funcion del servicio
    return res.data; //lo devuelve en action.payload
  }
);

//Accion Asincronica
export const getProductsByCategory = createAsyncThunk(
  "productsCategory/getProductsByCategory",
  async (name, thunkAPI) => {
    //_ se pone para decir que no uso el primer parametro. Pero es necesario pasar el segundo
    const res = await fetchCategoryProducts(name); //llama a la funcion del servicio
    return res.data; //lo devuelve en action.payload
  }
);

//Agregramos las Accion del reducer
export const {
  setNewProducts,
  setCurrentPage,
  reset,
  incrementPage,
  decrementPage,
} = productsSlice.actions;
//Armamos los selectores
export const selectProductsState = (state) => state.products;

//Exportamos el homeSlice, luego lo agregamos al Store
export default productsSlice.reducer;
