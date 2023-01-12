import React from 'react';
import Logo from '../data/images/Logo.svg';
import { Link } from 'react-router-dom';
import PlayButtonIcon from '../data/images/PlayButtonIcon.svg';
import GameTutorialModal from './GameTutorialModal';
import '../styles/LandingPage.css';
import InfoIcon from '../data/images/InfoIcon.svg';
import MzCarnate from '../data/images/bg_mz_carnate.svg';

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
		<div className='relative w-screen h-screen bg-recarnate-bg'>
			<GameTutorialModal
				status={status}
				closeModal={closeModal}
			/>
			<header className='flex justify-between items-center px-20 py-12'>
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
						<span className='how-to-play-icon rounded-full w-14 h-14 flex items-center justify-center'>
							{' '}
							<img
								src={InfoIcon}
								alt='Game tutorial'
								className=' h-auto'
							/>
						</span>
						<span className='ml-2 text-recarnate-neutral-800 font-bold text-xl'>
							How to play
						</span>
					</button>
				</div>
			</header>
			<main>
				<section className='pt-2 px-20 landing-page-description-area'>
					<h4 className='text-4xl font-bold tracking-wide text-recarnate-neutral-700'>
						Sorting Items for Disposal has Never Been More Fun
					</h4>
					<p className='text-recaarnate-neutral-700 text-xl font-medium mt-3 tracking-wide'>
						Recarnate teaches you about waste management methods through an
						interactive e&#45;learning platform where consumers decide an
						item&apos;s fate&#59; death or recarnation
					</p>
					<div className='mt-16'>
						<Link
							className='bg-recarnate-secondary-400  px-8 py-5 rounded-3xl play-button flex items-center max-w-max gap-4'
							to='/game-board'>
							<span>
								<img
									src={PlayButtonIcon}
									alt='play game'
								/>
							</span>
							<span className='text-recarnate-neutral-800 text-2xl font-bold'>
								Play Sorting Game
							</span>
						</Link>
					</div>
				</section>
				<div className='absolute right-20 top-36 mz-carnate'>
					<img
						src={MzCarnate}
						alt='Mz Carnate'
						className='w-full h-auto'
					/>
					<div className='w-full mz-carnate-bottom-line'></div>
				</div>
				<div className='absolute w-screen h-24 bg-landing-page-frame bg-contain left-0 bottom-20'></div>
			</main>
			<footer className='bg-recarnate-primary-400 w-full text-recarnate-neutral-200 font-medium text-lg fixed left-0 bottom-0 flex justify-between items-center px-20 py-5'>
				<nav className='flex justify-between gap-10'>
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
