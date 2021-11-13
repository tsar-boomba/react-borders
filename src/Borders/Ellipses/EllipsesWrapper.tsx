import React, { useEffect, useState } from 'react';
import { WrapperSettings } from '../../borderTypes';
import { generateBorder } from '../../generateBorder';
import { calcOffset, calcRotation } from '../../helpers';
import Ellipse from './Ellipse';
import '../../border.css';

const EllipsesWrapper: React.VFC<WrapperSettings> = ({
	parentRef,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	side,
	offset,
	spacing,
}) => {
	if (!side) return <></>;
	const topOrBottom = side === 'top' || side === 'bottom';
	const [ellipses, setEllipses] = useState<{ height: number; width: number }[]>([]);
	const borderParams = {
		parentRef,
		heightConstrains,
		widthConstrains,
		side,
		setState: setEllipses,
	};

	const handleResize = () => {
		generateBorder(borderParams);
	};

	useEffect(() => {
		generateBorder(borderParams);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [parentRef]);

	return (
		<div
			className='react-border-border-wrapper'
			style={{
				...calcOffset(offset, side),
				...calcRotation(side),
				width: topOrBottom ? '100%' : 0,
				height: topOrBottom ? 0 : '100%',
				flexFlow: topOrBottom ? undefined : 'column',
				alignItems: 'center',
				zIndex: -1,
			}}
		>
			{ellipses.map((ellipseValues, index) => {
				return (
					<Ellipse
						values={ellipseValues}
						backgroundColor={backgroundColor}
						side={side}
						spacing={spacing || 0}
						key={index}
					/>
				);
			})}
		</div>
	);
};

EllipsesWrapper.defaultProps = {
	heightConstrains: { min: 10, max: 15 },
	widthConstrains: { min: 20, max: 30 },
	spacing: 0,
	offset: '100%',
};

export default EllipsesWrapper;
