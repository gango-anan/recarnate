import React from 'react';
import '../styles/CloseButton.css';

const GameCommandButton = ({
	closeModal,
	btnColor,
	icon,
	btnShadow,
	btnInfo,
}) => {
	return (
		<button
			onClick={closeModal}
			className={`${btnColor} rounded-full ${btnShadow} w-16 h-16 p-3 flex items-center justify-center`}>
			<img
				src={icon}
				alt={btnInfo}
				className='w-3/4 h-auto'
			/>
		</button>
	);
};

export default GameCommandButton;
