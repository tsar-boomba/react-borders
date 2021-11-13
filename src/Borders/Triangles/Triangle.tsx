import React from 'react';
import { BorderItemSettings } from '../../borderTypes';
import { hasWhitespace } from '../../helpers';

const Triangle: React.VFC<BorderItemSettings> = ({ values, backgroundColor, side, spacing }) => {
	const isGradient = hasWhitespace(backgroundColor);
	const topOrBottom = side === 'top' || side === 'bottom';

	return (
		<>
			<div
				style={{
					width: topOrBottom ? values.width - spacing : values.width,
					height: topOrBottom ? values.height : values.height - spacing,
					background: isGradient
						? `transparent linear-gradient(${
								topOrBottom ? '180deg' : '90deg'
						  }, ${backgroundColor})`
						: backgroundColor,
					clipPath: topOrBottom
						? 'polygon(0 0, 50% 100%, 100% 0)'
						: 'polygon(100% 50%, 0 0, 0 100%)',
				}}
			/>
		</>
	);
};

Triangle.defaultProps = {
	backgroundColor: 'rgba(205, 252, 255, 1) 0%, rgba(84, 182, 229, 1) 78%',
};

export default Triangle;
