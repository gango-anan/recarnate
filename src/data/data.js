import BulkPickupTruck from './images/BulkPickupTruck.jpg';
import CompostBin from './images/CompostBin.jpg';
import HazardousWasteBin from './images/HazardousWasteBin.jpg';
import RecycleBin from './images/RecycleBin.jpg';
import RepurposeBox from './images/RepurposeBox.jpg';

export const disposalMethods = [
	{
		name: 'Bulk Pickup',
		description:
			'Bulky waste means large items of solid waste such as household appliances, furniture, large auto parts, trees, branches, stumps, and other oversize wastes whose large size precludes or complicates their handling by normal solid wastes collection, processing, or disposal methods.',
		icon: BulkPickupTruck,
	},
	{
		name: 'Compost',
		description:
			'Composting is a controlled, aerobic (oxygen-required) process that converts organic materials into a nutrient-rich soil amendment or mulch through natural decomposition.',
		icon: CompostBin,
	},
	{
		name: 'Hazardous Waste',
		description:
			'Hazardous waste is waste that has substantial or potential threats to public health or the environment. Hazardous waste is a type of dangerous goods. Many hazardous wastes can be recycled safely and effectively, while other wastes will be treated and disposed of in landfills or incinerators.',
		icon: HazardousWasteBin,
	},
	{
		name: 'Recycle',
		description:
			'Recycling is the process of converting waste materials into new materials and objects. The recovery of energy from waste materials is often included in this concept. The recyclability of a material depends on its ability to reacquire the properties it had in its original state.',
		icon: RecycleBin,
	},
	{
		name: 'Repurpose',
		description:
			'Repurposing is the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.',
		icon: RepurposeBox,
	},
];

export const correctResponses = [{}];

export const inCorrectResponses = [{}];
