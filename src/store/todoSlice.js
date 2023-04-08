import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: new Date().toLocaleString(),
				text: action.payload,
				completed: false,
			});
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleTodoCompleted(state, action) {
			const toggleItem = state.todos.find((todo) => todo.id === action.payload);
			toggleItem.completed = !toggleItem.completed;
		},
	},
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
