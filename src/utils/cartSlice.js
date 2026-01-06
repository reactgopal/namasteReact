import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // slice name
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // vanialla(older) redux => don't mutate state
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // redux toolkit
      // we have to mutated  the state
      // mutating the state here
      // redux toolkit is uses Immer library behind the scenes
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },

    // originalstate =  { items :["pizza"]};
    clearItems: (state) => {
      // console.log(state); // { items :["pizza"]}
      // state = [];
      // console.log(state); // [] it just made this local variable to empty but original state is still ["pizza"]

      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0; // originalstate = []
      return { items: [] }; // this new [] will be replace inside  originalstate = [];
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
