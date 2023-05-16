import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStateOne = {
  ProductQuantity: 1,
};

const sliceReducerOne = createSlice({
  name: "shopingPage",
  initialState: initialStateOne,
  reducers: {
    ProductName(state, action) {
      let newProduct = action.payload;
      state.productPirce = newProduct.price;
      state.productTitle = newProduct.title;
      state.productPoster = newProduct.poster;
    },

    EmptyData(state, action) {
      state.productPirce = 0;
      state.productTitle = 0;
      state.productPoster = "";
    },
  },
});

const store = configureStore({
  reducer: sliceReducerOne.reducer,
});

export const actionOne = sliceReducerOne.actions;
export default store;
