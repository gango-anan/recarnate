import React from 'react';
import ToolTip from '../pages/ToolTip';

const DisposalBin = ({ content, direction, icon, index }) => {
	return (
		<ToolTip
			content={content}
			direction={direction}>
			<img
				src={icon}
				alt={content}
				className='max-w-full h-auto'
				data-bin-index={`${index}`}
			/>
		</ToolTip>
	);
};

export default DisposalBin;
