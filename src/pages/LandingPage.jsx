import React from 'react';
import Logo from '../data/images/Logo.svg';
import HowToPlayPrompt from '../data/images/HowToPlayPrompt.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div className='relative w-screen h-screen bg-landing-page bg-no-repeat bg-cover bg-center'>
			<header>
				<div>
					<img
						src={Logo}
						alt='Logo'
					/>
				</div>
				<div>
					<div className='flex items-center'>
						<img
							src={HowToPlayPrompt}
							alt='Game tutorial'
							className='w-9 h-9'
						/>
						<span className='ml-1'>How to play</span>
					</div>
				</div>
			</header>
			<main>
				<section>
					<h4 className='landing-page-heading'>
						Sorting Items for Disposal has Never Been More Fun
					</h4>
					<p className='landing-description'>
						Recarnate teaches you about waste management methods through an
						interactive e&#45;learning platform where consumers decide an
						item&apos;s fate&#59; death or recarnation
					</p>
					<div>
						<button>Play Sorting Game</button>
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
