import React from "react";
import "../../styles/index.css";

const Tarea = (props) => {
	return (
		<>
			<div>
				<div className="tarea">
					<span>{props.tarea}</span> <span>Editar</span>{" "}
					<span>Borrar</span>
				</div>
			</div>
		</>
	);
};

export default Tarea;
