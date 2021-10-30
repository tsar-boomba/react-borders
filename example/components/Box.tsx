import React, { useRef } from 'react';
import { Icicles } from 'icicles';

interface BoxProps {
	style?: React.CSSProperties;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	backgroundColor?: string;
	top?: number | string;
}

const Box: React.FC<BoxProps> = ({
	style,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	top,
}) => {
	const boxRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={boxRef}
			style={
				style || {
					position: 'relative',
					width: 200,
					padding: 16,
					fontSize: 32,
					fontWeight: 'bold',
				}
			}
		>
			Icicles
			<Icicles
				parentRef={boxRef}
				heightConstrains={heightConstrains}
				widthConstrains={widthConstrains}
				backgroundColor={backgroundColor}
				top={top}
			/>
		</div>
	);
};

export default Box;
