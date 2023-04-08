import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../store/todoSlice";

export const TodoItem = ({ id, completed, text }) => {
	const dispatch = useDispatch();
	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodoCompleted(id))}
			/>
			<span> {text} </span>
			<span onClick={() => dispatch(removeTodo(id))} className={"delete"}>
				&times;
			</span>
		</li>
	);
};
