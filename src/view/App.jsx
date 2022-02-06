import React, { useState } from "react";
import "../styles/index.css";
import TareaForm from "../js/component/TareaForm.jsx";
import Tarea from "../js/component/Tarea.jsx";
//include images into your bundle

//create your first component
const App = () => {
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
		//operador SPRED sirve para hacer una copia del array, en este caso de listaTareas y le decimos que añada la nueva lista que le hemos pasado
	};

	//console.log(listaTareas);
	return (
		<>
			<div className="App">
				<TareaForm nuevaTarea={nuevaTarea} />

				<div className="list">
					{listaTareas.map((e) => (
						<Tarea tarea={e} />
					))}
				</div>
			</div>
		</>
	);
};

export default App;
