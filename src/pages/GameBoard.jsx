import React from 'react';
import '../styles/GameBoard.css';
import CompostBin from '../data/images/CompostBinIcon.svg';
import HazardousWasteBin from '../data/images/HazardousWasteBinIcon.svg';
import RepurposeBox from '../data/images/RepurposeBoxIcon.svg';
import RecycleBin from '../data/images/RecycleBinIcon.svg';
import BulkPickupTruck from '../data/images/BulkPickupTruckIcon.svg';
import Road from '../data/images/Road.svg';
import Plants from '../data/images/PlantsIcon.svg';
import Tree from '../data/images/TreeIcon.svg';
import TrashBin from '../data/images/TrashBinIcon.svg';
import GameCommandButton from '../components/GameCommandButton';
import { gameButtonDetails } from '../data/data';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, failureBtn } = gameButtonDetails;
	return (
		<div className='game-container w-screen h-screen'>
			<div className='game-inner-container w-100 h-screen relative'>
				<div className='absolute w-screen flex justify-end gap-10 px-20 py-5'>
					<span className='w-16 h-16'>
						<GameCommandButton {...gameInfoBtn} />
					</span>
					<span>
						<GameCommandButton {...randomizeBtn} />
					</span>
					<span>
						<GameCommandButton {...soundBtn} />
					</span>
					<span>
						<GameCommandButton {...failureBtn} />
					</span>
				</div>

				<div className='absolute bulk-pickup-track w-40 h-40'>
					<img
						src={BulkPickupTruck}
						alt='Bulk Pick up Truck'
						className='w-100 h-auto'
					/>
				</div>

				<div className='absolute w-screen road'>
					<img
						src={Road}
						alt='Road'
						className='w-screen'
					/>
				</div>

				<div className='absolute bottom-0 repurpose-box'>
					<img
						src={RepurposeBox}
						alt='Repurpose Box'
						className='w-40 h-32'
					/>
				</div>
				<div className='absolute bottom-5 trash-bin'>
					<img
						src={TrashBin}
						alt='Trash Bin'
						className='w-32 h-28'
					/>
				</div>
				<div className='absolute bottom-0 hazardous-waste-bin'>
					<img
						src={HazardousWasteBin}
						alt='Hazardous Waste Bin'
						className='w-32 h-32'
					/>
				</div>
				<div className='absolute bottom-0 recycle-bin'>
					<img
						src={RecycleBin}
						alt='Recycle Bin'
						className='w-32 h-32'
					/>
				</div>
				<div className='absolute bottom-0 compost-bin'>
					<img
						src={CompostBin}
						alt='Compost Bin'
						className='w-32 h-32'
					/>
				</div>

				{/* <div className='ground'>
					<div className='w-'>Plants</div>
					<div>Tree</div>
				</div> */}
			</div>
		</div>
	);
};

export default GameBoard;
