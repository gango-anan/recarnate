import React from 'react';
import GameTutorial from '../components/GameTutorial';

const GameTutorialModal = ({ status, closeModal }) => {
	const { showModal } = status;
	if (!showModal) {
		return null;
	}
	return (
		<div className='w-screen h-screen bg-modal-background z-30 fixed left-0 top-0'>
			<GameTutorial closeModal={closeModal} />
		</div>
	);
};

export default GameTutorialModal;
