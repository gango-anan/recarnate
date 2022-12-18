import React from 'react';

const DisposalMethod = ({ name, description, icon }) => {
	return (
		<div className='mt-5 flex'>
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div>
				<img
					src={icon}
					alt={`${name} icon`}
				/>
			</div>
		</div>
	);
};

export default DisposalMethod;
