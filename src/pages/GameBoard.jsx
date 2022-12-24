import React from 'react';
import GameCommandButton from '../components/GameCommandButton';
import { gameButtonDetails } from '../data/data';
import BulkPickupTruck from '../data/images/BulkPickupTruckIcon.svg';
import CompostBin from '../data/images/CompostBinIcon.svg';
import HazardousWasteBin from '../data/images/HazardousWasteBinIcon.svg';
import RecycleBin from '../data/images/RecycleBinIcon.svg';
import RepurposeBox from '../data/images/RepurposeBoxIcon.svg';
import Road from '../data/images/Road.svg';
import TrashBin from '../data/images/TrashBinIcon.svg';
import '../styles/GameBoard.css';
import ToolTip from './ToolTip';

const GameBoard = () => {
	const { gameInfoBtn, randomizeBtn, soundBtn, failureBtn } = gameButtonDetails;
	return (
		<div className='game-container w-screen h-screen'>
			<div className='game-inner-container w-100 h-screen relative'>
				<div className='absolute w-screen flex justify-end gap-10 px-20 py-5'>
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

				<div className='absolute bulk-pickup-track w-40 h-40'>
					<ToolTip
						content='Bulk Pickup Track'
						direction='top'>
						<img
							src={BulkPickupTruck}
							alt='Bulk Pick up Truck'
							className='w-100 h-auto'
						/>
					</ToolTip>
				</div>

				<div className='absolute w-screen road'>
					<img
						src={Road}
						alt='Road'
						className='w-screen'
					/>
				</div>

				<div className='absolute bottom-0 repurpose-box'>
					<ToolTip
						content='Repuporse Box'
						direction='top'>
						{' '}
						<img
							src={RepurposeBox}
							alt='Repurpose Box'
							className='w-40 h-32'
						/>
					</ToolTip>
				</div>
				<div className='absolute bottom-5 trash-bin'>
					<ToolTip
						content='Trash Bin'
						direction='top'>
						<img
							src={TrashBin}
							alt='Trash Bin'
							className='w-32 h-28'
						/>
					</ToolTip>
				</div>
				<div className='absolute bottom-0 hazardous-waste-bin'>
					<ToolTip
						content='Hazardous Waste Bin'
						direction='top'>
						<img
							src={HazardousWasteBin}
							alt='Hazardous Waste Bin'
							className='w-32 h-32'
						/>
					</ToolTip>
				</div>
				<div className='absolute bottom-0 recycle-bin'>
					<ToolTip
						content='Recycle Bin'
						direction='top'>
						<img
							src={RecycleBin}
							alt='Recycle Bin'
							className='w-32 h-32'
						/>
					</ToolTip>
				</div>
				<div className='absolute bottom-0 compost-bin'>
					<ToolTip
						content='Compost Bin'
						direction='top'>
						<img
							src={CompostBin}
							alt='Compost Bin'
							className='w-32 h-32'
						/>
					</ToolTip>
				</div>
			</div>
		</div>
	);
};

export default GameBoard;
