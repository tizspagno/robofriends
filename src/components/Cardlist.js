import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
	
	return (
		<div className="row row-cols-1 row-cols-md-4 g-2 mb-5">
			{robots.map((robot, index) => {
				return (
					<div className="col" key={index}>
						<Card key={index} id={robot.id} name={robot.name} email={robot.email} />
					</div>
				);
			})}
		</div>
	);
};

export default Cardlist;
