import React from 'react';
import LogoInitial from '../data/images/LogoInitial.svg';
import '../styles/GameLoading.css';

const GameLoading = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-end items-center bg-recarnate-bg'>
			<div className='logo-animation'>
				<img
					src={LogoInitial}
					alt='Logo'
				/>
			</div>
			<div className='logo-hidder flex flex-col justify-start items-center h-1/2 w-full bg-recarnate-bg z-10'>
				<div className='first-text opacity-1 inline-block overflow-hidden whitespace-nowrap'>
					<span className='text-4xl font-bold text-recarnate-neutral-800'>
						The fate of your trash rests in your hands
					</span>
				</div>
				<div className='second-text opacity-0 inline-block overflow-hidden whitespace-nowrap'>
					<span className='text-4xl font-bold text-recarnate-primary-font-500'>
						No, seriously... It does
					</span>
				</div>
				<div className='third-text opacity-0 inline-block overflow-hidden whitespace-nowrap'>
					<span className='text-4xl font-bold text-recarnate-secondary-font-500'>
						What will it be?
					</span>
				</div>
				<div className='fourth-text opacity-0 inline-block overflow-hidden whitespace-nowrap'>
					<span className='text-4xl font-bold text-recarnate-neutral-800'>
						Death 💀 or recarnation🌿?
					</span>
				</div>
			</div>
		</div>
	);
};

export default GameLoading;
