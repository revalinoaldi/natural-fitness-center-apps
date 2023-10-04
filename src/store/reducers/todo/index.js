import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        data: {}
    },
    reducers: {
        getTodo: state => state.data,
        setTodo: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {getTodo, setTodo} = todoSlice.actions

export default todoSlice.reducer