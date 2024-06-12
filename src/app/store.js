import { configureStore} from "@reduxjs/toolkit"
import { searchSlice } from "../features/search/searchSlice"
import { favouritesSlice } from "../features/favourites/favouritesSlice"
import { combineReducers } from 'redux'

const loadState = () => {
    try {
      const serializedState = localStorage.getItem("favourites");
      if (serializedState === null) {
        return undefined;
      }
      return { favourites: { data: JSON.parse(serializedState), status: 'idle', error: null } };
    } catch (err) {
      return undefined;
    }
  };

const rootReducers = combineReducers({
    search: searchSlice.reducer,
    favourites: favouritesSlice.reducer
  });

export const store = configureStore({
    reducer: rootReducers,
    preloadedState: loadState()    
})