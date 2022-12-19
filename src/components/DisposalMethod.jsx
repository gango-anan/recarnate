import React from 'react';

const DisposalMethod = ({ name, description, icon }) => {
	return (
		<div className='mt-5 flex'>
			<div className='w-3/4'>
				<h6 className='text-recarnate-neutral-800 font-bold game-tutorial-title'>
					{name}
				</h6>
				<p className='text-recarnate-neutral-800 not-italic text-base text-justify'>
					{description}
				</p>
			</div>
			<div className='ml-5 w-1/4 flex items-center justify-center'>
				<img
					src={icon}
					alt={`${name} icon`}
					className='h-32 w-32'
				/>
			</div>
		</div>
	);
};

export default DisposalMethod;
