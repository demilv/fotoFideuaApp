import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name:"favourites",
    initialState:{
        status:'idle',
        data:[],
        error:null
    },
    reducers: {
        addFavourites: (state, action) => {
            const exists = state.data.find(item => item.id === action.payload.id);
            if (!exists) {
                state.data.push({ ...action.payload });
            }
        },
        removeFavourites: (state, action) => {

        },
        editFavourites: (state, action) => {

        }
    },
})

export const {addFavourites} = favouritesSlice.actions