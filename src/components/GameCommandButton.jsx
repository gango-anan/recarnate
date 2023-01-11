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
			className={`${btnColor} rounded-full ${btnShadow} flex items-center justify-center p-4`}>
			<span
				className='w-8 h-8'
				style={{
					backgroundImage: `url(${icon})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<img
					src={icon}
					alt={btnInfo}
					style={{ display: 'none' }}
				/>
			</span>
		</button>
	);
};

export default GameCommandButton;
