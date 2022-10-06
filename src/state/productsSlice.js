import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  },
  reducers: {
    /*   setNewProducts(state, accion) {
      state.newProducts = accion.payload;
    }, */
    setCurrentPage(state, accion) {
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, accion) => {
      //Cuando la funcion GetCategories tenga exito, que ejecute esto
      state.productsList = accion.payload;
      state.newProducts = accion.payload.slice(0, state.limit);
      state.isLoading = false;
    });
    builder.addCase(getProducts.pending, (state, accion) => {
      state.isLoading = true;
    });
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

//Agregramos las Accion del reducer
export const { setProducts, setNewProducts, setCurrentPage } =
  productsSlice.actions;
//Armamos los selectores
export const selectProductsState = (state) => state.products;

//Exportamos el homeSlice, luego lo agregamos al Store
export default productsSlice.reducer;
