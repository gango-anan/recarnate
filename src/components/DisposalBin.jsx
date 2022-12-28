import React from 'react';
import ToolTip from '../pages/ToolTip';

const DisposalBin = ({ content, direction, icon }) => {
	return (
		<ToolTip
			content={content}
			direction={direction}>
			<img
				src={icon}
				alt={content}
				className='max-w-full h-auto'
			/>
		</ToolTip>
	);
};

export default DisposalBin;
