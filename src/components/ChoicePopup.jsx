import React from 'react';
import '../styles/ChoicePopup.css';
import CorrectChoiceIcon from '../data/images/SuccessIcon.svg';
import IncorrectChoiceIcon from '../data/images/CancelIcon.svg';

export const ChoicePopup = ({ dropChoice, selectedItem, closeChoiceModal }) => {
	const { name, recarnatesTo } = selectedItem;
	const disposalMethodChoice = dropChoice;
	const itemName = name;
	const statusbtnColor = disposalMethodChoice
		? 'bg-recarnate-primary-300'
		: 'bg-recarnate-failure';
	const statusbtnShadow = disposalMethodChoice
		? 'correct-status-indicator-shadow'
		: 'incorrect-status-indicator-shadow';
	const scrollBarDetails = disposalMethodChoice
		? 'correct-scrollbar'
		: 'incorrect-scrollbar';
	const btnName = disposalMethodChoice ? 'Next' : 'Try again';
	const choiceTitle = disposalMethodChoice ? 'Correct!' : 'Incorrect!';

	const ctaButtonStyles = disposalMethodChoice
		? 'success-call-to-action-button'
		: 'failure-call-to-action-button';

	const statusIcon = disposalMethodChoice
		? CorrectChoiceIcon
		: IncorrectChoiceIcon;
	const popupDetailsContainerBg = disposalMethodChoice
		? 'correct-popup-details'
		: 'incorrect-popup-details';

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
					className={`absolute cta-button ${ctaButtonStyles} px-8 py-3 text-recarnate-neutral-100 text-lg font-semibold tracking-widest`}
					onClick={closeChoiceModal}>
					{btnName}
				</button>
				<div
					className={`w-4/5 mx-auto h-full px-8 overflow-y-scroll ${scrollBarDetails}`}>
					<h2 className='text-3xl text-recarnate-neutral-800 font-bold'>
						{choiceTitle}
					</h2>
					{disposalMethodChoice ? (
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
								Oops, that&#39;s a wrong way to dispose of this item.
							</h3>
						</div>
					)}

					<p className='recarnate-neutral-800 mt-5 text-justify'>
						As a rule, harzadous and electronic wate shouldn&#39;t be disposed
						of along with household waste. H&E waste may contain haradous
						substances which, if exposed, could cause a serious detrimental
						effect on the environment, wildlife, and human health. If you&#39;d
						like to disposed electrical equipment for recycling, we recommend
						that you take it to am authorised recycling collection point run by
						your local authority.
					</p>
					<h3 className='text-recarnate-neutral-800 text-lg font-bold tracking-wide my-2'>
						How to dispose
					</h3>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it&#39;s content when they arrive.
					</p>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it&#39;s content when they arrive.
					</p>
					<p className='text-recarnate-neutral-800 text-justify'>
						Depending on where you are around the world, you can take it to a
						special recycling center. If such centres are unavailable, keep your
						H&E waste in a separate trash bag and inform your waste disposal
						company of it&#39;s content when they arrive.
					</p>
				</div>
			</div>
		</div>
	);
};
