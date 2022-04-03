import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return { todoItems: [...state.todoItems, action.payload] };
    },
    removeItem: (state, action) => {
      return {
        todoItems: state.todoItems.filter((_v, i) => i !== action.payload),
      };
    },
    clearTodo: (state) => {
      return {todoItems: []};
    },
  },
});

export const { addItem, removeItem, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
