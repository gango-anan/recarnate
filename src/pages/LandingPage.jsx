import React from 'react';
import Logo from '../data/images/Logo.svg';
import HowToPlayPrompt from '../data/images/HowToPlayPrompt.png';
import { Link } from 'react-router-dom';
import PlayButtonIcon from '../data/images/PlayButtonIcon.svg';
import GameTutorialModal from './GameTutorialModal';

const LandingPage = () => {
	const [status, setStatus] = React.useState({
		showModal: false,
	});
	const openModal = () => {
		setStatus({ showModal: true });
	};
	const closeModal = () => {
		setStatus({ showModal: false });
	};
	return (
		<div className='relative w-screen h-screen bg-recarnate-bg pb-40'>
			<GameTutorialModal
				status={status}
				closeModal={closeModal}
			/>
			<header className='flex justify-between items-center px-12 py-5'>
				<div className='w-48'>
					<img
						src={Logo}
						alt='Logo'
						className='w-full h-auto'
					/>
				</div>
				<div>
					<button
						className='flex items-center'
						onClick={openModal}>
						<span className='w-8'>
							{' '}
							<img
								src={HowToPlayPrompt}
								alt='Game tutorial'
								className='w-full h-auto'
							/>
						</span>
						<span className='ml-2 text-recarnate-neutral-800 font-bold text-xl'>
							How to play
						</span>
					</button>
				</div>
			</header>
			<main className='h-full bg-landing-page bg-contain bg-no-repeat bg-bottom'>
				<section className='pt-10 px-12 custom-width'>
					<h4 className='landing-page-heading text-4xl font-bold text-recarnate-neutral-700'>
						Sorting Items for Disposal has Never Been More Fun
					</h4>
					<p className='landing-description text-recaarnate-neutral-700 text-xl font-medium mt-3'>
						Recarnate teaches you about waste management methods through an
						interactive e&#45;learning platform where consumers decide an
						item&apos;s fate&#59; death or recarnation
					</p>
					<div className='mt-16'>
						<Link
							className='bg-recarnate-secondary-400 text-recarnate-neutral-800 text-lg font-bold px-12 py-3 play-button flex items-center max-w-max gap-2'
							to='/game-board'>
							<span>
								<img
									src={PlayButtonIcon}
									alt='play game'
								/>
							</span>
							<span>Play Sorting Game</span>
						</Link>
					</div>
				</section>
			</main>
			<footer className='bg-recarnate-primary-400 w-full text-recarnate-neutral-200 font-medium text-lg fixed left-0 bottom-0 flex justify-between items-center px-12 py-5'>
				<nav className='flex justify-between gap-10'>
					<p>
						<Link to='/info'>Info Bank</Link>
					</p>
					<p>
						<Link to='/about'>About Recarnate</Link>
					</p>
					<p>
						<Link to='/team'>Team</Link>
					</p>
				</nav>
				<div>
					<p>&#169;Copyright 2022. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
