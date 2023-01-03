import React, { useState } from 'react';
import DisposalBin from '../components/DisposalBin';
import GameCommandButton from '../components/GameCommandButton';
import { disposalMethods, gameButtonDetails } from '../data/data';
import FlowerIcon from '../data/images/FlowerIcon.svg';
import Logo from '../data/images/Logo.svg';
import Road from '../data/images/Road.svg';
import TreeIcon from '../data/images/TreeIcon.svg';
import '../styles/GameBoard.css';
import ItemsCarousel from './ItemsCarousel';
import ToolTip from './ToolTip';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, failureBtn, searchBtn } =
		gameButtonDetails;

	const [
		bulkPickup,
		compostBin,
		hazardousWasteBin,
		recycleBin,
		repurposeBin,
		trashBin,
	] = disposalMethods;

	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const openCarousel = () => {
		setIsCarouselOpen(true);
	};
	const closeCarousel = () => {
		setIsCarouselOpen(false);
	};

	const saveSelectedItem = (item) => {
		setSelectedItem(item);
	};

	return (
		<div className='game-container w-screen h-screen relative bg-game-board bg-center bg-cover bg-no-repeat '>
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
							<GameCommandButton {...gameInfoBtn} />
						</span>
					</ToolTip>
					<ToolTip
						content='Random Item'
						direction='bottom'>
						<span>
							<GameCommandButton {...randomizeBtn} />
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
							<GameCommandButton {...failureBtn} />
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

			<DragDropContext>
				<Droppable droppableId='gango'>
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}>
							{selectedItem.length > 0 && !isCarouselOpen && (
								<Draggable
									key='selected-item'
									draggableId='selected-item'
									index={6}>
									{(provided) => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
											className='absolute item-picker w-36 h-36 flex flex-col items-center justify-center'>
											<img
												src={selectedItem[0].image}
												alt='item'
												className='w-100 h-auto'
											/>
											<span className='text-white text-sm'>
												{selectedItem[0].name}
											</span>
										</div>
									)}
								</Draggable>
							)}

							<Draggable
								draggableId='bulk-pickup'
								key='bulk-pickup'
								index={0}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='absolute bulk-pickup-track max-w-280'>
										<DisposalBin
											content={`${bulkPickup.name} Truck`}
											direction='top'
											icon={bulkPickup.icon}
										/>
									</div>
								)}
							</Draggable>

							<Draggable
								draggableId='repurpose-box'
								key='repurpose-box'
								index={1}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='repurpose-box max-w-280 absolute bottom-3'>
										<div className='w-3/4 -mt-10'>
											<DisposalBin
												content={`${repurposeBin.name} Box`}
												direction='top'
												icon={repurposeBin.icon}
											/>
										</div>
									</div>
								)}
							</Draggable>

							<Draggable
								key='trash-bin'
								draggableId='trash-bin'
								index={2}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='trash-bin max-w-280 absolute bottom-3'>
										<DisposalBin
											content={`${trashBin.name} Bin`}
											direction='top'
											icon={trashBin.icon}
										/>
									</div>
								)}
							</Draggable>

							<Draggable
								key='recycle-bin'
								draggableId='recycle-bin'
								index={3}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='recycle-bin max-w-280 absolute bottom-3'>
										<DisposalBin
											content={`${recycleBin.name} Bin`}
											direction='top'
											icon={recycleBin.icon}
										/>
									</div>
								)}
							</Draggable>

							<Draggable
								key='hazardous-waste-bin'
								draggableId='hazardous-waste-bin'
								index={4}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='hazardous-waste-bin max-w-280 absolute bottom-3'>
										<DisposalBin
											content={`${hazardousWasteBin.name} Bin`}
											direction='top'
											icon={hazardousWasteBin.icon}
										/>
									</div>
								)}
							</Draggable>

							<Draggable
								key='compost-bin'
								draggableId='compost-bin'
								index={5}
								isDragDisabled>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='compost-bin max-w-280 absolute bottom-3'>
										<DisposalBin
											content={`${compostBin.name} Bin`}
											direction='top'
											icon={compostBin.icon}
										/>
									</div>
								)}
							</Draggable>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>

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
