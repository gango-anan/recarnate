import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameEndPromptModal.css';

const GameEndPromptModal = ({ isPromptOn, closeGameExitPrompt }) => {
	if (!isPromptOn) {
		return null;
	}
	return (
		<div className='w-screen h-screen bg-modal-background z-30 fixed left-0 top-0 flex flex-col justify-center items-center'>
			<div className='w-365 h-336 rounded-2xl'>
				<div className='flex flex-col gap-8 items-center game-prompt-container w-full h-full rounded-2xl pt-10 px-10'>
					<p className='recarnate-neutral-800 text-3xl font-bold text-center'>
						Are you sure you want to end the game?
					</p>
					<Link
						to='/'
						className='block end-game-btn text-recarnate-neutral-100 font-semibold text-2xl py-3 px-8 rounded-3xl'>
						Yes, End Game
					</Link>
					<button
						onClick={closeGameExitPrompt}
						className='block continue-game-btn text-recarnate-neutral-100 font-semibold text-2xl py-3 px-8 rounded-3xl'>
						No, Continue Game
					</button>
				</div>
			</div>
		</div>
	);
};

export default GameEndPromptModal;
