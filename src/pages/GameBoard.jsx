import React, { useState, useRef, useEffect } from 'react';
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
import { Draggable, Droppable } from '@syncfusion/ej2-base';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, cancelBtn, searchBtn } =
		gameButtonDetails;
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(disposalItems[14]);
	const [forceRender, setForceRender] = useState(false);
	const [popupStatus, setPopupStatus] = useState(false);
	const [dropChoice, updateDropChoice] = useState(null);
	const [status, setStatus] = useState({
		showModal: false,
	});

	const [isPromptOn, updateIsPromptOn] = useState(false);
	const [isSelectedItemVisible, updateSelectedItemVisibility] = useState(true);
	const draggable = useRef(null);
	const droppable = useRef(null);
	const selectedItemRef = useRef();
	selectedItemRef.current = selectedItem;

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
	const handleRandomization = () => {
		setSelectedItem(generateRandomItem());
	};
	const openChoiceModal = () => {
		setPopupStatus(true);
	};
	const closeChoiceModal = () => {
		if (dropChoice) {
			setSelectedItem(generateRandomItem());
		} else {
			setForceRender((prev) => !prev);
		}
		setPopupStatus(false);
		toggleSelectedItemVisibility();
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
	const openGameExitPrompt = () => {
		updateIsPromptOn(true);
	};
	const closeGameExitPrompt = () => {
		updateIsPromptOn(false);
	};
	const toggleSelectedItemVisibility = () => {
		updateSelectedItemVisibility((prevVisibility) => !prevVisibility);
	};

	useEffect(() => {
		let tempHold = null;
		const draggableElement = draggable.current;
		const droppableElement = droppable.current;

		const handleOver = (e) => {
			tempHold = e.target;
			tempHold.classList.add('zoom-droppable-container');
		};
		const handleOut = (e) => {
			tempHold.classList.remove('zoom-droppable-container');
			tempHold = null;
		};
		const handleDrop = (event) => {
			const draggedItem = selectedItemRef.current;
			let binIndex = null;
			binIndex = +event.target.getAttribute('data-bin-index');
			if (binIndex === null) {
				return;
			}

			const selectedItemDispoMethod = draggedItem.disposalMethod;
			const selectedBin = disposalMethods[binIndex].name;
			const isCorrectDisposalMethod = selectedItemDispoMethod === selectedBin;
			updateDropChoice(isCorrectDisposalMethod);
			openChoiceModal();
			toggleSelectedItemVisibility();
			tempHold.classList.remove('zoom-droppable-container');
		};

		new Draggable(draggableElement, {
			clone: false,
			scope: 'items',
		});
		new Droppable(droppableElement, {
			scope: 'items',
			drop: handleDrop,
			over: handleOver,
			out: handleOut,
		});
	}, [selectedItem, forceRender]);

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
								{...cancelBtn}
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
			{!isCarouselOpen && isSelectedItemVisible && (
				<div
					className='absolute selected-item w-32 h-32 flex flex-col items-center justify-end'
					style={{
						backgroundImage: `url(${selectedItem.image})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
					id='draggable-item'
					ref={draggable}>
					<span style={{ visibility: 'hidden', opacity: 0 }}>
						{forceRender}
					</span>
					<img
						src={selectedItem.image}
						alt='item'
						style={{ display: 'none' }}
					/>
					<span className='text-white text-sm'>{selectedItem.name}</span>
				</div>
			)}

			<div
				id='droppable-area'
				ref={droppable}>
				{disposalMethods.map((method, index) => (
					<div
						className={method.id}
						key={method.id}>
						<DisposalBin
							content={method.name}
							direction='top'
							icon={method.icon}
							index={index}
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
