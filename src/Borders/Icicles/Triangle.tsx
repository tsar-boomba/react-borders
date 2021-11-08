import React from 'react';
import { BorderItemSettings } from '../../borderTypes';
import { hasWhitespace } from '../../helpers';

const Icicle: React.FC<BorderItemSettings> = ({ values, backgroundColor, side }) => {
	const isGradient = hasWhitespace(backgroundColor);
	const isTopOrBottom = side === 'top' || side === 'bottom';

	return (
		<>
			<div
				style={{
					width: values.width,
					height: values.height,
					background: isGradient
						? `transparent linear-gradient(${
								isTopOrBottom ? '180deg' : '90deg'
						  }, ${backgroundColor})`
						: backgroundColor,
					clipPath: isTopOrBottom
						? 'polygon(0 0, 50% 100%, 100% 0)'
						: 'polygon(100% 50%, 0 0, 0 100%)',
				}}
			/>
		</>
	);
};

Icicle.defaultProps = {
	backgroundColor: 'rgba(205, 252, 255, 1) 0%, rgba(84, 182, 229, 1) 78%',
};

export default Icicle;
