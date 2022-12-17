import React from 'react';

const DisposalMethod = ({ name, description, icon }) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<img
				src={icon}
				alt={`${name} icon`}
			/>
		</div>
	);
};

export default DisposalMethod;
