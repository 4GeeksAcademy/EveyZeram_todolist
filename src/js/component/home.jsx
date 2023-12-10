import React from "react";
import { TodoListFetch } from "./TodoListFetch";
// import { Todolist } from "./Todoslist.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <Todolist/>	 */}
			<TodoListFetch />

			<p>Made by Evey Zeram: <a href="https://github.com/EveyZeram">Student of 4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
