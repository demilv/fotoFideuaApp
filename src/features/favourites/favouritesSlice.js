import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("favourites");
        if (serializedState === null) {
            return { data: [], status: 'idle', error: null, filteredData: [] };
        }
        return { data: JSON.parse(serializedState), status: 'idle', error: null, filteredData: [] };
    } catch (err) {
        return { data: [], status: 'idle', error: null, filteredData: [] };
    }
};

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState: loadState(),
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
        },
        searchFavourites: (state, action) => {
            const query = action.payload.toLowerCase();
            if (query === '') {
                state.filteredData = state.data;
            } else {
                state.filteredData = state.data.filter(item => item.alt.toLowerCase().includes(query));
            }
        },
    },
});

export const { addFavourites, removeFavourites, editFavourites, searchFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
