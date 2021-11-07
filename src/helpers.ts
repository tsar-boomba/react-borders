import { BorderSettings, BorderTypes, Sides } from './borderTypes';
import Icicles from './Borders/Icicles/IciclesWrapper';

export const hasWhitespace = (str = '') => /\s/g.test(str);

export const calcSide = (
	sides: [0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined],
	index: number
) => {
	const currSide = sides[index];
	switch (index) {
		case 0:
			return currSide ? 'top' : undefined;
		case 1:
			return currSide ? 'right' : undefined;
		case 2:
			return currSide ? 'bottom' : undefined;
		case 3:
			return currSide ? 'left' : undefined;
		default:
			throw new Error('Check your arguent to the placement prop, it is invalid.');
	}
};

export const calcOffset = (offset: string | number | undefined, side: BorderSettings['side']) => {
	if (!offset) offset = '100%';

	switch (side) {
		case 'top':
			return { bottom: offset, top: 0, left: 0 };
		case 'right':
			return { left: offset, top: 0, bottom: 0 };
		case 'bottom':
			return { top: offset, left: 0 };
		case 'left':
			return { right: offset, top: 0 };
		default:
			throw new Error('Border must have placements defined.');
	}
};

export const calcRotation = (side: Sides) => {
	switch (side) {
		case 'top':
			return { transform: 'rotate(180deg)' };
		case 'right':
			return { transform: 'rotate(360deg)' };
		case 'bottom':
			return { transform: 'rotate(360deg)' };
		case 'left':
			return { transform: 'rotate(180deg)' };
		default:
			throw new Error(
				'Error calculating border rotation, component may not have recieved side prop.'
			);
	}
};

export const pickBorder = (type: BorderTypes) => {
	switch (type) {
		case 'icicles':
			return Icicles;
		default:
			throw new Error('Border received invalid type prop.');
	}
};