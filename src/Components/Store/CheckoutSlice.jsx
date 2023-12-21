import { createSlice } from "@reduxjs/toolkit";


// The initial state of the cart is an empty array


const initialState = [];


// Create a slice for the cart feature


const cartSlice = createSlice({


name: 'favs',


initialState,


reducers: {


// Add an item to the cart


addFavourite(state, action) {

state.push(action.payload);


},

// Remove an item from the cart

removeFavourite(state, action){
    return state.filter(item => item.id !== action.payload)
},

}


});


// Extract the 'add' action from the cartSlice
//And
// Extract the 'remove' action from the cartSlice


export const { addFavourite, removeFavourite } = cartSlice.actions;


// Export the cartSlice reducer


export default cartSlice.reducer;