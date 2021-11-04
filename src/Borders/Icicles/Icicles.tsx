import React, { useEffect, useState } from 'react';
import { BorderSettings } from '../borderTypes';
import { calcOffset } from '../helpers';
import Icicle from './Icicle';
import './icicles.css';

const Icicles: React.FC<BorderSettings> = ({
	parentRef,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	side,
	offset,
}) => {
	if (!side) return <></>;
	const getParentWidth = () => parentRef.current?.offsetWidth;
	const getParentHeight = () => parentRef.current?.offsetHeight;
	const topOrBottom = side === 'top' || side === 'bottom';
	const [icicles, setIcicles] = useState<{ height: number; width: number }[]>([]);

	const createIcicles = () => {
		const max = topOrBottom ? getParentWidth() : getParentHeight();
		console.log({ max });
		let curr = 0;
		const icicleValues: { height: number; width: number }[] = [];
		while (true) {
			if (!heightConstrains || !widthConstrains) break;
			if (curr < max) {
				const height = Math.floor(
					Math.random() * (heightConstrains.max - heightConstrains.min + 1) +
						heightConstrains.min
				);
				const width = Math.floor(
					Math.random() * (widthConstrains.max - widthConstrains.min + 1) +
						widthConstrains.min
				);
				if (curr + width > max) {
					const shortenedwidth = max - curr;
					if (shortenedwidth < widthConstrains.min) break;
					icicleValues.push({ height: height, width: shortenedwidth });
					break;
				}
				icicleValues.push({ height: height, width: width });
				curr += width;
			} else {
				break;
			}
		}
		setIcicles(icicleValues);
	};

	const handleResize = () => {
		createIcicles();
	};

	useEffect(() => {
		createIcicles();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [parentRef]);

	return (
		<div
			className='Wrapper'
			style={{
				...calcOffset(offset, side),
				width: topOrBottom ? getParentWidth() : getParentHeight(),
			}}
		>
			{icicles.map((icicleValues, index) => {
				return (
					<Icicle values={icicleValues} backgroundColor={backgroundColor} key={index} />
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
