import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/src/redux/todos/slice";
import addReducer from "@/src/redux/app/slice";

export const store = configureStore({
  reducer: {
    app: addReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
