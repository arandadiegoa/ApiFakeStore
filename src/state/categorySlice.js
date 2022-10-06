import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../services/category.svc";

const categorySlice = createSlice({
  name: "category",
  initialState: { categoryList: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      //Cuando la funcion GetCategories tenga exito, que ejecute esto
      state.categoryList = action.payload;
      state.isLoading = false;
    });
    // builder.addCase(getCategories.rejected, (state, action) => {console.log(error)}) //en caso que falle la llamada a getCategories
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

//Accion Asincrona
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    //_ se pone para decir que no uso el primer parametro. Pero es necesario pasar el segundo
    const res = await fetchCategories(); //llama a la funcion del servicio
    return res.data; //lo devuelve en action.payload
  }
);

export const { setCategory } = categorySlice.actions;
export const selectCategoryState = (state) => state.category;
export default categorySlice.reducer;
