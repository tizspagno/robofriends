import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import ErrorBoundry from "../components/ErrorBoundry";
// import { robots } from "../robots"; // robots.js is not not exporting default, so we have to do destructuring
import "./App.css"; 
import Scroll from "../components/Scroll"; 

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  response.json())
			.then(users => this.setState({robots: users}) )
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ? 
		<h1>Loading</h1> :
		(
			<>
				<div id="header" className="container text-center py-5">
					<h1 className="mb-4 display-5">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
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
}

export default App;
