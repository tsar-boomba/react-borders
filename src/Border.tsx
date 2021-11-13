import React, { useEffect, useMemo } from 'react';
import EllipsesWrapper from './Borders/Ellipses/EllipsesWrapper';
import TrianglesWrapper from './Borders/Triangles/TrianglesWrapper';
import { BorderSettings } from './borderTypes';
import { calcSide, pickBorder } from './helpers';

const Border: React.VFC<BorderSettings> = ({ type, sides, parentRef, ...borderSettings }) => {
	const borders = useMemo(() => [TrianglesWrapper, EllipsesWrapper], []);
	const BorderType = pickBorder(type, borders);

	useEffect(() => {
		parentRef.current.style.position = 'relative';
	}, [parentRef]);

	return (
		<>
			{sides.map((_, index) => (
				<BorderType
					key={index}
					side={calcSide(sides, index)}
					parentRef={parentRef}
					{...borderSettings}
				/>
			))}
		</>
	);
};

export default Border;
