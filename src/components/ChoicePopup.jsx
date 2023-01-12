import React from 'react';
import '../styles/ChoicePopup.css';
import CorrectChoiceIcon from '../data/images/SuccessIcon.svg';
import IncorrectChoiceIcon from '../data/images/CancelIcon.svg';

export const ChoicePopup = ({
	dropChoice,
	selectedItem,
	closeChoiceModal,
	selectedDispoBin,
}) => {
	const { name, itemDisposalMethods } = selectedItem;
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
		<div className='w-2/3 rounded-3xl drop-choice-popup-container'>
			<div
				className={`${popupDetailsContainerBg} w-full py-8 relative rounded-3xl h-360`}>
				<div className='w-full flex justify-between px-10'>
					<div className='flex justify-center items-center gap-6'>
						<div
							className={`status-indicator ${statusbtnColor} ${statusbtnShadow} rounded-full flex items-center justify-center p-4`}>
							<span
								style={{
									backgroundImage: `url(${statusIcon})`,
									backgroundSize: 'contain',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
								className='w-9 h-9'>
								<img
									src={statusIcon}
									alt={choiceTitle}
									style={{ display: 'none' }}
								/>
							</span>
						</div>
						<h2 className='text-3xl text-recarnate-neutral-800 font-bold'>
							{choiceTitle}
						</h2>
					</div>
					<div>
						<button
							className={`cta-button ${ctaButtonStyles} px-8 py-3 text-recarnate-neutral-100 text-lg font-semibold tracking-widest rounded-3xl`}
							onClick={closeChoiceModal}>
							{btnName}
						</button>
					</div>
				</div>
				<div
					className={`details-container mx-auto h-4/5 px-14 overflow-y-scroll ${scrollBarDetails} mt-2`}>
					<div>
						{disposalMethodChoice ? (
							<>
								<h3 className='recarnate-neutral-800 text-xl'>
									{itemName} recarnates 🌿 to:
								</h3>
								<div className='flex gap-3 my-4'>
									{itemDisposalMethods[selectedDispoBin].recarnatesTo.map(
										(item) => (
											<p
												className='text-recarnate-neutral-800 text-sm px-4 py-1 rounded-3xl recarnate-items'
												key={item}>
												{item}
											</p>
										)
									)}
								</div>
							</>
						) : (
							<div>
								<h3 className='recarnate-neutral-800 text-xl'>
									Oops, that&#39;s a wrong way to dispose of this item.
								</h3>
							</div>
						)}
					</div>
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
