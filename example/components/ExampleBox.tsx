import React, { useRef } from 'react';
import { Border } from 'react-borders';

interface ExampleBoxProps {
	type: 'triangles';
	style?: React.CSSProperties;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
	backgroundColor?: string;
	offset?: number | string;
}

const ExampleBox: React.FC<ExampleBoxProps> = ({
	type,
	style,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	offset,
}) => {
	const ExampleBoxRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={ExampleBoxRef}
			style={{
				position: 'relative',
				fontSize: 32,
				fontWeight: 'bold',
				backgroundColor: 'green',
				...style,
			}}
		>
			Icicles
			<Border
				parentRef={ExampleBoxRef}
				type={type}
				sides={[1, 1, 1, 1]}
				heightConstrains={heightConstrains}
				widthConstrains={widthConstrains}
				backgroundColor={backgroundColor}
				offset={offset}
			/>
		</div>
	);
};

export default ExampleBox;
