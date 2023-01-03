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
import TrashBinIcon from './images/TrashBinIcon.svg';
import SearchBtnIcon from './images/SearchButtonIcon.svg';
import Apple from './images/ItemApple.svg';
import Battery from './images/ItemBattery.svg';
import DisposableCoffeCup from './images/ItemDisposableCoffeeCup.svg';
import GasCylinder from './images/ItemGasCylinder.svg';
import Microwave from './images/ItemMicrowave.svg';
import PaperCoffeeFilter from './images/ItemPaperCoffeeFilter.svg';
import PaperPlateClean from './images/ItemPaperPlate-Clean.svg';
import PaperPlateDirty from './images/ItemPaperPlate-Dirty.svg';
import PizzaBoxClean from './images/ItemPizzaBox-Clean.svg';
import PizzaBoxDirty from './images/ItemPizzaBox-Dirty.svg';
import PlasticBag from './images/ItemPlasticBag.svg';
import Table from './images/ItemTable.svg';
import TakeoutContainerClean from './images/ItemTakeoutContainer-Clean.svg';
import TakeoutContainerDirty from './images/ItemTakeoutContainer-Dirty.svg';
import Tire from './images/ItemTire.svg';
import WaterBottleClean from './images/ItemWaterBottle-Clean.svg';
import WaterBottleDirty from './images/ItemWaterBottle-Dirty.svg';
import Wine from './images/ItemWine.svg';
import WineBottle from './images/ItemWineBottle.svg';

