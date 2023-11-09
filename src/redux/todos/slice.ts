import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  title: string;
}

const initialState: ITodo[] = [];

const { actions, reducer } = createSlice({
  name: "@todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      const nextTodos = state.filter((todo) => todo.id !== action.payload.id);
      return nextTodos;
    },
  },
});

export const { addTodo, deleteTodo } = actions;
export default reducer;
