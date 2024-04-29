import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}categories`)
        return res
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})

const initialState = {
    list: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, {payload}) => {
            state.isLoading = true
        });
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.list = payload
        })
        builder.addCase(getCategories.rejected, (state, {payload}) => {
            state.isLoading = false
        });
    }
})

export default categoriesSlice.reducer