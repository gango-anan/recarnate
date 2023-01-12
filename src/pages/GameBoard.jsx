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
import ButtonClicked from '../data/audio/ButtonClicked.mp3';
import Correct from '../data/audio/Correct.mp3';
import Incorrect from '../data/audio/Incorrect.mp3';
import ItemDragged from '../data/audio/ItemDraggedToWMT.mp3';
import SoundOffIcon from '../data/images/SoundOff.svg';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, cancelBtn, searchBtn } =
		gameButtonDetails;
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(disposalItems[14]);
	const [forceRender, setForceRender] = useState(false);
	const [popupStatus, setPopupStatus] = useState(false);
	const [isSoundOn, updateSoundOn] = useState(true);
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
	const soundStatus = useRef();
	soundStatus.current = isSoundOn;
	const selectedDispoBin = useRef(null);

	const handleCorrectChoiceSound = () => {
		new Audio(Correct).play();
	};
	const handleInCorrectChoiceSound = () => {
		new Audio(Incorrect).play();
	};
	const handleButtonClickedSound = () => {
		new Audio(ButtonClicked).play();
	};
	const handleItemDraggedSound = () => {
		new Audio(ItemDragged).play();
	};
	const randomIndexInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	const generateRandomItem = () => {
		const itemIndex = randomIndexInRange(0, disposalItems.length - 1);
		return disposalItems[itemIndex];
	};

	const openCarousel = () => {
		isSoundOn && handleButtonClickedSound();
		setIsCarouselOpen(true);
	};
	const closeCarousel = () => {
		setIsCarouselOpen(false);
	};
	const openModal = () => {
		isSoundOn && handleButtonClickedSound();
		setStatus({ showModal: true });
	};
	const closeModal = () => {
		setStatus({ showModal: false });
	};
	const handleRandomization = () => {
		isSoundOn && handleButtonClickedSound();
		setSelectedItem(generateRandomItem());
	};
	const toggleSound = () => {
		isSoundOn && handleButtonClickedSound();
		updateSoundOn((prev) => !prev);
	};
	const openGameExitPrompt = () => {
		isSoundOn && handleButtonClickedSound();
		updateIsPromptOn(true);
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
	const saveSelectedItem = (item) => {
		setSelectedItem(item);
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
			const currentSoundStatus = soundStatus.current;
			currentSoundStatus && handleItemDraggedSound();
			tempHold = e.target;
			tempHold.classList.add('zoom-droppable-container');
		};
		const handleOut = (e) => {
			tempHold.classList.remove('zoom-droppable-container');
			tempHold = null;
		};
		const handleDrop = (event) => {
			const currentSoundStatus = soundStatus.current;
			const draggedItem = selectedItemRef.current;
			let binIndex = null;
			binIndex = +event.target.getAttribute('data-bin-index');
			if (binIndex === null) {
				return;
			}
			const selectedItemDispoMethods = draggedItem.itemDisposalMethods;
			const selectedBin = disposalMethods[binIndex].name;
			selectedDispoBin.current = selectedBin;
			if (selectedBin in selectedItemDispoMethods) {
				currentSoundStatus && handleCorrectChoiceSound();
				updateDropChoice(true);
			} else {
				currentSoundStatus && handleInCorrectChoiceSound();
				updateDropChoice(false);
			}
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
	}, [selectedItem, forceRender, isSoundOn]);

	return (
		<div className='game-container w-screen h-screen relative bg-game-board bg-center bg-cover bg-no-repeat '>
			<DragChoicePopupModal
				popupStatus={popupStatus}
				closeChoiceModal={closeChoiceModal}
				dropChoice={dropChoice}
				selectedItem={selectedItem}
				selectedDispoBin={selectedDispoBin.current}
			/>
			<GameTutorialModal
				status={status}
				closeModal={closeModal}
			/>
			<GameEndPromptModal
				closeGameExitPrompt={closeGameExitPrompt}
				isPromptOn={isPromptOn}
			/>
			<div className='w-full absolute flex justify-between px-20 pt-10 pb-5'>
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
							<GameCommandButton
								{...soundBtn}
								closeModal={toggleSound}
								icon={isSoundOn ? soundBtn.icon : SoundOffIcon}
							/>
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
			<div
				className='w-full absolute road'
				style={{
					backgroundImage: `url(${Road})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<img
					src={Road}
					alt='Road'
					style={{ display: 'none' }}
				/>
			</div>
			{!isCarouselOpen && isSelectedItemVisible && (
				<div
					className='absolute selected-item w-36 h-36'
					style={{
						backgroundImage: `url(${selectedItem.image})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
					id='draggable-item'
					ref={draggable}>
					<div className='w-full h-full relative  flex flex-col items-center justify-end'>
						<div className='w-full h-full absolute left-0 top-0 bg-transparent z-10'></div>
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
					className='h-auto'
				/>
			</div>
			<div className='absolute bottom-2 flower'>
				<img
					src={FlowerIcon}
					alt='flower'
					className='h-auto'
				/>
			</div>
		</div>
	);
};

export default GameBoard;
