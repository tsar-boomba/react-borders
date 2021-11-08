import React, { useMemo } from 'react';
import EllipsesWrapper from './Borders/Ellipses/EllipsesWrapper';
import TrianglesWrapper from './Borders/Triangles/TrianglesWrapper';
import { BorderSettings } from './borderTypes';
import { calcSide, pickBorder } from './helpers';

const Border: React.FC<BorderSettings> = ({ type, sides, ...borderSettings }) => {
	const borders = useMemo(() => [TrianglesWrapper, EllipsesWrapper], []);
	const BorderType = pickBorder(type, borders);

	return (
		<>
			{sides.map((_, index) => (
				<BorderType key={index} side={calcSide(sides, index)} {...borderSettings} />
			))}
		</>
	);
};

export default Border;
