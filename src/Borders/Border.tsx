import React from 'react';
import { BorderSettings } from './borderTypes';
import { calcSide } from './helpers';
import Icicles from './Icicles/Icicles';

interface BorderProps {
	type: 'icicles';
	sides: [0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined, 0 | 1 | undefined];
	// [1, 0, 0, 1] top and left
	// [0, 1, 1, 0] right and bottom
}

const Border: React.FC<BorderProps & Omit<BorderSettings, 'side'>> = ({
	type,
	sides,
	...borderSettings
}) => {
	return (
		<>
			{sides.map((_, index) => (
				<Icicles key={index} side={calcSide(sides, index)} {...borderSettings} />
			))}
		</>
	);
};

export default Border;
