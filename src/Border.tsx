import React, { useMemo } from 'react';
import TrianglesWrapper from './Borders/Icicles/TrianglesWrapper';
import { BorderSettings } from './borderTypes';
import { calcSide, pickBorder } from './helpers';

const Border: React.FC<BorderSettings> = ({ type, sides, ...borderSettings }) => {
	const borders = useMemo(() => [TrianglesWrapper], []);
	const BorderType = pickBorder(type, borders);

	return (
		<>
			{sides.map((_, index) => (
				<BorderType key={index} side={calcSide(sides, index)} {...borderSettings} />
			))}
		</>
	);
};

Border.defaultProps = {
	offset: '100%',
};

export default Border;
