import React, { useEffect, useState } from 'react';
import { WrapperSettings } from '../../borderTypes';
import { generateBorder } from '../../generateBorder';
import { calcOffset, calcRotation } from '../../helpers';
import Triangle from './Triangle';
import '../../border.css';

const TrianglesWrapper: React.FC<WrapperSettings> = ({
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
	const [icicles, setIcicles] = useState<{ height: number; width: number }[]>([]);
	const borderParams = {
		parentRef,
		heightConstrains,
		widthConstrains,
		side,
		setState: setIcicles,
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
				width: topOrBottom ? '100%' : undefined,
				height: topOrBottom ? undefined : '100%',
				flexFlow: topOrBottom ? undefined : 'column',
			}}
		>
			{icicles.map((icicleValues, index) => {
				return (
					<Triangle
						values={icicleValues}
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

TrianglesWrapper.defaultProps = {
	heightConstrains: { min: 30, max: 60 },
	widthConstrains: { min: 10, max: 40 },
	spacing: 0,
};

export default TrianglesWrapper;
