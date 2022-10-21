
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from './../apis/axiosinstance';

let initialState={
    username:'',
    alldata:[],
    editable:false,
    deleted:false,
    update:0
}

export let fetch=createAsyncThunk('/alldat',async()=>{
   let {data}=await AxiosInstance.get('/posts')
   return data
})
export let create=createAsyncThunk('/create',async(user)=>{
    let payload={username:user}
    let {data}=await AxiosInstance.post('/posts',payload)
    return data
})
export let deleted=createAsyncThunk('/deleted',async(id)=>{
    let {data}=await AxiosInstance.delete(`posts/${id}`)
    return data
})
export let update=createAsyncThunk('/update',async(user)=>{
    let {data}=await AxiosInstance.put(`/posts/${user.id}`,user)
    return data
})


let slice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        edituser:(state,action)=>{
            state.editable=true
        }
    },
    extraReducers:{
        [fetch.fulfilled]:(state,action)=>{
            state.alldata=action.payload
        },
        [create.fulfilled]:(state,action)=>{   
            state.username=action.payload.username
        },
        [deleted.fulfilled]:(state,action)=>{
            state.deleted=!state.deleted          
         },
         [update.fulfilled]:(state,action)=>{
            state.editable=false
         }
    }
})


export default slice.reducer
export let {edituser}=slice.actions
