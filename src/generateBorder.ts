import { Dispatch, SetStateAction } from 'react';
import { BorderSettings } from './borderTypes';

export const generateBorder = ({
	parentRef,
	side,
	widthConstrains,
	heightConstrains,
	setState,
}: Omit<BorderSettings, 'backgroundColor' | 'offset'> & {
	setState: Dispatch<SetStateAction<{ height: number; width: number }[]>>;
}) => {
	const topOrBottom = side === 'top' || side === 'bottom';
	const parentWidth = parentRef.current?.offsetWidth;
	const parentHeight = parentRef.current?.offsetHeight;
	const max = topOrBottom ? parentWidth : parentHeight;
	let curr = 0;
	const borderValues: { height: number; width: number }[] = [];
	while (true) {
		if (!heightConstrains || !widthConstrains) break;
		if (curr < max) {
			const height = Math.floor(
				Math.random() * (heightConstrains.max - heightConstrains.min + 1) +
					heightConstrains.min
			);
			const width = Math.floor(
				Math.random() * (widthConstrains.max - widthConstrains.min + 1) +
					widthConstrains.min
			);
			if (curr + width > max) {
				const shortenedwidth = max - curr;
				if (shortenedwidth < widthConstrains.min) break;
				borderValues.push({
					height: topOrBottom ? height : shortenedwidth,
					width: topOrBottom ? shortenedwidth : height,
				});
				break;
			}
			borderValues.push({
				height: topOrBottom ? height : width,
				width: topOrBottom ? width : height,
			});
			curr += width;
		} else {
			break;
		}
	}
	setState(borderValues);
};
