import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
	return(
		<div className="card-group">
		{
			robots.map((robot, index) => {
				return(
					<Card 
					key={index} 
					id={robot.id} 
					name={robot.name} 
					email={robot.email} 
					/>
				);
			})
		}
		</div>
		);
}

export default Cardlist;
