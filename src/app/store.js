import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../components/ToDo/toDoSlice'

export const store = configureStore({
    reducer: {
        todo_items: toDoReducer,
    }
})