export const disposalMethods = [
	{
		id: 'bulk-pickup-truck',
		name: 'Bulk Pickup',
		description:
			'Bulky waste means large items of solid waste such as household appliances, furniture, large auto parts, trees, branches, stumps, and other oversize wastes whose large size precludes or complicates their handling by normal solid wastes collection, processing, or disposal methods.',
		icon: BulkPickupTruckIcon,
	},
	{
		id: 'repurpose-box',
		name: 'Repurpose',
		description:
			'Repurposing is the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.',
		icon: RepurposeBoxIcon,
	},
	{
		id: 'trash-bin',
		name: 'Trash',
		description:
			'Trashing is the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.',
		icon: TrashBinIcon,
	},
	{
		id: 'recycle-bin',
		name: 'Recycle',
		description:
			'Recycling is the process of converting waste materials into new materials and objects. The recovery of energy from waste materials is often included in this concept. The recyclability of a material depends on its ability to reacquire the properties it had in its original state.',
		icon: RecycleBinIcon,
	},
	{
		id: 'hazardous-waste-bin',
		name: 'Hazardous Waste',
		description:
			'Hazardous waste is waste that has substantial or potential threats to public health or the environment. Hazardous waste is a type of dangerous goods. Many hazardous wastes can be recycled safely and effectively, while other wastes will be treated and disposed of in landfills or incinerators.',
		icon: HazardousWasteBinIcon,
	},
	{
		id: 'compost-bin',
		name: 'Compost',
		description:
			'Composting is a controlled, aerobic (oxygen-required) process that converts organic materials into a nutrient-rich soil amendment or mulch through natural decomposition.',
		icon: CompostBinIcon,
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
	searchBtn: {
		icon: SearchBtnIcon,
		btnColor: 'recarnate-primary-400',
		btnShadow: 'search-button',
		btnInfo: 'Search item',
	},
};

export const disposalItems = [
	{
		id: 'item-6',
		name: 'Microwave',
		status: '',
		disposalMethod: 'BulkPickUp',
		recarnatesTo: ['Metal for circuitry'],
		image: Microwave,
	},
	{
		id: 'item-7',
		name: 'Paper Coffee Filter',
		status: '',
		disposalMethod: 'Compost',
		recarnatesTo: ['Fertilizer'],
		image: PaperCoffeeFilter,
	},
	{
		id: 'item-8',
		name: 'Paper Plate',
		status: 'clean',
		disposalMethod: 'Recycle',
		recarnatesTo: [
			'Paper towels',
			'Tissues',
			'Printing paper',
			'Writing paper',
		],
		image: PaperPlateClean,
	},
	{
		id: 'item-9',
		name: 'Paper Plate',
		status: 'dirty',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: PaperPlateDirty,
	},
	{
		id: 'item-10',
		name: 'Pizza Box',
		status: 'clean',
		disposalMethod: 'Recycle',
		recarnatesTo: [
			'Paper towels',
			'Tissues',
			'Printing paper',
			'Writing paper',
		],
		image: PizzaBoxClean,
	},
	{
		id: 'item-11',
		name: 'Pizza Box',
		status: 'clean',
		disposalMethod: 'Repurpose',
		recarnatesTo: ['Cat Bed'],
		image: PizzaBoxClean,
	},
	{
		id: 'item-12',
		name: 'Pizza Box',
		status: 'dirty',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: PizzaBoxDirty,
	},
	{
		id: 'item-13',
		name: 'Plastic Bag',
		status: '',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: PlasticBag,
	},
	{
		id: 'item-14',
		name: 'Table',
		status: '',
		disposalMethod: 'BulkPickUp',
		recarnatesTo: ['Reclaimed wood'],
		image: Table,
	},
	{
		id: 'item-15',
		name: 'Takeout Container',
		status: 'clean',
		disposalMethod: 'Recycle',
		recarnatesTo: ['Material for new containers'],
		image: TakeoutContainerClean,
	},
	{
		id: 'item-16',
		name: 'Takeout Container',
		status: 'dirty',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: TakeoutContainerDirty,
	},
	{
		id: 'item-17',
		name: 'Tire',
		status: '',
		disposalMethod: 'BulkPickUp',
		recarnatesTo: ['Rubber for tools '],
		image: Tire,
	},
	{
		id: 'item-18',
		name: 'Water Bottle',
		status: 'clean',
		disposalMethod: 'Recycle',
		recarnatesTo: ['Material for new containers '],
		image: WaterBottleClean,
	},
	{
		id: 'item-19',
		name: 'Water Bottle',
		status: 'dirty',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: WaterBottleDirty,
	},
	{
		id: 'item-20',
		name: 'Wine',
		status: '',
		disposalMethod: '',
		recarnatesTo: ['Fertilizer'],
		image: Wine,
	},
	{
		id: 'item-21',
		name: 'Wine Bottle',
		status: '',
		disposalMethod: 'Recycle',
		recarnatesTo: ['Material for new containers'],
		image: WineBottle,
	},
	{
		id: 'item-22',
		name: 'Wine Bottle',
		status: '',
		disposalMethod: 'Repurpose',
		recarnatesTo: ['Candle'],
		image: WineBottle,
	},
	{
		id: 'item-1',
		name: 'Apple',
		status: '',
		disposalMethod: 'Compost',
		recarnatesTo: ['Fertilizer'],
		image: Apple,
	},
	{
		id: 'item-2',
		name: 'Lithium Battery',
		status: '',
		disposalMethod: 'HazardousWaste',
		recarnatesTo: ['Critical cobalt', 'graphite', 'lithium minerals'],
		image: Battery,
	},
	{
		id: 'item-3',
		name: 'Disposable Coffee Cup',
		status: '',
		disposalMethod: 'Trash',
		recarnatesTo: ['Though correct, its 💀'],
		image: DisposableCoffeCup,
	},
	{
		id: 'item-4',
		name: 'Gas Cylinder',
		status: '',
		disposalMethod: 'HazardousWaste',
		recarnatesTo: ['Scrap Metal', 'Steel', 'Copper'],
		image: GasCylinder,
	},
	{
		id: 'item-5',
		name: 'Gas Cylinder',
		status: '',
		disposalMethod: 'Repurpose',
		recarnatesTo: ['Portable firepit', 'Stove'],
		image: GasCylinder,
	},
];

export const correctResponses = [{}];

export const inCorrectResponses = [{}];
