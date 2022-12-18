import React from 'react';
import Logo from '../data/images/Logo.svg';
import HowToPlayPrompt from '../data/images/HowToPlayPrompt.png';
import { Link } from 'react-router-dom';
import PlayButtonIcon from '../data/images/PlayButtonIcon.svg';

const LandingPage = () => {
	return (
		<div className='relative w-screen h-screen bg-landing-page bg-no-repeat bg-cover bg-center'>
			<header className='flex justify-between items-center px-12 py-5'>
				<div className='h-12 w-48'>
					<img
						src={Logo}
						alt='Logo'
						className='w-full h-auto'
					/>
				</div>
				<div className='ml-4'>
					<Link
						to='/game-tutorial'
						className='flex items-center'>
						<span className='w-8 h-8'>
							{' '}
							<img
								src={HowToPlayPrompt}
								alt='Game tutorial'
								className='w-full h-auto'
							/>
						</span>
						<span className='ml-2 text-white text-sm'>How to play</span>
					</Link>
				</div>
			</header>
			<main className='mt-10'>
				<section className='px-12 custom-width'>
					<h4 className='landing-page-heading text-4xl text-white'>
						Sorting Items for Disposal has Never Been More Fun
					</h4>
					<p className='landing-description text-white text-base mt-3'>
						Recarnate teaches you about waste management methods through an
						interactive e&#45;learning platform where consumers decide an
						item&apos;s fate&#59; death or recarnation
					</p>
					<div className='mt-16'>
						<Link
							to='/preloader'
							type='button'
							className='bg-secondary-color-light text-play-btn-font-color text-lg font-bold px-12 py-3 play-button flex items-center max-w-max gap-2'>
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
			<footer className='bg-footer-bg-color w-full fixed left-0 bottom-0 text-white flex justify-between items-center px-12 py-5 text-sm'>
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
