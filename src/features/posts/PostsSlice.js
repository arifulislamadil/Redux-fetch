import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    posts: [],
    loading: false,
    error: '',
    users: [],
    value: 0,
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const response = await axios.get(POSTS_URL)
    return response.data
})


const postsSlice = createSlice({
    name: "posts",
    nameCount: "counter",
    userName: "user",
    initialState,
    reducers:{
        increment:(state=>{
            state.value+=1
        }),
        decrement:(state=>{
            state.value-=1
        })
    },


    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload
            state.error = ''
            
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {increment,decrement} = postsSlice.actions;

export default postsSlice.reducer