import React, { useRef } from 'react';
import { Border, BorderSettings } from 'react-borders';

const ExampleBox: React.FC<
	Omit<BorderSettings, 'parentRef'> & { style?: React.CSSProperties; text?: string }
> = ({
	type,
	style,
	heightConstrains,
	widthConstrains,
	backgroundColor,
	offset,
	spacing,
	sides,
	text,
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
			{text || 'Triangles'}
			<Border
				parentRef={ExampleBoxRef}
				type={type}
				sides={sides}
				heightConstrains={heightConstrains}
				widthConstrains={widthConstrains}
				backgroundColor={backgroundColor}
				offset={offset}
				spacing={spacing}
			/>
		</div>
	);
};

export default ExampleBox;
