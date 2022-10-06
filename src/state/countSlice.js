import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: 0}, //se guarda lo minimo que se pueda
  reducers: {
    increment(state, action) {
      //state.canDecrement = true; -.> esta mal porque se puede derivar del value...no hace falta guardarlo
      state.value = state.value + 1;
    },
    decrement(state, action) {
   /*  if(state.value === 0){ //no usa
        state.canDecrement = false
    } */
      //state.value = state.value > 0 && state.value - 1; Una forma de hacerlo
      state.value = state.value - 1;
    },
    reset(state, action) {
      state.value = 0;
    },
    setCount(state, action) { //Sirve para setear el numero
      state.value = action.payload;
    },
  },
});

//Selector reutilizable
export const selectCountValue = (state) => state.count.value;
export const selectCanDecrement = (state) => state.count.value > 0;
export const { increment, decrement, reset, setCount } = countSlice.actions;
export default countSlice.reducer;
