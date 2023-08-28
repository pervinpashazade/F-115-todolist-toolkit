import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [{
        id: 1,
        text: "Go to Div Academy",
        isCompleted: false,
    }, {
        id: 2,
        text: "Learn HTML, CSS",
        isCompleted: false,
    }]
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.list = [...state.list, action.payload]
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        completeItem: (state, action) => {
            console.log("id", action.payload);
            console.log(state.list.find(x => x.id === action.payload));
            const selectedItem = state.list.find(item => item.id === action.payload)
            selectedItem.isCompleted = true
        }
    },
    extraReducers: {}
})

export const {
    addToList,
    removeItem,
    completeItem
} = toDoSlice.actions

export default toDoSlice.reducer