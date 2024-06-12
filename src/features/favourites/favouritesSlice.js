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
                localStorage.setItem('favourites', JSON.stringify(state.data));
            }
        },
        removeFavourites: (state, action) => {
            const removing = state.data.filter(item => item.id !== action.payload.id);
            state.data = removing;
            localStorage.setItem('favourites', JSON.stringify(state.data));
        },
        editFavourites: (state, action) => {
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index].alt = action.payload.alt;
                localStorage.setItem('favourites', JSON.stringify(state.data));
            }
        }
    },
})

export const {addFavourites, removeFavourites, editFavourites} = favouritesSlice.actions