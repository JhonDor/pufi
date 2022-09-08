import{createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


export const productSlice = createSlice({
    name:"products",
    initialState:{
        list:[]
    },
    reducers:{

    }
});

export default productSlice.reducer;

export const fetchAllProducts = () =>() => {

}