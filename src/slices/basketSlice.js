import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [
        ...state.items,
        action.payload
      ]
    },
    removeFromBasket: (state, action) => {
      //Finding the idx where id matches the item
      const idx = state.items.findIndex((basItem) => basItem.id === action.payload.id)
      
      //creating a new basket
      let newBasket = [...state.items]

      if(idx >= 0){
        //if item found cutting the newBasket by 1 from that idx
        newBasket.splice(idx,1)
      }else{
        console.warn(`Cannot remove product(id: ${action.payload.id} ) as its not in the basket`)
      }

      state.items = newBasket;

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((tot,itm) => tot+ (itm.price*78), 0)

export default basketSlice.reducer;
