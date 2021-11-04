import { BorderSettings } from './borderTypes';

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
			return { bottom: offset, top: 0, left: 0, transform: 'rotate(180deg)' };
		case 'right':
			return { left: offset, right: 0, bottom: 0, transform: 'rotate(270deg)' };
		case 'bottom':
			return { top: offset, left: 0, transform: 'rotate(360deg)' };
		case 'left':
			return { right: offset, top: 0, transform: 'rotate(90deg)' };
		default:
			throw new Error('Border must have placements defined.');
	}
};
