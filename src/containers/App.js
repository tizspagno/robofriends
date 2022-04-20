import React, { useState, useEffect } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import ErrorBoundry from "../components/ErrorBoundry";
// import { robots } from "../robots"; // robots.js is not not exporting default, so we have to do destructuring
import "./App.css"; 
import Scroll from "../components/Scroll"; 

function App () {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  response.json())
			.then(users => setRobots( users) );
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value );
	};

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});
	
	return !robots.length ? 
	<h1>Loading</h1> :
	(
		<>
			<div id="header" className="container text-center py-5">
				<h1 className="mb-4 display-5">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
			</div>

			
			<Scroll>
				<ErrorBoundry>
					<div className="container">
						<Cardlist robots={filteredRobots} />
					</div>
				</ErrorBoundry>
			</Scroll>
		</>
	);

}

export default App;
