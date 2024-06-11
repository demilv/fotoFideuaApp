import { createAsyncThunk } from "@reduxjs/toolkit";
const startSearch = `https://api.unsplash.com/photos/random?count=30&client_id=${import.meta.env.VITE_API_KEY}`;

export const searchThunk = createAsyncThunk("search/getInitialSearch", async() =>{
    const request = await fetch(startSearch)
    const data = await request.json()
    return data
})