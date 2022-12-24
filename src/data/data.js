import BulkPickupTruckIcon from './images/BulkPickupTruckIcon.svg';
import CancelIcon from './images/CancelIcon.svg';
import CompostBinIcon from './images/CompostBinIcon.svg';
import HazardousWasteBinIcon from './images/HazardousWasteBinIcon.svg';
import InfoIcon from './images/InfoIcon.svg';
import PlayIcon from './images/PlayIcon.svg';
import RandomizeIcon from './images/RandomizeIcon.svg';
import RecycleBinIcon from './images/RecycleBinIcon.svg';
import RepurposeBoxIcon from './images/RepurposeBoxIcon.svg';
import SuccessIcon from './images/SuccessIcon.svg';
import SoundIcon from './images/SoundIcon.svg';

export const disposalMethods = [
	{
		name: 'Bulk Pickup',
		description:
			'Bulky waste means large items of solid waste such as household appliances, furniture, large auto parts, trees, branches, stumps, and other oversize wastes whose large size precludes or complicates their handling by normal solid wastes collection, processing, or disposal methods.',
		icon: BulkPickupTruckIcon,
	},
	{
		name: 'Compost',
		description:
			'Composting is a controlled, aerobic (oxygen-required) process that converts organic materials into a nutrient-rich soil amendment or mulch through natural decomposition.',
		icon: CompostBinIcon,
	},
	{
		name: 'Hazardous Waste',
		description:
			'Hazardous waste is waste that has substantial or potential threats to public health or the environment. Hazardous waste is a type of dangerous goods. Many hazardous wastes can be recycled safely and effectively, while other wastes will be treated and disposed of in landfills or incinerators.',
		icon: HazardousWasteBinIcon,
	},
	{
		name: 'Recycle',
		description:
			'Recycling is the process of converting waste materials into new materials and objects. The recovery of energy from waste materials is often included in this concept. The recyclability of a material depends on its ability to reacquire the properties it had in its original state.',
		icon: RecycleBinIcon,
	},
	{
		name: 'Repurpose',
		description:
			'Repurposing is the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.',
		icon: RepurposeBoxIcon,
	},
];

export const gameButtonDetails = {
	closeBtn: {
		icon: CancelIcon,
		btnColor: 'bg-recarnate-primary-400',
		btnShadow: 'tutorial-close-button',
		btnInfo: 'Close Tutorial',
	},
	successBtn: {
		icon: SuccessIcon,
		btnColor: 'bg-recarnate-primary-300',
		btnShadow: 'correct-response-button',
		btnInfo: 'Correct move',
	},
	failureBtn: {
		icon: CancelIcon,
		btnColor: 'bg-recarnate-pink',
		btnShadow: 'incorrect-response-button',
		btnInfo: 'Wrong move',
	},
	randomizeBtn: {
		icon: RandomizeIcon,
		btnColor: 'bg-recarnate-primary-300',
		btnShadow: 'randomize-button',
		btnInfo: 'Pick random item',
	},
	gameInfoBtn: {
		icon: InfoIcon,
		btnColor: 'bg-recarnate-secondary-400',
		btnShadow: 'game-info-button',
		btnInfo: 'Open tutorial',
	},
	gamePlayBtn: {
		icon: PlayIcon,
		btnColor: 'bg-recarnate-secondary-300',
		btnShadow: 'game-play-button',
		btnInfo: 'Play game',
	},
	soundBtn: {
		icon: SoundIcon,
		btnColor: 'bg-recarnate-purple',
		btnShadow: 'game-sound-button',
		btnInfo: 'Turn on sound',
	},
};

export const correctResponses = [{}];

export const inCorrectResponses = [{}];
