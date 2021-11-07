import React from 'react';
import { BorderSettings, BorderTypes } from './borderTypes';
import { calcSide, pickBorder } from './helpers';

interface BorderProps {
	type: BorderTypes;
	sides: [0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined];
	// [1, 0, 0, 1] top and left
	// [0, 1, 1, 0] right and bottom
}

const Border: React.FC<BorderProps & Omit<BorderSettings, 'side'>> = ({
	type,
	sides,
	...borderSettings
}) => {
	const BorderType = pickBorder(type);

	return (
		<>
			{sides.map((_, index) => (
				<BorderType key={index} side={calcSide(sides, index)} {...borderSettings} />
			))}
		</>
	);
};

export default Border;