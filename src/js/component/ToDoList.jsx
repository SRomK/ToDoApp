import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDoList = () => {
	const [list, setList] = useState([]);
	const [tarea, setTarea] = useState('');

	const Submit = (e) => {
		e.preventDefault();
		setList([...list, newTask(tarea, false)]);
	};

	useEffect(() => {
		fetch('https://assets.breatheco.de/apis/fake/todos/'), {
			method: 'GET',
			headers: {
				'Content-type': "application/json"
			}
		}).then((response) => {
			response.json();
		}).then((res) => setList(res))
		.catch((err) => console.error(err));
	}, []);

	return (
		<>
		<form onSubmit={Submit}>
			<input onChange=((e) => setTarea type="text" />
		</form>
		</>
	);
};

export default ToDoList;

//las tasks se agregan cuando el usuario apreta enter
//delete icon shows when task is hover
//user can add how many tasks as he wants
//When there is no tasks the list should say "No tasks, add a task"
//There is no way to update a task, the user will have to delete and create again.
