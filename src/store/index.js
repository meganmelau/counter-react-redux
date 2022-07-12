import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { counter: 0 },
	reducers: {
		increase(state, action) {
			console.log("INCREASE");
			state.counter++;
		},
		decrease(state, action) {
			console.log("DEC");
			state.counter--;
		},
		addBy(state, action) {
			console.log("ADD");
			state.counter += action.payload;
		},
		reset(state, action) {
			console.log("reset");
			state.counter = 0;
		},
		addValue(state, action) {
			console.log("added value", action.payload);
			state.counter += Number(action.payload);
		},
	},
});

export const actions = counterSlice.actions;

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;
