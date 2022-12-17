import React from 'react';
import DisposalMethod from '../components/DisposalMethod';
import { disposalMethods } from '../data/data';
import InfoIcon from '../data/images/InfoIcon.jpg';

const GameTutorial = () => {
	return (
		<div>
			<div>
				<div>
					{' '}
					<img
						src={InfoIcon}
						alt='Game information'
					/>
					<h3>How to Recarnate</h3>
				</div>
				<p>
					Welcome to Recarnate&#33; Recarnate teaches is an interactive
					e-learning platform that teaches you how different waste management
					method. Learn how to properly dispose an item by deciding it&#39;s
					fate...
				</p>
				<p>... 💀death or 🌿recarnation&#33;</p>
				<h4>Rules of the Game</h4>
				<p>
					You will have the chance to select a specific item or have one
					randomly generated for you. Your goal is to test your knowledge and
					find out if the item you selected can be recarnated into something
					new&#33; Pick an answer by selecting any of the waste disposal
					methods.
				</p>
				<div>
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
	);
};

export default GameTutorial;
