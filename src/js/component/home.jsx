import React from "react";
import { Todolist } from "./Todolist";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Todolist/>	
			
				<p>Made by Evey Zeram: <a href="https://github.com/EveyZeram">Student of 4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
