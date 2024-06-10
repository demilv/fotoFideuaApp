import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchThunk = createAsyncThunk("search/getInitialSearch", async() =>{
    const request = await fetch('')
    const data = await request.json()
    return data.data
})