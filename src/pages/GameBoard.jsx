import React, { useState, useRef } from 'react';
import DisposalBin from '../components/DisposalBin';
import GameCommandButton from '../components/GameCommandButton';
import {
	disposalMethods,
	gameButtonDetails,
	disposalItems,
} from '../data/data';
import FlowerIcon from '../data/images/FlowerIcon.svg';
import Logo from '../data/images/Logo.svg';
import Road from '../data/images/Road.svg';
import TreeIcon from '../data/images/TreeIcon.svg';
import '../styles/GameBoard.css';
import ItemsCarousel from './ItemsCarousel';
import ToolTip from './ToolTip';
import DragChoicePopupModal from './DragChoicePopupModal';
import GameTutorialModal from './GameTutorialModal';
import GameEndPromptModal from './GameEndPromptModal';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, failureBtn, searchBtn } =
		gameButtonDetails;
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [popupStatus, setPopupStatus] = useState(false);
	const [dropChoice, updateDropChoice] = useState(null);
	const [status, setStatus] = useState({
		showModal: false,
	});
	const [isPromptOn, updateIsPromptOn] = useState(false);
	const dragItem = useRef(null);
	const dragOverItem = useRef(null);

	const openModal = () => {
		setStatus({ showModal: true });
	};
	const closeModal = () => {
		setStatus({ showModal: false });
	};
	const randomIndexInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	const generateRandomItem = () => {
		const itemIndex = randomIndexInRange(0, disposalItems.length - 1);
		return disposalItems[itemIndex];
	};
	const openChoiceModal = () => {
		setPopupStatus(true);
	};
	const closeChoiceModal = () => {
		if (dropChoice) {
			setSelectedItem(generateRandomItem());
		}
		setPopupStatus(false);
	};
	const openCarousel = () => {
		setIsCarouselOpen(true);
	};
	const closeCarousel = () => {
		setIsCarouselOpen(false);
	};
	const saveSelectedItem = (item) => {
		setSelectedItem(item);
	};
	const dragStart = (e, position) => {
		dragItem.current = position;
	};
	const dragEnter = (e, position) => {
		e.preventDefault();
		dragOverItem.current = position;
	};
	const handleRandomization = () => {
		setSelectedItem(generateRandomItem());
	};
	const openGameExitPrompt = () => {
		updateIsPromptOn(true);
	};
	const closeGameExitPrompt = () => {
		updateIsPromptOn(false);
	};
	const drop = (e) => {
		const sourceIndex = dragItem.current;
		const destinationIndex = dragOverItem.current;
		if (destinationIndex === null || sourceIndex === destinationIndex) {
			return;
		}
		const dispoMethodSource = selectedItem.disposalMethod;
		const dispoMethodDestination = disposalMethods[destinationIndex].name;
		const isCorrectDispoMethod = dispoMethodSource === dispoMethodDestination;
		updateDropChoice(isCorrectDispoMethod);
		openChoiceModal();
		dragItem.current = null;
		dragOverItem.current = null;
	};

	return (
		<div className='game-container w-screen h-screen relative bg-game-board bg-center bg-cover bg-no-repeat '>
			<DragChoicePopupModal
				popupStatus={popupStatus}
				closeChoiceModal={closeChoiceModal}
				dropChoice={dropChoice}
				selectedItem={selectedItem}
			/>
			<GameTutorialModal
				status={status}
				closeModal={closeModal}
			/>
			<GameEndPromptModal
				closeGameExitPrompt={closeGameExitPrompt}
				isPromptOn={isPromptOn}
			/>
			<div className='w-full absolute flex justify-between px-12 py-5'>
				<div className='h-12 w-48'>
					{!isCarouselOpen && (
						<img
							src={Logo}
							alt='Logo'
							className='w-full h-auto'
						/>
					)}
				</div>
				<div className='flex justify-end gap-10'>
					{!isCarouselOpen && (
						<ToolTip
							content='Search'
							direction='bottom'>
							<span>
								<GameCommandButton
									{...searchBtn}
									closeModal={openCarousel}
								/>
							</span>
						</ToolTip>
					)}
					<ToolTip
						content='Game Info'
						direction='bottom'>
						<span>
							<GameCommandButton
								{...gameInfoBtn}
								closeModal={openModal}
							/>
						</span>
					</ToolTip>
					<ToolTip
						content='Random Item'
						direction='bottom'>
						<span>
							<GameCommandButton
								{...randomizeBtn}
								closeModal={handleRandomization}
							/>
						</span>
					</ToolTip>
					<ToolTip
						content='Sound'
						direction='bottom'>
						<span>
							<GameCommandButton {...soundBtn} />
						</span>
					</ToolTip>
					<ToolTip
						content='Cancel Game'
						direction='bottom'>
						<span>
							<GameCommandButton
								{...failureBtn}
								closeModal={openGameExitPrompt}
							/>
						</span>
					</ToolTip>
				</div>
			</div>
			<div className='items-carousel-container w-1/2 absolute'>
				{isCarouselOpen && (
					<ItemsCarousel
						closeCarousel={closeCarousel}
						saveSelectedItem={saveSelectedItem}
					/>
				)}
			</div>
			<div className='w-full absolute road'>
				<img
					src={Road}
					alt='Road'
					className='w-screen'
				/>
			</div>
			<div>
				{selectedItem && !isCarouselOpen && (
					<div
						className='absolute item-picker w-36 h-36 flex flex-col items-center justify-end'
						onDragStart={(e) => dragStart(e, disposalMethods.length)}
						onDragEnd={drop}
						draggable
						style={{
							backgroundImage: `url(${selectedItem.image})`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}>
						<img
							src={selectedItem.image}
							alt='item'
							className='w-100 h-auto'
							style={{ display: 'none' }}
						/>
						<span className='text-white text-sm'>{selectedItem.name}</span>
					</div>
				)}

				{disposalMethods.map((method, index) => (
					<div
						className={method.id}
						key={method.id}
						onDragStart={(e) => dragStart(e, index)}
						onDragEnter={(e) => dragEnter(e, index)}
						onDragEnd={drop}>
						<DisposalBin
							content={method.name}
							direction='top'
							icon={method.icon}
						/>
					</div>
				))}
			</div>
			<div className='w-full absolute bottom-5 left-0 -ml-32 ground'></div>
			<div className='absolute bottom-4 tree'>
				<img
					src={TreeIcon}
					alt='plant'
					className='w-100 h-auto'
				/>
			</div>
			<div className='absolute bottom-2 flower'>
				<img
					src={FlowerIcon}
					alt='flower'
					className='w-100 h-auto'
				/>
			</div>
		</div>
	);
};

export default GameBoard;
