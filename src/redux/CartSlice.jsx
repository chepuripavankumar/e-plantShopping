import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((x) => x.id === item.id);

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity += 1;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((x) => x.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((x) => x.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((x) => x.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((x) => x.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;