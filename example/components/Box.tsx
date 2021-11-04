import React, { useRef } from 'react';
import { Border } from 'react-borders';

interface BoxProps {
	style?: React.CSSProperties;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	backgroundColor?: string;
	offset?: number | string;
}

const Box: React.FC<BoxProps> = ({
	style,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	offset,
}) => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={boxRef}
			style={
				style || {
					position: 'relative',
					fontSize: 32,
					fontWeight: 'bold',
					backgroundColor: 'green',
				}
			}
		>
			Icicles
			<Border
				parentRef={boxRef}
				type='icicles'
				sides={[1, 1, 1, 1]}
				heightConstrains={heightConstrains}
				widthConstrains={widthConstrains}
				backgroundColor={backgroundColor}
				offset={offset}
			/>
		</div>
	);
};

export default Box;
