import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Card = ({ id, name, email }) => {
	return (
		<div className="card text-white shadow rounded h-100">
			<img src={`https://robohash.org/${id}?200x200`} alt="robot" />
			<div className="card-body text-center">
				<h3>{name}</h3>
				<p className="card-text text-small">{email}</p>
			</div>
		</div>
	);
};

export default Card;
