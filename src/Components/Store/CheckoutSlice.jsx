import { createSlice } from "@reduxjs/toolkit";


// The initial state of the cart is an empty array


const initialState = [];


// Create a slice for the cart feature


const cartSlice = createSlice({


name: 'checkout',


initialState,


reducers: {


// Add an item to the cart


add(state, action) {

state.push(action.payload);


},

// Remove an item from the cart

remove(state, action){
    return state.filter(item => item.id !== action.payload)
},

}


});


// Extract the 'add' action from the cartSlice
//And
// Extract the 'remove' action from the cartSlice


export const { add, remove } = cartSlice.actions;


// Export the cartSlice reducer


export default cartSlice.reducer;