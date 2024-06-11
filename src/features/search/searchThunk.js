import { createAsyncThunk } from "@reduxjs/toolkit";
const startSearch = `https://api.unsplash.com/photos/random?count=30&client_id=${import.meta.env.VITE_API_KEY}`;
//const querySearch = `https://api.unsplash.com/search/photos?${query}&count=8&client_id=${import.meta.env.VITE_API_KEY}`

export const searchThunk = createAsyncThunk("search/getInitialSearch", async() =>{
    const request = await fetch(startSearch)
    const data = await request.json()
    return data
})

export const searchQueryThunk= createAsyncThunk("search/getQuerySearch", async(query) =>{
    const request = await fetch(`https://api.unsplash.com/search/photos?count=8&query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const data = await request.json();
    return data.results;
})