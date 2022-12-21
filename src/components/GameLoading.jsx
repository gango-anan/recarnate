import React from 'react';
import LogoInitial from '../data/images/LogoInitial.svg';

const GameLoading = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-end items-center'>
			<div className='logo-animation'>
				<img
					src={LogoInitial}
					alt='Logo'
				/>
			</div>
			<div className='logo-hidder flex flex-col justify-start items-center h-1/2 w-full bg-white z-10'>
				<div className='first-text'>
					<span>The fate of your trash rests in your hands</span>
				</div>
				<div className='second-text'>
					<span>No, seriously... It does</span>
				</div>
				<div className='third-text'>
					<span>What will it be?</span>
				</div>
				<div className='fourth-text'>
					<span>Death 💀 or recarnation🌿?</span>
				</div>
			</div>
		</div>
	);
};

export default GameLoading;
