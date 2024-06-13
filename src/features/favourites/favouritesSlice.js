import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const startState = localStorage.getItem("favourites");
        if (startState === null) {
            return { data: [], status: 'idle', error: null, filteredData: [] };
        }
        return { data: JSON.parse(startState), status: 'idle', error: null, filteredData: [] };
    } catch (err) {
        return { data: [], status: 'idle', error: null, filteredData: [] };
    }
};

const orderChoice = {
    width: (a, b) => a.width - b.width,
    created: (a, b) => new Date(a.created) - new Date(b.created),
    height: (a, b) => a.height - b.height,
    likes: (a, b) => a.likes - b.likes,
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
        orderTypeFavourites: (state, action) => {
            state.orderType = action.payload.orderType;
            let copiaToSort = [...(state.filteredData.length > 0 ? state.filteredData : state.data)];
            if (state.orderType !== "") {
                copiaToSort.sort(orderChoice[state.orderType]);
                if (state.filteredData.length > 0) {
                    state.filteredData = copiaToSort;
                } else {
                    state.data = copiaToSort;
                }
            }            
            if (state.orderType === "") {
                if (state.filteredData.length > 0) {
                    state.filteredData = [...state.data]; 
                } else {
                    state.data = loadState().data; 
                }
            }
        },
    },
});

export const { addFavourites, removeFavourites, editFavourites, searchFavourites, orderTypeFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
