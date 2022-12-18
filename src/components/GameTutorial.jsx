import React from 'react';
import DisposalMethod from './DisposalMethod';
import { disposalMethods } from '../data/data';
import InfoIcon from '../data/images/InfoIcon.jpg';

const GameTutorial = ({ closeModal }) => {
	return (
		<div className='w-5/12 mx-auto my-32 py-3 bg-secondary-color-dark rounded-3xl h-360'>
			<button
				onClick={closeModal}
				className='bg-gray-600 text-white p-3'>
				Close
			</button>
			<div className='rounded-3xl pl-8 pr-4 py-8 bg-secondary-color-light h-336'>
				<div className='overflow-y-scroll h-full px-5'>
					<div>
						<h2 className='flex'>
							{' '}
							<span className='w-3 mr-1'>
								<img
									src={InfoIcon}
									alt='Game information'
								/>
							</span>
							<span>How to Recarnate</span>
						</h2>
					</div>
					<p>
						Welcome to Recarnate&#33; Recarnate teaches is an interactive
						<br />
						e-learning platform that teaches you how different waste management
						method. Learn how to properly dispose an item by deciding it&#39;s
						fate...
					</p>
					<br />
					<p>... 💀death or 🌿recarnation&#33;</p>
					<br />
					<h4>Rules of the Game</h4>
					<p>
						You will have the chance to select a specific item or have one
						randomly generated for you. Your goal is to test your knowledge and
						find out if the item you selected can be recarnated into something
						new&#33; Pick an answer by selecting any of the waste disposal
						methods.
					</p>
					<div className='mt-5'>
						<h5>Waste Disposal Methods</h5>
						{disposalMethods.map((disposalMethod) => (
							<DisposalMethod
								key={disposalMethod.name}
								{...disposalMethod}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameTutorial;
