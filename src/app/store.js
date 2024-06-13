import { configureStore} from "@reduxjs/toolkit"
import { searchSlice } from "../features/search/searchSlice"
import { favouritesSlice } from "../features/favourites/favouritesSlice"
import { combineReducers } from 'redux'


const rootReducers = combineReducers({
    search: searchSlice.reducer,
    favourites: favouritesSlice.reducer
  });

export const store = configureStore({
    reducer: rootReducers,
})