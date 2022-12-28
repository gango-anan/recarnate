import React from 'react';
import '../styles/GameCommandButton.css';

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
			className={`${btnColor} rounded-full ${btnShadow} w-14 h-14 flex items-center justify-center`}>
			<img
				src={icon}
				alt={btnInfo}
				className='w-100 h-auto'
			/>
		</button>
	);
};

export default GameCommandButton;
