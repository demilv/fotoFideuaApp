import { createSlice } from "@reduxjs/toolkit";
import { searchThunk, searchQueryThunk } from "./searchThunk";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        status:'idle',
        data:[],
        error:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchThunk.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(searchThunk.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.data = action.payload;
            })
            .addCase(searchThunk.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message;
            })
            .addCase(searchQueryThunk.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(searchQueryThunk.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.data = action.payload;
            })  
            .addCase(searchQueryThunk.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message;
            })           
    }
    
})

export const searchDataSelect = (state) => state.search.data
export const searchStatusSelect = (state) => state.search.status
export const searchErrorSelect = (state) => state.search.error