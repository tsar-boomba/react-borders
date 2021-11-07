import React, { useEffect, useState } from 'react';
import { BorderSettings } from '../../borderTypes';
import { generateBorder } from '../../generateBorder';
import { calcOffset, calcRotation } from '../../helpers';
import Icicle from './Icicle';
import '../../border.css';

const Icicles: React.FC<BorderSettings> = ({
	parentRef,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	side,
	offset,
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
					<Icicle
						values={icicleValues}
						backgroundColor={backgroundColor}
						side={side}
						key={index}
					/>
				);
			})}
		</div>
	);
};

Icicles.defaultProps = {
	heightConstrains: { min: 30, max: 60 },
	widthConstrains: { min: 10, max: 40 },
	offset: '100%',
};

export default Icicles;
