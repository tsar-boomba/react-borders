import React, { useEffect, useState } from 'react';
import Icicle from './Icicle';
import './index.css';

interface IciclesProps {
	parentRef: React.MutableRefObject<any>;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	top?: number | string;
}

const Icicles: React.FC<IciclesProps> = ({ parentRef, heightConstrains, widthConstrains, top }) => {
	const getParentWidth = () => parentRef.current?.offsetWidth;
	const [icicles, setIcicles] = useState<{ height: number; width: number }[]>([]);

	const createIcicles = () => {
		const max = getParentWidth();
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
		<div className='Wrapper' style={{ top: top }}>
			{icicles.map((icicleValues, index) => {
				return <Icicle values={icicleValues} key={index} />;
			})}
		</div>
	);
};

Icicles.defaultProps = {
	heightConstrains: { min: 30, max: 60 },
	widthConstrains: { min: 10, max: 40 },
	top: '100%',
};

export default Icicles;
