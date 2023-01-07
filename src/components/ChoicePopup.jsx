import React from 'react';
import '../styles/ChoicePopup.css';
import CorrectChoiceIcon from '../data/images/SuccessIcon.svg';
import IncorrectChoiceIcon from '../data/images/CancelIcon.svg';

export const ChoicePopup = () => {
	const recarnatesTo = [
		'Paper towels',
		'Tissues',
		'Printing paper',
		'Writing paper',
	];
	const statusbtnColor = 'bg-recarnate-failure';
	const statusbtnShadow = 'incorrect-status-indicator-shadow';
	const scrollBarDetails = 'incorrect-scrollbar';
	const btnName = 'Try again';
	const choiceTitle = 'Incorrect!';
	const itemName = 'Lithium battery';
	const ctaButtonStyles = 'failure-success-call-to-action-button';
	const successActive = false;
	const statusIcon = IncorrectChoiceIcon;
	const popupDetailsContainerBg = 'incorrect-popup-details';

	return (
		<div className='w-2/3 rounded-3xl'>
			<div
				className={`${popupDetailsContainerBg} w-full py-8 relative rounded-3xl h-360`}>
				<div
					className={`absolute status-indicator ${statusbtnColor} rounded-full ${statusbtnShadow} p-3`}>
					<span
						style={{
							backgroundImage: `url(${statusIcon})`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
						className='w-8 h-8 block'>
						<img
							src={statusIcon}
							alt={choiceTitle}
							style={{ display: 'none' }}
						/>
					</span>
				</div>
				<button
					className={`absolute cta-button ${ctaButtonStyles} px-10 py-2 text-recarnate-neutral-100 text-lg font-semibold tracking-widest`}>
					{btnName}
				</button>
				<div
					className={`w-4/5 mx-auto h-full px-8 overflow-y-scroll ${scrollBarDetails}`}>
					<h2 className='text-3xl text-recarnate-neutral-800 font-bold'>
						{choiceTitle}
					</h2>
					{successActive ? (
						<>
							<h3 className='recarnate-neutral-800 text-xl'>
								{itemName} recarnates 🌿 to:
							</h3>
							<div className='flex gap-3 my-4'>
								{recarnatesTo.map((item) => (
									<p
										className='text-recarnate-neutral-800 text-sm px-4 py-1 rounded-3xl recarnate-items'
										key={item}>
										{item}
									</p>
								))}
							</div>
						</>
					) : (
						<div>
							<h3 className='recarnate-neutral-800 text-xl'>
								Oops, that's a wrong way to dispose of this item.
							</h3>
						</div>
					)}

					<p className='recarnate-neutral-800 mt-5 text-justify'>
						As a rule, harzadous and electronic wate shouldn’t be disposed of
						along with household waste. H&E waste may contain haradous
						substances which, if exposed, could cause a serious detrimental
						effect on the environment, wildlife, and human health. If you’d like
						to disposed electrical equipment for recycling, we recommend that
						you take it to am authorised recycling collection point run by your
						local authority.
					</p>
					<h3 className='text-recarnate-neutral-800 text-lg font-bold tracking-wide my-2'>
						How to dispose
					</h3>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it’s content when they arrive.
					</p>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it’s content when they arrive.
					</p>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it’s content when they arrive.
					</p>
				</div>
			</div>
		</div>
	);
};
