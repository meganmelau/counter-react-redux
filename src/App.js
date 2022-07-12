import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const [value, setValue] = useState("");

	const increase = () => {
		dispatch(actions.increase());
	};
	const decrease = () => {
		dispatch(actions.decrease());
	};
	const addBy = () => {
		dispatch(actions.addBy(10));
	};

	const reset = () => {
		dispatch(actions.reset());
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		dispatch(actions.addValue(value));
	};

	const handleChangeName = (value) => {
		setValue(value);
	};

	return (
		<div>
			<h1> COUNTER APP</h1>
			<h2>{counter}</h2>
			<button onClick={increase}>INCREASE!!</button>
			<button onClick={decrease}>DECREASE</button>
			<button onClick={addBy}> Add By 10</button>
			<button onClick={reset}> Reset</button>
			<form onSubmit={handleSubmitForm}>
				<h2>Hooks with Redux for counter and user input</h2>
				<div>Enter the Value to the counter: </div>
				<input
					type="number"
					name="name"
					value={value}
					onChange={(e) => handleChangeName(e.target.value)}
					placeholder="Enter Value here"
				/>
				<div>
					<button
						type="submit"
						style={{
							backgroundColor: value ? "yellow" : "pink",
							color: value ? "green" : "black",
						}}
						disabled={!value}
					>
						ENTER
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
