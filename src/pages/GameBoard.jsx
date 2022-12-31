import React, { useState } from 'react';
import DisposalBin from '../components/DisposalBin';
import GameCommandButton from '../components/GameCommandButton';
import ToolTip from './ToolTip';
import { disposalMethods, gameButtonDetails } from '../data/data';
import Road from '../data/images/Road.svg';
import '../styles/GameBoard.css';
import TreeIcon from '../data/images/TreeIcon.svg';
import FlowerIcon from '../data/images/FlowerIcon.svg';
import Logo from '../data/images/Logo.svg';
import GasCylinder from '../data/images/GasCylinder.svg';
import ItemsCarousel from './ItemsCarousel';

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
	const openCarousel = () => {
		setIsCarouselOpen(true);
	};
	const closeCarousel = () => {
		setIsCarouselOpen(false);
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
				{isCarouselOpen && <ItemsCarousel closeCarousel={closeCarousel} />}
			</div>
			<div className='absolute bulk-pickup-track max-w-280'>
				<DisposalBin
					content={`${bulkPickup.name} Truck`}
					direction='top'
					icon={bulkPickup.icon}
				/>
			</div>
			<div className='w-full absolute road'>
				<img
					src={Road}
					alt='Road'
					className='w-screen'
				/>
			</div>
			{!isCarouselOpen && (
				<div className='absolute item-picker w-36 h-36 flex flex-col items-center justify-center'>
					<img
						src={GasCylinder}
						alt='item'
						className='w-100 h-auto'
					/>
					<span className='text-white text-base'>Gas Cylinder</span>
				</div>
			)}
			<div className='w-full flex justify-between absolute bottom-3 left-0'>
				<div className='repurpose-box w-1/4 mx-auto'>
					<div className='w-3/4 -mt-10'>
						<DisposalBin
							content={`${repurposeBin.name} Box`}
							direction='top'
							icon={repurposeBin.icon}
						/>
					</div>
				</div>
				<div className='w-1/2 flex gap-14 justify-end items-baseline pr-20'>
					<div className='trash-bin'>
						<DisposalBin
							content={`${trashBin.name} Bin`}
							direction='top'
							icon={trashBin.icon}
						/>
					</div>
					<div className='recycle-bin'>
						<DisposalBin
							content={`${recycleBin.name} Bin`}
							direction='top'
							icon={recycleBin.icon}
						/>
					</div>
					<div className='hazardous-waste-bin'>
						<DisposalBin
							content={`${hazardousWasteBin.name} Bin`}
							direction='top'
							icon={hazardousWasteBin.icon}
						/>
					</div>
					<div className='compost-bin'>
						<DisposalBin
							content={`${compostBin.name} Bin`}
							direction='top'
							icon={compostBin.icon}
						/>
					</div>
				</div>
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
